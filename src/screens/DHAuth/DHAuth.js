import React, { useState, useContext, useEffect } from 'react'
import "./DHAuth.css";

import { UserContext } from "../../components/userContext/userContext.js";
import { useHistory } from "react-router-dom";

export default function DHAuth() {

    const history = useHistory();
    const [type, setType] = useState();

    useEffect(() => {
        setType(window.location.href.split("?")[1]);
    }, []);

    switch(type) {
        case "login":
            return <LogIn />
        case "signup":
            return <SignUp />
        default:
            return <LogIn />
    }
}

function SignUp() {

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("");

    function signup(e) {
        e.preventDefault();

        if(email.length === 0 || password.length === 0) { return; }

        fetch("https://4hansson.dk/api/sop/signup.php", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data == "success") {
                    history.push("/user"); 
                } else {
                    setErrorMsg(data ?? "An error has occurred");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="dhauth-main-wrapper">
            <div className="dhauth-ticket-wrapper">
                <div className="dhauth-title">Custom Auth</div>
                <form onSubmit={signup} className="dhauth-form-wrapper">
                    <input type="email" placeholder="Email" onInput={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Kode" onInput={e => setPassword(e.target.value)} />
                    <input type="submit" className="dhauth-submit" value="Tilmeld dig!" />
                    <span onClick={() => { history.push("?login"); window.location.reload();}}>Log ind</span>
                    <span style={{textDecoration: "none", color: "rgb(240,50,50)", transform: "translateY(5px)", fontSize: "12px"}}>{errorMsg}</span>
                </form>
            </div>
        </div>
    );
}

function LogIn() {

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const setUser = useContext(UserContext)[1];
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("");

    function login(e) {
        e.preventDefault();

        fetch("https://4hansson.dk/api/sop/login.php", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                console.log(data);
                if(data.response == "success") {
                    history.push("/user"); 
                } else {
                    setErrorMsg(data.response ?? "An error has occurred");
                }
            })
            .catch(err => {
                console.log(err)
                setErrorMsg("An error has occurred");
            });
    }

    return (
        <div className="dhauth-main-wrapper">
            <div className="dhauth-ticket-wrapper">
                <div className="dhauth-title">Custom Auth</div>
                <form onSubmit={login} className="dhauth-form-wrapper">
                    <input type="email" placeholder="Email" onInput={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Kode" onInput={e => setPassword(e.target.value)} />
                    <input type="submit" className="dhauth-submit" value="Log ind!" />
                    <span onClick={() => { history.push("?signup"); window.location.reload();}}>Tilmeld dig</span>
                    <span style={{textDecoration: "none", color: "rgb(240,50,50)", transform: "translateY(5px)", fontSize: "12px"}}>{errorMsg}</span>
                </form>
            </div>
        </div>
    )
}
