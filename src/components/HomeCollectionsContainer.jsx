import React from "react";
import { Link } from "react-router-dom";

const collections = [
    {
        imageSrc: "images/magician-4586454_1920.jpg",
        alt: "sweatshirts and sweaters",
        link: "/products"
    },
    {
        imageSrc: "images/people-2593377_1920.jpg",
        alt: "hoodies and jackets",
        link: "/products"
    },
    {
        imageSrc: "images/shoes-1433925_1920.jpg",
        alt: "hardiks collection",
        link: "/products"
    }
];

export default function HomeCollectionsContainer() {
    return (
        <section id="collections_container">
            <h1>COLLECTIONS</h1>

            <div id="collections">
                {collections.map((collection, index) => (
                    <div key={index} className="collection">
                        <Link to={collection.link}>
                            <img className="high" src={collection.imageSrc} alt={collection.alt} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
