import React from 'react'
import "./User.css";

import LoginOptionTicket from "./LoginOptionTicket.js";

import UserInformation from "./userInformation/UserInformation.js";
import Footer from "../../components/footer/Footer.js";

export default function User() {

    const tickets = [
        { type: "custom", title: "Custom", message: "Skræddersyet API'er og database til administration af brugere. Der er fokus på sikkerhed, kryptering, brugervenlighed og hastighed" }
    ]

    return (
        <div className="user-wrapper">
            <div className="user-options-wrapper">
                <div className="user-options-ticket-wrapper">
                    {tickets.map(ticket => <LoginOptionTicket viewModel={ticket} />)}
                </div>
            </div>
            <Divider />
            <UserInformation />
            <Divider2 />
            <Footer />
        </div>
    )
}

function Divider() {
    return (
        <div class="custom-shape-divider-bottom-1605630478">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
            </svg>
        </div>
    );
}

function Divider2() {
    return (
        <div class="custom-shape-divider-bottom-1605690683">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    );
}