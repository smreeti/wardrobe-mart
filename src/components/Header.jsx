import React from 'react';

export default function Header() {
    return (
        <header>
            <section class="top-nav">
                <div><a class="logonew" href="index.html">
                    <p >WardrobeMart</p></a>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class="menu-button-container" for="menu-toggle">
                    <div class="menu-button"></div>
                </label>
                <ul class="menu">
                    <li><a href="index.html">HOME</a></li>
                    <li>LOGIN</li>
                    <li>CREATE ACCOUNT</li>
                </ul>
            </section>
        </header>
    )
}