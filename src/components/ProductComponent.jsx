//author: Smriti Mool
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductComponent() {

    const products = [
        {
            id: 1, imageSrc: "images/x.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
        {
            id: 2,
            imageSrc: "images/a.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
        {
            id: 3,
            imageSrc: "images/b.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
        {
            id: 4,
            imageSrc: "images/c.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 5,
            imageSrc: "images/d.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 6,
            imageSrc: "images/e.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 7,
            imageSrc: "images/f.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 8,
            imageSrc: "images/g.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 9,
            imageSrc: "images/h.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 10,
            imageSrc: "images/i.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 11,
            imageSrc: "images/j.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 12,
            imageSrc: "images/k.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 13,
            imageSrc: "images/l.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 14,
            imageSrc: "images/m.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 15,
            imageSrc: "images/n.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 16,
            imageSrc: "images/o.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
        {
            id: 17,
            imageSrc: "images/p.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
        {
            id: 18,
            imageSrc: "images/q.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 19,
            imageSrc: "images/r.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 20,
            imageSrc: "images/s.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        }, {
            id: 21,
            imageSrc: "images/t.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
        {
            id: 22,
            imageSrc: "images/u.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
        {
            id: 23,
            imageSrc: "images/v.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
        {
            id: 24,
            imageSrc: "images/w.png",
            title: "Scooby Doo: Where Are You",
            description: "Oversized T-shirts",
            price: "$20.99"
        },
    ];

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section id="hero_banner">
                <div>
                    <div className="slideshowProduct"></div>
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

                        {products.map(product => (
                            <div className="product" key={product.id}>
                                <Link to="/details">
                                    <img className="pro-img zoom-image"
                                        src={product.imageSrc} alt={product.title} />
                                </Link>
                                <p className="product_title">{product.title}</p>
                                <hr />
                                <p className="description">{product.description}</p>
                                <p className="price">{product.price}</p>
                            </div>
                        ))}
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