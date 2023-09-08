
import { useState } from 'react';
import MyModal from './modals/MyModal';
import Axios from 'axios';
import '../components/modals/css/modals.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useNavigate } from 'react-router-dom';


function Main() {


  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
    console.log(data);
  };

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const [data, setData] = useState({
    nom: '',
    information_vendeur: '',
    cathegorie_produit: '',
    profil: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const donn = {
      nom: data.nom,
      information_vendeur: content,
      cathegorie_produit: data.cathegorie_produit,
      profil: data.profil && data.profil.name ? data.profil : null,
      password: data.password
    };
    console.log(donn);
    Axios.post("http://localhost:3001/api/vendeur", donn,  {headers: {'Content-Type': 'multipart/form-data'}}
    ).then(res => {
        setMessage(res.data.message);
       navigate('/AllcomponentsList');
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    if (e.target.id === 'profil') {
      newdata[e.target.id] = e.target.files[0];
    } else {
      newdata[e.target.id] = e.target.value;
    }
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0">Create vendors</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                  <li className="breadcrumb-item active">Create vendors</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <form onSubmit={handleSubmit} className="col-lg-8">
            <div>
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="project-title-input">Name vendors</label>
                    <input type="text" className="form-control" name="nom" id="nom" value={data.nom} onChange={handle} placeholder="Enter vendors name" />
                  </div>
                  {message && <p className="confirm">{message}</p>}
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <div id="ckeditor-classic">
                      <div>
                        <CKEditor
                          editor={ClassicEditor}
                          data={content}
                          onChange={handleEditorChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="mb-3 mb-lg-0">
                        <label htmlFor="choices-priority-input" className="form-label">Types de produit</label>
                        <select className="form-select" data-choices data-choices-search-false id="cathegorie_produit" name="cathegorie_produit" value={data.cathegorie_produit} onChange={handle}>
                          <option>--ajouter--</option>
                          <option value="Alimentaire">Alimentaire</option>
                          <option value="Electronique">Electronique</option>
                          <option value="vetement">vetement</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div>
                        <label htmlFor="datepicker-deadline-input" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" name="password" value={data.password} onChange={handle} placeholder="Enter password" data-provider="flatpickr" />
                      </div>
                    </div>

                    <div className="col-lg-4"> <div> <label htmlFor="profil" className="form-label">Profil</label> <input type="file" className="form-control" id="profil" name="profil" onChange={handle} /> </div> </div> </div> <div className="text-end"> <button type="submit" className="btn btn-success waves-effect waves-light mt-2">Create</button> </div> </div> </div> </div> </form> </div> </div> <MyModal showModal={showModal} handleClose={handleClose} /> </div> ); }
export default Main;