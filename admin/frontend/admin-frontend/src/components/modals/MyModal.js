
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './css/modals.css'
import { useEffect } from 'react';
import axios from 'axios';
function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('http://localhost:3001/api/vendeur');
        setData(result.data.data);
      };
  
      fetchData();
    }, []);
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/api/vendeur/${id}`);
        // Recharger les données pour refléter les changements
       
      };
  return (
    <>
      <Button variant="primary" onClick={handleShow}  className='containe-1'>
       +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Vendors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
         
        </Modal.Footer>
      </Modal>+
    </>
  );
}

export default MyModal;