import React from "react";
import { Link } from "react-router-dom";

const merchandiseData = [
    {
        src: "images/spiderman.png", alt: "marvel",
        link: '/products'
    },
    {
        src: "images/Stranger things.png",
        alt: "friends",
        link: '/products'
    },
    {
        src: "images/how.png",
        alt: "ST",
        link: '/products'
    },
    {
        src: "images/friends.png",
        alt: "netflix",
        link: '/products'
    },
    {
        src: "images/flash.png",
        alt: "harry potter",
        link: '/products'
    }
];

export default function HomeMerchandiseComponent() {
    return (
        <section id="official_merchandise_container">
            <h1>OFFICIAL MERCHANDISE</h1>
            <div id="official_merchandise">
                {merchandiseData.map((item, index) => (
                    <Link to={item.link}>
                        <img key={index} src={item.src} alt={item.alt} />
                    </Link>
                ))}
            </div>
        </section>
    );
}
