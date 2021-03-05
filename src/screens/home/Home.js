import React from 'react'
import "./Home.css";

import backgroundImage from "./assets/back.jpg";
import InfoLorumIpsum from "./InfoLorumIpsum.js";
import Quotes from "./Quotes.js";
import Footer from "../../components/footer/Footer.js";

export default function Home() {
    return (
        <div className="home-flex-wrapper">
            <img src={backgroundImage} className="home-background-image" alt="Security background" />
            <Divider1 />
            <InfoLorumIpsum index={0} />
            <Quotes />
            <InfoLorumIpsum index={1} />
            <Footer />
        </div>
    )
}

function Divider1() {
    return (
        <div class="custom-shape-divider-bottom-1605684340">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
            </svg>
        </div>
    );
}