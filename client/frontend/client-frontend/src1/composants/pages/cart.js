import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Cart({ onSubmit }) {
  const [ville, setVille] = useState("");
  const [quartier, setQuartier] = useState("");
  const [telephone, setTelephone] = useState("");
  const [status, setStatus] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const updateCartItemQuantity = async (productId, quantite) => {
    const response = await axios.patch(
      `http://localhost:8800/cart/${productId}`,
      {
        productId: productId,
        quantity: quantite,
      }
    );

    window.location.reload();
  };
  const handleUpdateQuantity = (cartItemId, quantity) => {
    updateCartItemQuantity(cartItemId, quantity);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/commande", {
        ville: ville,
        quartier: quartier,
        telephone: telephone,
        status: status,
      });
      if (response.ok) {
        setSuccess(true);
      }
      navigate("/commandes");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    const response = await axios.get("http://localhost:8000/cart");
    const cartData = response.data;
    setCart(cartData.items);
    setTotalQuantity(cartData.totalQuantity);
    setTotalPrice(cartData.totalPrice);
  };

  const deleteItemInCart = async (productId) => {
    await axios.delete(`http://localhost:8000/cart/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      data: { productId },
    });
    getCart();
  };

  return (
    <Fragment>
      <div>
        {/* <!-- loader end -->



    <!-- header start --> */}
        <header>
          <div className="back-links">
            <Link to="/shop">
              <i className="iconly-Arrow-Left icli"></i>
              <div className="content">
                <h2>Shopping Cart</h2>
                <h6>Step 1 of 3</h6>
              </div>
            </Link>
          </div>
          <div className="header-option">
            <ul>
              <li>
                <a href="wishlist.html">
                  <i className="iconly-Heart icli"></i>
                </a>
              </li>
            </ul>
          </div>
        </header>
        {/* <!-- header end -->


    <!-- cart items start --> */}
        {cart.length > 0 ? (
          <section className="cart-section pt-0 top-space xl-space">
            {cart.map((cartItem) => (
              <div>
                <div className="cart-box px-15" key={cartItem.id_prod}>
                  <a href="product.html" className="cart-img">
                    <img
                      src={cartItem.url}
                      className="img-fluid"
                      alt={cartItem.nom}
                    />
                  </a>
                  <div className="cart-content">
                    <a href="product.html">
                      <h4>{cartItem.nom}</h4>
                    </a>
                    <h5 className="content-color">by Mango</h5>
                    <div className="price">
                      <h4>
                        {cartItem.prix} XAF
                        <h4>
                          Prix total :{" "}
                          {cartItem.CartItem.quantite * cartItem.prix} XAF
                        </h4>
                      </h4>
                    </div>
                    <div className="select-size-sec">
                      <Link
                        onClick={() => "javascript:void(0)"}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#selectQty"
                        className="opion"
                      >
                        <button
                          onClick={() =>
                            handleUpdateQuantity(
                              cartItem.id,
                              cartItem.CartItem.quantite + 1
                            )
                          }
                        >
                          <h4>+</h4>
                        </button>
                        <h6>
                          Qty: {cartItem.CartItem.quantite} <br />
                        </h6>
                        <button
                          onClick={() =>
                            handleUpdateQuantity(
                              cartItem.id,
                              cartItem.CartItem.quantite - 1
                            )
                          }
                        >
                          <h4>-</h4>
                        </button>

                        {/* <i className="iconly-Arrow-Down-2 icli"></i> */}
                      </Link>
                      <a
                        href="javascript:void(0)"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#selectSize"
                        className="opion"
                      >
                        <h6>Size: S</h6>
                        <i className="iconly-Arrow-Down-2 icli"></i>
                      </a>
                    </div>
                    <div className="cart-option">
                      <h5
                        data-bs-toggle="offcanvas"
                        data-bs-target="#removecart"
                      >
                        <i className="iconly-Heart icli"></i> Move to wishlist
                      </h5>
                      <span className="divider-cls">|</span>
                      <h5>
                        <button onClick={() => deleteItemInCart(cartItem.id)}>
                          <i className="iconly-Delete icli"></i>
                          Remove
                        </button>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="divider"></div>
              </div>
            ))}
          </section>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Votre panier est vide.</h1>
          </div>
        )}

        <section className="px-15 pt-0">
          <h2 className="title text-capitalize w-100 mt-3">
            Entrez vos coordonnées:
          </h2>

          <div>
            {success ? (
              <p>Votre commande a été passée avec succès !</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    Ville :
                    <input
                      className="title btn btn-outline text-capitalize w-100 mt-3"
                      type="text"
                      value={ville}
                      required
                      onChange={(event) => setVille(event.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    quartier :
                    <input
                      className="title btn btn-outline text-capitalize w-100 mt-3"
                      type="text"
                      value={quartier}
                      required
                      onChange={(event) => setQuartier(event.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Téléphone :
                    <input
                      className="title btn btn-outline text-capitalize w-100 mt-3"
                      type="text"
                      value={telephone}
                      required
                      onChange={(event) => setTelephone(event.target.value)}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="title btn btn-outline text-capitalize"
                >
                  Passer la commande
                </button>
              </form>
            )}
          </div>
        </section>
        <div className="divider"></div>
        <section className="px-15 pt-0">
          <br />

          <h2 className="title">Coupons:</h2>
          <div className="coupon-section">
            <i className="iconly-Discount icli icon-discount"></i>
            <input
              className="form-control form-theme"
              placeholder="Apply Coupons"
            />
            <i className="iconly-Arrow-Right-2 icli icon-right"></i>
          </div>
        </section>
        <div className="divider"></div>
        {/* <!-- coupon end -->


    <!-- order details start --> */}
        <section id="order-details" className="px-15 pt-0">
          <h2 className="title">Détails du paniers:</h2>
          <div className="order-details">
            <ul>
              <li>
                <h4>
                  Nombre total <span>{totalQuantity} </span>
                </h4>
              </li>
              <li>
                <h4>
                  Economies sur les sacs{" "}
                  <span className="text-green">0XAF</span>
                </h4>
              </li>
              <li>
                <h4>
                  Coupon de réduction{" "}
                  <a href="coupons.html" className="theme-color">
                    Appliquer le coupon
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  Livraison <span>0XAF</span>
                </h4>
              </li>
            </ul>
            <div className="total-amount">
              <h4>
                Montant total <span>{totalPrice} XAF</span>
              </h4>
            </div>
            <div className="delivery-info">
              <img src="assets/images/truck.gif" className="img-fluid" alt="" />
              <h4>No Delivery Charges applied on this order </h4>
            </div>
          </div>
        </section>
        <div className="divider"></div>
        {/* <!-- order details end -->


    <!-- service section start --> */}
        <section className="service-wrapper px-15 pt-0">
          <div className="row">
            <div className="col-4">
              <div className="service-wrap">
                <div className="icon-box">
                  <img
                    src="assets/svg/returning.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span>7 Day Return</span>
              </div>
            </div>
            <div className="col-4">
              <div className="service-wrap">
                <div className="icon-box">
                  <img
                    src="assets/svg/24-hours.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span>24/7 Support</span>
              </div>
            </div>
            <div className="col-4">
              <div className="service-wrap">
                <div className="icon-box">
                  <img
                    src="assets/svg/wallet.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- service section end -->


    <!-- panel space start --> */}
        <section className="panel-space"></section>
        {/* <!-- panel space end -->


    <!-- bottom panel start --> */}
        <div className="cart-bottom">
          <div>
            <div className="left-content">
              <h4>$270.00</h4>
              <a href="#order-details" className="theme-color">
                View details
              </a>
            </div>
            <Link to="/commandes" className="btn btn-solid">
              Mes commandes
            </Link>
          </div>
        </div>
        {/* <!-- bottom panel end -->


    <!-- select qty offcanvas start --> */}
        <div
          className="offcanvas offcanvas-bottom h-auto qty-canvas"
          id="selectQty"
        >
          <div className="offcanvas-body small">
            <h4>Select Quanity:</h4>
            <div className="qty-counter">
              <div className="input-group">
                <button
                  type="button"
                  className="btn quantity-left-minus"
                  data-type="minus"
                  data-field=""
                >
                  <img
                    src="assets/svg/minus-square.svg"
                    className="img-fluid"
                    alt=""
                  />
                </button>
                <input
                  type="text"
                  name="quantity"
                  className="form-control form-theme qty-input input-number"
                  value="1"
                />
                <button
                  type="button"
                  className="btn quantity-right-plus"
                  data-type="plus"
                  data-field=""
                >
                  <img
                    src="assets/svg/plus-square.svg"
                    className="img-fluid"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <a
              href="delivery.html"
              className="btn btn-solid w-100"
              data-bs-dismiss="offcanvas"
            >
              Add to Bag
            </a>
          </div>
        </div>
        {/* <!-- select qty offcanvas end -->


    <!-- select size offcanvas start --> */}
        <div
          className="offcanvas offcanvas-bottom h-auto qty-canvas"
          id="selectSize"
        >
          <div className="offcanvas-body small">
            <h4>Select Size:</h4>
            <div className="size-detail mb-2 mt-2">
              <ul className="size-select">
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li className="disable">XL</li>
              </ul>
            </div>
            <div className="price mb-3">
              <h4>
                $32.00 <del>$35.00</del>
                <span>20%</span>
              </h4>
            </div>
            <a
              href="javascript:void(0)"
              className="btn btn-solid w-100"
              data-bs-dismiss="offcanvas"
            >
              DONE
            </a>
          </div>
        </div>
        {/* <!-- select size offcanvas end -->


    <!-- remove item canvas start --> */}
        <div
          className="offcanvas offcanvas-bottom h-auto removecart-canvas"
          id="removecart"
        >
          <div className="offcanvas-body small">
            <div className="content">
              <h4>Remove Item:</h4>
              <p>
                Are you sure you want to remove or move this item from the cart?
              </p>
            </div>
            <div className="bottom-cart-panel">
              <div className="row">
                <div className="col-7">
                  <a href="wishlist.html" className="title-color">
                    MOVE TO WISHLIST
                  </a>
                </div>
                <div className="col-5">
                  <a href="#" className="theme-color">
                    REMOVE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;