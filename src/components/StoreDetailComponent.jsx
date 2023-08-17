import React from "react";

const StoreDetailComponent = () => {
  return (
    <>
      <div className="container store-detail">
        <h3>Find Our Stores</h3>
        <div className="row  justify-content-center mt-4 py-4">
          <div className="col-md-6">
            {/* Image section */}
            <img src="../images/store1.jpg" alt="Store" className="store-img" />
          </div>
          <div className="col-md-6">
            <div className="store-details">
              <h2>Kitchener</h2>
              <p>Address: 55 Univeristy Av </p>
              <p>City: Kitchner </p>
              <p> Country: Canada </p>
              <p> Zip Code: N2J NSN</p>
            </div>
          </div>
        </div>

        <div className="row  justify-content-center mt-4 py-4">
          <div className="col-md-6">
            <div className="store-details">
              <h2>Waterloo</h2>
              <p>Address: 456 Albert Street </p>
              <p> City: Waterloo </p>
              <p> Country: Canada </p>
              <p> Zip Code: N2V 2W2</p>
            </div>
          </div>
          <div className="col-md-6">
            {/* Image section */}
            <img src="../images/store2.jpg" alt="Store" className="store-img" />
          </div>
        </div>
        <div className="row  justify-content-center mt-4 py-4">
          <div className="col-md-6">
            {/* Image section */}
            <img src="../images/store3.jpg" alt="Store" className="store-img" />
          </div>
          <div className="col-md-6">
            <div className="store-details">
              <h2>Toronto</h2>

              <p> Address: 23 King St East </p>
              <p> City: Toronto </p>
              <p> Country: Canada </p>
              <p> Zip Code: TFN 3N3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center rows">
        <div className="col-md-12">
          <div className="newsletter-card">
            <div className="text-center">
              <img src="./images/newsletter.png" width="200" alt="" />
              <span className="d-block mt-3">
                Subscribe to our newsletter in order not to miss new arrivals{" "}
                <br /> promotions and discounts of our store
              </span>

              <div className="row justify-content-center mt-4">
    <div className="col-md-6">
      <div className="text-center flex-column align-items-center">
        <input
          type="text"
          className="form-control form-newsletter form-control-lg"
          placeholder="Enter email"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-success border-rad mt-2" type="button" id="button-addon2">
          Subscribe
        </button>
      </div>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreDetailComponent;
