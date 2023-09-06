import React, { useState } from 'react';
import axios from 'axios';
import AllComponentsList from './AllComponentsList';

const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour gérer la connexion réussie
  const [nom, setNom] = useState(''); // État pour stocker la valeur du nom d'utilisateur
  const [password, setPassword] = useState(''); // État pour stocker la valeur du mot de passe
  const [showForm, setShowForm] = useState(true); // État pour gérer la visibilité du formulaire
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async (e) => {
    e.preventDefault(); // Empêcher le formulaire de se réinitialiser
    setLoading(true);
        setTimeout( async () => {
        setLoading(true);

          try {
          const response = await axios.post('http://localhost:3001/api/login', {
            nom: nom, 
            password: password 
          });

          if (response.data.success) {
            setIsLoggedIn(true); // Mettre à jour l'état pour indiquer que la connexion est réussie
          } else {
            setErrorMessage(response.data.message); // Mettre à jour l'état avec le message d'erreur
          }
        } catch (error) {
          setLoading(false);
          setErrorMessage("Nom d'utilisateur ou mot de pass inccorect"); 
          // Gérez les erreurs de requête
        }
      }, 3000)
  };

  return (
    <div>
      {isLoggedIn ? (
        <AllComponentsList />
      ) : (
        showForm && (
        <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
      
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card overflow-hidden">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="p-lg-5 p-4 auth-one-bg h-100">
                                        <div class="bg-overlay"></div>
                                        <div class="position-relative h-100 d-flex flex-column">
                                            <div class="mb-4">
                                                <a href="index-2.html" class="d-block">
                                                    <img src="assets/images/logo-light.png" alt="" height="18"/>
                                                </a>
                                            </div>
                                            <div class="mt-auto">
                                                <div class="mb-3">
                                                    <i class="ri-double-quotes-l display-4 text-success"></i>
                                                </div>

                                                <div id="qoutescarouselIndicators" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div class="carousel-inner text-center text-white-50 pb-5">
                                                        <div class="carousel-item active">
                                                            <p class="fs-15 fst-italic">"TogetSuite Ecommerce: Votre succès en ligne, notre priorité !"</p>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               

                                <div class="col-lg-6">
                                    <div class="p-lg-5 p-4">
                                        <div>
                                            <h5 class="text-primary">Welcome Back !</h5>
                                            <p class="text-muted">Sign in to continue to suite sale.</p>
                                        </div>

                                        <div class="mt-4">
                                        <form onSubmit={handleLogin}>
                                        {loading && <div>Chargement...<i class="gg-spinner-two-alt" ></i></div>}
                                        {errorMessage && <div className="text-danger">{errorMessage}</div>}
                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Username</label>
                                                    <input
                                                    type="text"
                                                    class="form-control"
                                                    id="username"
                                                    placeholder="Enter username"
                                                    value={nom}
                                                    onChange={(e) => setNom(e.target.value)}
                                                    />
                                                </div>

                                      <div class="mb-3">
                                        <div class="float-end">
                                          <a href="auth-pass-reset-cover.html" class="text-muted">Forgot password?</a>
                                        </div>
                                        <label class="form-label" for="password-input">Password</label>
                                        <div class="position-relative auth-pass-inputgroup mb-3">
                                          <input
                                            type={showPassword ? "text" : "password"}
                                            class="form-control pe-5 password-input"
                                            placeholder="Enter password"
                                            id="password-input"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                          />
                                          <button
                                            class="btn btn-link position-absolute end-0 top-0 text-decoration-none shadow-none text-muted password-addon"
                                            type="button"
                                            id="password-addon"
                                            onClick={handleTogglePasswordVisibility}
                                          >
                                            
                                            <i class="ri-eye-fill align-middle"></i>
                                          </button>
                                        </div>
                                      </div>

  

  <div class="mt-4">
    <button class="btn btn-success w-100" type="submit">Sign In  </button>
  </div>

  <div class="mt-4 text-center">
    <div class="signin-other-title">
      <h5 class="fs-13 mb-4 title">Sign In with</h5>
    </div>

   
  </div>
</form>
                                        </div>

                                        <div class="mt-5 text-center">
                                            <p class="mb-0">Don't have an account ? <a href="auth-signup-cover.html" class="fw-semibold text-primary text-decoration-underline"> Signup</a> </p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                          
                        </div>
                      
                    </div>
                  

                </div>
             
            </div>
    
        </div>
       

       
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <p class="mb-0">&copy;
                                 Velzon. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
       
    </div>
        )
      )}
    </div>
  );
};

export default LoginComponent;