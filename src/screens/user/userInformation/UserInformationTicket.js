import React, { useContext, useEffect} from 'react'

// Context
import { UserContext } from "../../../components/userContext/userContext.js";

import UserInformationCell from "./UserInformationCell.js";

export default function UserInformationTicket(props) {
    return (
        <div className="user-info-wrapper">
            <CustomAuthInfo />
        </div>
    )
}

function CustomAuthInfo() {

    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        if(user === undefined) {
            fetch("https://4hansson.dk/api/sop/getUser.php")
            .then(data => data.json())
            .then(data => {
                if(data.response === "success") {   
                    setUser(data)
                } else {
                    setUser(undefined);
                }
            });
        }
    }, []);

    return (
        user !== undefined
        ? <UserInformationCell viewModel={{
            type: "Custom",
            name: user?.email ?? "",
            img: "",
            email: user?.email ?? "",
            id: user?.id ?? "",
            regDate: user?.reg_date ?? "",
            phoneNumber: "",
            emailVerified: false,
            alignment: "left",
            isLoggedIn: true
        }} />
        : <UserInformationCell viewModel={{
            type: "Custom",
            name: "",
            img: "",
            email: "",
            id: "",
            regDate: "",
            phoneNumber: "",
            emailVerified: false,
            alignment: "left",
            isLoggedIn: false
        }} />
    );
}