import React from "react";

import "./Footer.css";
import Scroll from "../scroll/Scroll.js";

export default function Footer() {

    const d = new Date();

    return (
        <div className="footer-wrapper">
            <div className="footer-scroll">
                <Scroll />
            </div>
            <div>
                <p>Copyright © {d.getFullYear()} 4hansson.dk - All rights reserved</p>
                <p>David Hansson - <a href="mailto:Hansson.d.david@gmail.com" className="footer-link" >Hansson.d.david@gmail.com</a></p>
            </div>
        </div>
    );
}