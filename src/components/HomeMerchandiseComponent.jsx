import React from "react";

const merchandiseData = [
    { src: "images/spiderman.png", alt: "marvel" },
    { src: "images/Stranger things.png", alt: "friends" },
    { src: "images/how.png", alt: "ST" },
    { src: "images/friends.png", alt: "netflix" },
    { src: "images/flash.png", alt: "harry potter" }
];

export default function HomeMerchandiseComponent() {
    return (
        <section id="official_merchandise_container">
            <h1>OFFICIAL MERCHANDISE</h1>
            <div id="official_merchandise">
                {merchandiseData.map((item, index) => (
                    <img key={index} src={item.src} alt={item.alt} />
                ))}
            </div>
        </section>
    );
}
