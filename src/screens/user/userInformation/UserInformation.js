import React from 'react'
import "./UserInformation.css";

import UserInformationTicket from "./UserInformationTicket.js";

export default function UserInformation() {
    return (
        <div className="user-info-main-wrapper">
            <div className="user-info-sub-wrapper">
                <UserInformationTicket/>
            </div>
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