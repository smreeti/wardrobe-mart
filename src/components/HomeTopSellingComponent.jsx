import React from "react";

const topSellingItems = [
    {
        imageSrc: "images/coat.png",
        alt: "coat",
        title: "Scooby Doo: Where Are You",
        description: "Oversized T-shirts",
        price: "$20.99"
    },
    {
        imageSrc: "images/men_jacket.png",
        alt: "men_jacket",
        title: "Scooby Doo: Where Are You",
        description: "Oversized T-shirts",
        price: "$20.99"
    },
    {
        imageSrc: "images/plazo.webp",
        alt: "plazo",
        title: "Scooby Doo: Where Are You",
        description: "Oversized T-shirts",
        price: "$20.99"
    },
    {
        imageSrc: "images/coat.webp",
        alt: "Girls coat",
        title: "Scooby Doo: Where Are You",
        description: "Oversized T-shirts",
        price: "$20.99"
    }
];

export default function HomeTopSellingComponent() {
    return (
        <section id="top_selling_container">
            <h1>TOP SELLING</h1>
            <div id="top_selling">
                {topSellingItems.map((item, index) => (
                    <div key={index} className="items">
                        <img src={item.imageSrc} alt={item.alt} />
                        <p className="product_title">{item.title}</p>
                        <hr />
                        <p className="description">{item.description}</p>
                        <p className="price">{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
