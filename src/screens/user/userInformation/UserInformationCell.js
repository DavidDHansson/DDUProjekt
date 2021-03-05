import React from 'react'

import scrollToTop from '../../../components/scroll/ScrollToTop.js';

export default function UserInformationCell(props) {

    if (props.viewModel.alignment === "left") {
        return (
            <div className="user-info-cell-wrapper">
                <Cell viewModel={props.viewModel} />
                <div className="user-info-cell-prop"></div>
            </div>
        )
    } else if (props.viewModel.alignment === "right") {
        return (
            <div className="user-info-cell-wrapper">
                <div className="user-info-cell-prop"></div>
                <Cell viewModel={props.viewModel}/>
            </div>
        )
    } else {
        return <></>;
    }
}

function Cell(props) {

    const { name, img, email, id, phoneNumber, emailVerified, type, isLoggedIn, regDate } = props.viewModel;

    return (
        isLoggedIn
            ? (<div className="user-info-cell-active">
                <h1>{type}</h1>
                <img src={img} />
                <div><span>Navn: </span><span>{name}</span></div>
                <div><span>Email: </span><span>{email}</span></div>
                <div><span>Id: </span><span>{id}</span></div>
                {phoneNumber && (<div><span>Id: </span><span>{phoneNumber}</span></div>)}
                <div><span>Dato: </span><span>{regDate}</span></div>
                <div><span>Er Email Bekræftet: </span><span>{emailVerified ? "Ja" : "Nej"}</span></div>
            </div>)
            : (<div className="user-info-cell-active">
                <h1>{type}</h1>
                <div><span>{`${type} er ikke konfigureret endnu`}</span></div>
                <div><a onClick={() => scrollToTop()}>Check det ud i toppen!</a></div>
                <div></div>
            </div>)
    );
}