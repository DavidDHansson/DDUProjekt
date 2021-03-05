import React from "react";

import smoothscroll from 'smoothscroll-polyfill';
import "./Scroll.css";

export default function Scroll() {
    function toTop() {
        window.__forceSmoothScrollPolyfill__ = true;
        smoothscroll.polyfill();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div onClick={() => toTop()}>
            <i className="scroll-to-top"></i>
        </div>
    );
}