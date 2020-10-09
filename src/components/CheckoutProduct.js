import React from "react";
import { useStateValue } from "../containers/StateProvider";

import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className="checkoutProduct">
            {/* Product Image */}
            <img className="checkoutProduct__image" src={image} alt="" />

            {/* Product info section */}
            <div className="checkoutProduct__info">
                {/* Product title */}
                <p className="checkoutProduct__title">{title}</p>

                {/* Product price */}
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                {/* Product rating */}
                <p className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <span>⭐</span>
                        ))}
                </p>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
