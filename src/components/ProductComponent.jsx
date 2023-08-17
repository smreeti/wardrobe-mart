import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductComponent() {
    return (
        <div>
            <button id="go_to_top" title="Go to top">^</button>

            <section id="hero_banner">
                <div>
                    <div className="slideshowProduct" style={{ animationName: 'slideProduct' }}></div>
                </div>
            </section>

            <section id="selling_container">
                <div></div>
                <div id="selected_filters">
                    <p className="path">Home / Sweatshirts and Sweaters</p>
                    <p className="data">Sweatshirts and Sweaters - 76 items</p>
                </div>

                <div className="filters">
                    <p className="button filter_button">Filters</p>
                    <p className="button filter_button">Apply</p>
                    <p className="button">Gender</p>
                    <p className="button">Themes</p>
                    <p className="button">Sizes</p>
                </div>

                <div className="filters_mobile">
                    <p className="button filters_button">Filters</p>
                    <p className="button filters_button">Apply</p>
                </div>

                <div id="products_container">
                    <div id="products">
                        <div className="product">
                            <Link to="/details">
                                <img className="pro-img shake" src="images/x.png" alt="Scooby Doo"
                                />
                            </Link>
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <Link to="/details">
                                <img className="pro-img shake" src="images/a.png" alt="Scooby Doo"
                                />
                            </Link>
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <Link to="/details">
                                <img className="pro-img shake" src="images/b.png" alt="Scooby Doo"
                                />
                            </Link>
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <Link to="/details">
                                <img className="pro-img shake" src="images/c.png" alt="Scooby Doo"
                                /></Link>
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <Link to="/details">
                                <img className="pro-img shake" src="images/d.png" alt="Scooby Doo"
                                /></Link>
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <Link to="/details">
                                <img className="pro-img shake" src="images/e.png" alt="Scooby Doo"
                                /></Link>
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img className="pro-img shake" src="images/f.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img className="pro-img shake" src="images/g.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img className="pro-img shake" src="images/h.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img className="pro-img shake" src="images/i.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img className="pro-img shake" src="images/j.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img className="pro-img shake" src="images/k.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img className="pro-img shake" src="images/l.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>

                        <div className="product">
                            <img className="pro-img shake" src="images/m.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/n.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/o.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/p.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/q.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/r.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/s.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/t.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/u.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img" src="images/v.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                        <div className="product">
                            <img className="pro-img shake" src="images/w.png" alt="Scooby Doo" />
                            <p className="product_title">Scooby Doo: Where Are You</p>
                            <hr />
                            <p className="description">Oversized T-shirts</p>
                            <p className="price">$20.99</p>
                        </div>
                    </div>
                </div>
            </section >

            <section id="membership">
                <h1>BLACK FRIDAY SALE</h1>
                <picture id="balck_friday_sale">
                    <source
                        className="trans"
                        media="(min-width: 768px)"
                        srcSet="./images/blacksale.png"
                        alt="black firday sale"
                    />

                    <img src="./images/blacksale_mobile.png" alt="black firday sale" />
                </picture>
            </section>
        </div >
    )
}