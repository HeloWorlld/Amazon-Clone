import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import Header from "../components/Header";
import Home from "../components/Home";
import Checkout from "../components/Checkout";
import Login from "../components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "../components/Payment";

const promise = loadStripe(
    "pk_test_51HR3RYCvFrFYQnUgYXcK4J0dz4ggxvsAWMvHn0mw0CMB6pFLhZR9xaJFnkyiS3mN9MruZzG9vnfpz17Vf3HZiH8v00rhNjX0bi"
);

function App() {
    const [{ basket }, dispatch] = useStateValue();

    // will run once when App component loads
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("The user is : ", authUser);

            // The user is loggend in
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            }
            // The user is logged out
            else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <Switch>
                    {/* Payment Page */}
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    {/* Login Page */}
                    <Route path="/login">
                        <Login />
                    </Route>
                    {/* Checkout Page */}
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    {/* Main Route */}
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
