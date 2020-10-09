import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { auth } from "../containers/firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = (event) => {
        // Stops button to refresh the page
        event.preventDefault();

        // If there is any Accounts in database, It will sign in the user
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.replace("/");
            })
            .catch((error) => alert(error.message)); // sends error if there is any
    };

    const register = (event) => {
        // Stops button to refresh the page
        event.preventDefault();

        // Creates a User with the email and password that we pull from input
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // User with Email and Password successfully created
                console.log(auth);
                if (auth) {
                    history.replace("/");
                }
            })
            .catch((error) => alert(error.message)); // sends error if there is any
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Pulls data dynamicly to email variable
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Pulls data dynamicly to password variable
                    />

                    <button
                        className="login__signInButton"
                        type="submit"
                        onClick={signIn}
                    >
                        Sign in
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions
                    of Use & Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
