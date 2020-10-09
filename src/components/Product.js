import React from "react";

import "./product.css";
import { useStateValue } from "../containers/StateProvider";

function Product({ id, title, price, rating, image, unavailable }) {
    const [, dispatch] = useStateValue();

    // Sends the specified item into the basket
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                unavailable: unavailable,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    {/* If unavailable prop will pass, "Currently unavailable" will be shown instead of price and rating */}
                    {unavailable ? (
                        <strong>Currently unavailable</strong>
                    ) : (
                        <>
                            <small>$</small>
                            <strong>{price}</strong>
                        </>
                    )}
                </p>
                {/* Rating section */}
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            {/* image */}
            <img src={image} alt="" />

            {/* Add button */}
            <button disabled={unavailable} onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
    );
}

export default Product;
