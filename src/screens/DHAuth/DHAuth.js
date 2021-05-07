import React, { useState, useContext, useEffect } from 'react'
import "./DHAuth.css";

import { UserContext } from "../../components/userContext/userContext.js";
import { useHistory } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/firestore";
firebase.initializeApp({
    apiKey: "AIzaSyB6DV5ghc7cdz43o-u7-RVbs1vqJIfqPSY",
    authDomain: "ddu-eksamensprojekt.firebaseapp.com",
    projectId: "ddu-eksamensprojekt",
    storageBucket: "ddu-eksamensprojekt.appspot.com",
    messagingSenderId: "445125868185",
    appId: "1:445125868185:web:a921e47c92decbe437d608"
});
const db = firebase.firestore();

export default function DHAuth() {

    const [type, setType] = useState(); // Determine if it's login or signup

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
                if(data === "success") {
                    addUserToFirebase();
                    history.push("/user"); 
                } else {
                    setErrorMsg(data ?? "An error has occurred");
                }
            })
            .catch(err => console.log(err));
    }

    async function addUserToFirebase() {
        const data = {
            email: email,
            code: null
        };

        await db.collection("users").add(data);
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
    const [code, setCode] = useState();
    const setUser = useContext(UserContext)[1];
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("");

    async function login(e) {
        e.preventDefault();

        let firebaseCode = undefined;
        const snapshot = await db.collection("users").where("email", "==", email).limit(1).get();
        snapshot.forEach((doc) => firebaseCode = doc.data().code);

        if(firebaseCode != null && code.length === 0) {
            setErrorMsg("This user requires a 2FA code");
            return 
        }
        if(firebaseCode !== code && firebaseCode != null) {
            setErrorMsg("This 2FA code is wrong");
            return;
        }

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
                if(data.response === "success") {
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
                    <input type="input" placeholder="2FA Kode (valgfri)" onInput={e => setCode(e.target.value)} />
                    <input type="submit" className="dhauth-submit" value="Log ind!" />
                    <span onClick={() => { history.push("?signup"); window.location.reload();}}>Tilmeld dig</span>
                    <span style={{textDecoration: "none", color: "rgb(240,50,50)", transform: "translateY(5px)", fontSize: "12px"}}>{errorMsg}</span>
                </form>
            </div>
        </div>
    )
}
