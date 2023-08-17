import React from "react";
import { Link } from "react-router-dom";

export default function HomeCollectionsContainer() {
    return (
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
    )
}