import React from 'react';

export default function Footer() {
    return (
        <footer>
            <section id="footer">
                <div class="need_help">
                    <h1>NEED HELP</h1>
                    <ul>
                        <li><a href="index.html">Contact Us</a></li>
                        <li><a href="users.html">Track Order</a></li>
                        <li><a href="hobby.html">Returns & Refunds</a></li>
                        <li><a href="posts.html">FAQs</a></li>
                        <li><a href="posts.html">My Account</a></li>
                    </ul>
                </div>

                <div class="company">
                    <h1>COMPANY</h1>
                    <ul>
                        <li><a href="index.html">About Us</a></li>
                        <li><a href="users.html">Careers</a></li>
                        <li><a href="hobby.html">Stores Near Me</a></li>
                        <li><a href="posts.html">From the Soul</a></li>
                        <li><a href="posts.html">Souled Army</a></li>
                    </ul>
                </div>

                <div class="more_info">
                    <h1>MORE INFO</h1>
                    <ul>
                        <li><a href="index.html">T&C</a></li>
                        <li><a href="users.html">Privacy Policy</a></li>
                        <li><a href="hobby.html">Sitemap</a></li>
                    </ul>
                </div>

                <div class="miscellaneous">
                    <ul>
                        <li><a class="cod" href="index.html">COD Available</a></li>
                        <li><a href="users.html">30 Days Easy Returns</a></li>
                    </ul>
                </div>
            </section>
            <div class="social_media">
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
            <p>Copyright &copy; 2022 | The Souled Store</p>
        </footer>
    )
}