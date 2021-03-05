import React from 'react'

import svg1 from "./assets/undraw_security_o890.svg";
import svg2 from "./assets/undraw_authentication_fsn5.svg";
import svg3 from "./assets/undraw_posting_photo_v65l.svg";

import * as Reveal from 'react-reveal/Reveal';

export default function InfoLorumIpsum(props) {

    if (props.index == 0) {
        return (
            <div className="home-info-main-wrapper home-info-color5">
                <Reveal>
                    <div className="home-info-wrapper">
                        <img src={svg1} className="home-info-image" />
                        <div className="home-info-text-wrapper">
                            <p className="home-info-title">Lorem ipsum dolor</p>
                            <p className="home-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisi et augue bibendum lobortis nec et diam. In blandit sagittis turpis, nec molestie lorem auctor eu. Morbi fermentum mi libero, sit amet elementum nisl volutpat at. Donec vehicula enim vitae enim placerat eleifend.</p>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="home-info-wrapper">
                        <div className="home-info-text-wrapper">
                            <p className="home-info-title">Morbi eleifend lacus</p>
                            <p className="home-info-text">Morbi eleifend lacus quis sapien gravida tincidunt vestibulum ut ligula. Vivamus quis ex tellus. Mauris elementum nisi sit amet erat scelerisque, hendrerit ullamcorper odio tempor. Cras a mauris nisl. Ut sagittis aliquet dui sed congue. Nam aliquam eget orci non ornare. Fusce nec turpis elementum, mattis nisi id, porttitor ipsum. Nunc semper sodales mi mollis fringilla. Pellentesque in odio at lorem imperdiet bibendum ac ac nulla.</p>
                        </div>
                        <img src={svg2} className="home-info-image" />
                    </div>
                </Reveal>
                <Divider2 index={props.index} />
            </div>
        )
    } else if (props.index == 1) {
        return (
            <div className="home-info-main-wrapper home-info-color4">
                <Reveal>
                    <div className="home-info-wrapper">
                        <img src={svg3} className="home-info-image" />
                        <div className="home-info-text-wrapper">
                            <p className="home-info-title">Lorem ipsum dolor</p>
                            <p className="home-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisi et augue bibendum lobortis nec et diam. In blandit sagittis turpis, nec molestie lorem auctor eu. Morbi fermentum mi libero, sit amet elementum nisl volutpat at. Donec vehicula enim vitae enim placerat eleifend.</p>
                        </div>
                    </div>
                </Reveal>
                <Divider2 index={props.index} />
            </div>
        );
    } else {
        return <></>
    }
}

function Divider2(props) {
    let colors = ["custom-shape-divider-bottom-color4", "custom-shape-divider-bottom-color5"]
    return (
        <div class={`${colors[props.index]} custom-shape-divider-bottom-1605614923`}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
    );
}