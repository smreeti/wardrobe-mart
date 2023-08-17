import React from "react";

export default function ProductDetailComponent() {
    return (
        <div>
            <button id="go_to_top" title="Go to top">^</button>
            <section id="product_details_container">
                <p className="path">"Home/Mens Jacket/Harry Potter/Harry Potter: Slytherin"</p>

                <section id="product_details">
                    <div id="images">
                        <img src="images/girda.png" alt="product detail" />
                        <img src="images/gridb.png" alt="product detail" />
                        <img src="images/gridc.png" alt="product detail" />
                        <img src="images/gridd.png" alt="product detail" />
                    </div>

                    <div id="product_description">
                        <h1 id="product_name">Harry Potter: Slytherin</h1>
                        <h3 id="product_category">Jackets</h3>
                        <hr />
                        <h2>$120.99</h2>
                        <p>Please select a size.</p>
                        <div id="sizes">
                            <p>XS</p>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                            <p>XXL</p>
                        </div>
                        <div id="product_quantity">
                            <p>Quantity</p>
                            <span>-</span><input type="number" /><span>+</span>
                        </div>
                        <div id="actions">
                            <button className="buttonstyle">Add to Cart</button>
                            <button className="buttonstyle" >Add to Wishlist</button>
                        </div>

                        <div id="return_info">
                            <p>
                                This item is eligible for return under our easy 30 day return
                                policy. No questions asked.
                            </p>
                        </div>

                        <div id="long_description">
                            <h1>Product Details</h1>
                            <p className="title">Material & Care:</p>
                            <p>60% Cotton 40% Polyester</p>
                            <p>Dry Clean Only</p>
                            <p className="title">Country of Origin: India (and proud)</p>
                            <p className="title">Manufactured & Sold By:</p>
                            <p>The Souled Store Pvt. Ltd.</p>
                            <p>224, Tantia Jogani Industrial Premises</p>
                            <p>connect@thesouledstore.com</p>
                        </div>
                    </div>
                </section>
            </section>

            <section className="similar_products">
                <h1 className="similar">Similar Products</h1>
                <div id="products_container">
                    <div id="products">
                        <div className="product">
                            <img src="images/optiona.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img src="images/optionb.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img src="images/optionc.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img src="images/optiond.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}