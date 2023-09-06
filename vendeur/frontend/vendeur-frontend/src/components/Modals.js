import axios from "axios";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

function Modals({ vendeurId }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/vendeur/${ vendeurId }`);
      // Recharger les données pour refléter les changements
      window.location.reload();
    } catch (error) {
      console.error(error);
      // Traitez l'erreur ici
    }
  };

  return (
    <div>
      <Button type="button" onClick={handleShow} className="dropdown-item">
        <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />
        Delete
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="mt-2 text-center">
            <lord-icon
              src="https://cdn.lordicon.com/gsqxdxog.json"
              trigger="loop"
              colors="primary:#f7b84b,secondary:#f06548"
            />
            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
              <h4>Are you Sure ?</h4>
              <p className="text-muted mx-4 mb-0">
                Are you Sure You want to Remove this Project ?
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <Button variant="light" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Yes, Delete It!
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Modals;