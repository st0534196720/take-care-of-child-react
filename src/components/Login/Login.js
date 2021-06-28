import React, { useState } from "react";



function Login() {

    const [kindergarten, setKindergarten] = useState({ id: "", name: "" });
    const [message, setMessage] = useState("");

    const loginHandler = () => {
        fetch('http://localhost:54147/api/kindergarten/GetKindergartenById/100', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET"
        }).then(
            response => response.json()
        ).then((kin) => {
            if (kin && kin.KinderGartenId)
                setMessage(kin.KinderGartenId)
        }
        )
    }

    return (
        <div>
            <button onClick={loginHandler}>aaa</button>
            {message}
        </div>
    )
}

export default Login;
