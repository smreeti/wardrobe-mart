import React from 'react';
import { Link } from "react-router-dom";

export default function HomeComponent() {
    return (
        <div>
            <div className="dashboard_slider">
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet="../../images/christmas-2971961_1920.jpg"
                        alt="christmas"
                    />
                    <img
                        src="./images/christmas-mobile.jpg"
                        alt="christmas"
                    />
                </picture>
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet="./images/baby-3036925_1920.jpg"
                        alt="baby"
                    />
                    <img
                        src="./images/baby_mobile.jpg"
                        alt="baby"
                    />
                </picture>
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet="./images/girl-2122909_1920.jpg"
                        alt="baby"
                    />
                    <img
                        src="./images/girl_mobile.jpg"
                        alt="baby"
                    />
                </picture>
            </div>

            <div>
                <button id="go_to_top" title="Go to top">^</button>
                <section id="hero_text_container"></section>

                <section id="collections_container">
                    <h1>COLLECTIONS</h1>

                    <div id="collections">
                        <div className="collection">
                            <Link to="/products">
                                <img className="high"
                                    src="images/magician-4586454_1920.jpg"
                                    alt="sweatshirts and sweaters"
                                />
                            </Link>
                        </div>

                        <div className="collection">
                            <Link to="/products">
                                <img className="high"
                                    src="images/people-2593377_1920.jpg"
                                    alt="hoodies and jackets"
                                />
                            </Link>
                        </div>
                        <div className="collection ">
                            <Link to="/products">
                                <img className="high"
                                    src="images/shoes-1433925_1920.jpg"
                                    alt="hardiks collection"
                                /> </Link>
                        </div>
                    </div>
                </section>

                <section id="official_merchandise_container">
                    <h1>OFFICIAL MERCHANDISE</h1>
                    <div id="official_merchandise">
                        <img src="images/spiderman.png" alt="marvel" />
                        <img src="images/Stranger things.png" alt="friends" />
                        <img src="images/how.png" alt="ST" />
                        <img src="images/friends.png" alt="netflix" />
                        <img src="images/flash.png" alt="harry potter" />
                    </div>
                </section>

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

                <section id="membership">
                    <h1 id="saleimg">SALE</h1>
                    <picture >
                        <source
                            media="(min-width: 768px)"
                            srcSet="./images/sale.jpg"
                            alt="flash sale"
                        />
                        <img src="./images/sale_mobile.jpg" alt="flash sale" />
                    </picture>
                </section>
            </div >

        </div>
    )
}