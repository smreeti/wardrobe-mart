import React from "react";

const StoreDetailComponent = () => {
  return (
    <div className="container store-detail mt-3">
        <h3>Find Our Stores</h3>
      <div className="row  justify-content-center mt-4 py-4">
        <div className="col-md-6">
          {/* Image section */}
          <img
            src="../images/store1.jpg"
            alt="Store"
            className="store-img"
          />
        </div>
        <div className="col-md-6">
          <div className="store-details">
            <h2>Kitchener</h2>
            <p>
              Address: 55 Univeristy Av </p>
              <p>City: Kitchner </p>
              <p> Country: Canada </p>
              <p> Zip Code: N2J NSN
            </p>
          </div>
        </div>
      </div>

      <div className="row  justify-content-center mt-4 py-4">
      <div className="col-md-6">
          <div className="store-details">
            <h2>Waterloo</h2>
            <p>
              Address: 456 Albert Street </p>
            <p>  City: Waterloo </p>
            <p> Country: Canada </p>
            <p> Zip Code: N2V 2W2</p>
            
          </div>
        </div>
        <div className="col-md-6">
          {/* Image section */}
          <img
            src="../images/store2.jpg"
            alt="Store"
            className="store-img"
          />
        </div>
      
      </div>
      <div className="row  justify-content-center mt-4 py-4">
        <div className="col-md-6">
          {/* Image section */}
          <img
            src="../images/store3.jpg"
            alt="Store"
            className="store-img"
          />
        </div>
        <div className="col-md-6">
          <div className="store-details">
            <h2>Toronto</h2>
            
            <p> Address: 23 King St East </p>
            <p>  City: Toronto </p>
            <p> Country: Canada  </p>
            <p> Zip Code: TFN 3N3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetailComponent;
