import React, { useEffect, useContext } from 'react'
import "./User.css";

import { UserContext } from "../../components/userContext/userContext.js";

import * as Reveal from 'react-reveal/Fade';
import { useHistory } from "react-router-dom";

export default function LoginOptionTicket(props) {

    const { viewModel } = props;

    return <CustomAuthTicket viewModel={viewModel} />
}

function CustomAuthTicket(props) {

    const history = useHistory();
    const { viewModel } = props;
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        checkUser();
    }, []);

    function logOut() {
        setUser(undefined);
        fetch("https://4hansson.dk/api/sop/logout.php")
    }

    function checkUser() {
        if (user === undefined) {
            fetch("https://4hansson.dk/api/sop/getUser.php")
                .then(data => data.json())
                .then(data => {
                    if (data.response === "success") {
                        setUser(data)
                        return true;
                    } else {
                        setUser(undefined);
                        return false;
                    }
                });
        }
    }    

    return (
        <Reveal duration={1500}>
            <div className="user-ticket-wrapper">
                <div className="user-ticket-title">
                    {viewModel?.title ?? ""}
                </div>
                <div className="user-ticket-desc">
                    {viewModel?.message ?? ""}
                </div>
                <div style={{ marginTop: "auto" }} className="user-ticket-bottom-wrapper">

                    {user === undefined
                        ? <div className="user-ticket-button user-ticket-button-enabled" onClick={() => !checkUser() && history.push("/customauth")}>
                            {"Start"}
                        </div>
                        : <div className="user-ticket-button user-ticket-button-disabled">
                            {"Start"}
                        </div>}

                    {user !== undefined && (<span className="user-ticket-logout" onClick={() => logOut()}>
                        {"Log ud"}
                    </span>)}

                </div>
            </div>
        </Reveal>
    );
}