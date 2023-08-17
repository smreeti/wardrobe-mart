import React from "react";

export default function HomeTopSellingComponent() {
    return (
        <section id="top_selling_container">
            <h1>TOP SELLING</h1>
            <div id="top_selling">
                <div className="items">
                    <img src="images/coat.png" alt="Scooby Doo" />
                    <p className="product_title">Scooby Doo: Where Are You</p>
                    <hr />
                    <p className="description">Oversized T-shirts</p>
                    <p className="price">$20.99</p>
                </div>

                <div className="items">
                    <img src="images/men_jacket.png" alt="Scooby Doo" />
                    <p className="product_title">Scooby Doo: Where Are You</p>
                    <hr />
                    <p className="description">Oversized T-shirts</p>
                    <p className="price">$20.99</p>
                </div>

                <div className="items">
                    <img src="images/plazo.webp" alt="Scooby Doo" />
                    <p className="product_title">Scooby Doo: Where Are You</p>
                    <hr />
                    <p className="description">Oversized T-shirts</p>
                    <p className="price">$20.99</p>
                </div>

                <div className="items">
                    <img src="images/coat.webp" alt="Scooby Doo" />
                    <p className="product_title">Scooby Doo: Where Are You</p>
                    <hr />
                    <p className="description">Oversized T-shirts</p>
                    <p className="price">$20.99</p>
                </div>
            </div>
        </section>
    )
}