import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "firebase";

import "./App.css";
import Header from "../components/Header";
import Home from "../components/Home";
import Checkout from "../components/Checkout";

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    {/* Checkout Page */}
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    {/* Main Rout */}
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
