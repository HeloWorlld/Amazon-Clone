import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
// import { auth } from "firebase";

import "./Header.css";
import { useStateValue } from "../containers/StateProvider";
import { auth } from "../containers/firebase";

function Header() {
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className="header">
            {/* Logo */}
            <Link to="/">
                <img
                    alt=""
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            {/* Search Box */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* Header Nav */}
            <div className="header__nav">
                {/* Sign in section */}
                <Link to={!user && "/login"}>
                    <div
                        onClick={handleAuthentication}
                        className="header__option"
                    >
                        <span className="header__optionLineOne">
                            Hello {user ? user.email : "Guest"}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                {/* Orders section */}
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                {/* Premium section */}
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                {/* Basket section */}
                <Link to="checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
