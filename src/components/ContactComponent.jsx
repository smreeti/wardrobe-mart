import React from "react";
import ContactUsFormComponent from "./ContactUsFormComponent";
import StoreDetailComponent from "./StoreDetailComponent";

const ContactComponent = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 text-white aside px-4 py-5 contact-detail">
          <div className="overlay"></div>
          <div className="overlay-text">
            <div className="mb-5 ">
              <h1 className="h3">Contact Information</h1>
              <p className="opacity-80">
                <small>
                  Fill out the from and we will get back to you whitin 24 hours
                </small>
              </p>
            </div>
            <div className="d-flex flex-column px-0">
              <ul className="m-0 p-0">
                <li className="d-flex justify-content-start align-items-center mb-4">
                  <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <span>+134 1234 1234</span>
                </li>
                <li className="d-flex align-items-center r mb-4">
                  <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                    <i className="bi bi-envelope-at-fill"></i>
                  </span>
                  <span>Help@contact.com</span>
                </li>
                <li className="d-flex justify-content-start align-items-center mb-4">
                  <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <span>123 Main Street (HQ), <br />
                    Ontario(ON), N2J TX2
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-muted text-center">

            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <ContactUsFormComponent />
        </div>
      </div>
      <StoreDetailComponent />

    </div>
  );
};
export default ContactComponent;
