//author: Smriti Mool
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <section id="footer">
                <div className="need_help">
                    <h1>NEED HELP</h1>
                    <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/">Track Order</Link></li>
                        <li><Link to="/">Returns & Refunds</Link></li>
                        <li><Link to="/">FAQs</Link></li>
                        <li><Link to="/">My Account</Link></li>
                    </ul>
                </div>

                <div className="company">
                    <h1>COMPANY</h1>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Stores Near Me</Link></li>
                        <li><Link to="/">From the Soul</Link></li>
                        <li><Link to="/">Souled Army</Link></li>
                    </ul>
                </div>

                <div className="more_info">
                    <h1>MORE INFO</h1>
                    <ul>
                        <li><Link to="/">T&C</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Sitemap</Link></li>
                    </ul>
                </div>

                <div className="miscellaneous">
                    <ul>
                        <li><Link to="/">COD Available</Link></li>
                        <li><Link to="/">30 Days Easy Returns</Link></li>
                    </ul>
                </div>
            </section>
            <div className="social_media">
                <h1>FIND US ON</h1>
                <div>
                    <a href="https://www.facebook.com/"
                    ><img src="./images/facebook.png" alt="facebook"
                        /></a>
                    <a href="https://www.instagram.com/"
                    ><img src="./images/instagram.png" alt="instagram"
                        /></a>
                    <a href="https://twitter.com/home?lang=en"
                    ><img src="./images/twitter.png" alt="twitter"
                        /></a>
                    <a href="https://www.linkedin.com/in/bhupesh-shrestha-04/"
                    ><img src="./images/linkedin.png" alt="linkedin"
                        /></a>
                </div>
            </div>
            <p>Copyright &copy; 2023 | WardrobeMart</p>
        </footer>
    )
}