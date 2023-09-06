import Footer from "./Elements/Footer";
import Headerpage from "./Elements/Headerpages";


function Contact() {
    return(
    <div>
			<Headerpage />
      <section className="w3l-contacts-8">
    <div className="contacts-9 section-gap py-5">
      <div className="container py-lg-5">
	  <div>
    </div>
        <div className="row top-map">
          <div className="col-lg-6 partners">
            <div className="cont-details">
              <h3 className="hny-title mb-0">Get in <span>touch</span></h3>
              <p className="mb-5">We're ready to lead you into the future with Business Services</p>
              <p className="margin-top"><span className="texthny">Call Us : </span> <a href="tel:+(21) 255 999 8899">+(21)
                  255 999 8899</a></p>
              <p> <span className="texthny">Email : </span> <a href="https://p.w3layouts.com/cdn-cgi/l/email-protection#f69f989099b6938e979b869a93d895999b">
                  <span className="__cf_email__" data-cfemail="88e1e6eee7c8edf0e9e5f8e4eda6ebe7e5">[email&#160;protected]</span></a></p>
              <p className="margin-top"> 433 California St, Suite 300
                San Francisco, CA 94104, USA </p>
            </div>
            <div className="hours">
              <h3 className="hny-title">Working <span>Hours</span></h3>
              <h6>Business Service:</h6>
              <p> Monday to Friday 8.00 am - 6.00 pm</p>
              <p> Saturday and Sunday - Closed</p>
              <h6 className="margin-top">Customer support:</h6>
              <p> Monday to Friday 8.00 am - 6.00 pm</p>
              <p> Saturday 10.00 am - 4.00 pm</p>
              <p> Sunday - Closed</p>
            </div>
          </div>
          <div className="col-lg-6 map">
           
          </div>
        </div>
      </div>
    </div>
	<div>
    </div>
    <div className="map-content-9 form-bg-img">
      <div className="layer section-gap py-5">
        <div className="container py-lg-5">
          <div className="form">
            <h3 className="hny-title two text-center">Fill out the form.</h3>
            <form action="https://sendmail.w3layouts.com/submitForm"className="mt-md-5 mt-4" method="post">
              <div className="input-grids">
                <input type="text" name="w3lName" id="w3lName" placeholder="Name"/>
                <input type="email" name="w3lSender" id="w3lSender" placeholder="Email" required="" />
                <input type="subject" name="w3lSubject" id="w3lSubject" placeholder="Subject" required=""/>
              </div>
              <div className="input-textarea">
                <textarea name="w3lMessage" id="w3lMessage" placeholder="Message" required=""></textarea>
              </div>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
      </section>
      <section className="w3l-footer-22">
      <Footer />
      </section>
      </div>
      ); 
}
export default Contact