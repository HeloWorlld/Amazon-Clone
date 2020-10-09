import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

import "./Payment.css";
import { useStateValue } from "../containers/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "../containers/reducer";
import axios from "../containers/axios";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    // Browser history
    const history = useHistory();

    // Stripe Stuff
    const stripe = useStripe();
    const elements = useElements();

    // React variables
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    // generate the stripe secret that charges the custumer
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe expexts the total in currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    // Listen for changes in the CardElement and Catch errors
    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    //  Handle the "Buy Now" button
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            // Everything is cool and we are sending the confirmation to the server
            .then(({ paymentIntent }) => {
                // db.collection("users")
                //     .doc(user?.uid)
                //     .collection("orders")
                //     .doc(paymentIntent.id)
                //     .set({
                //         basket: basket,
                //         amount: paymentIntent.amount,
                //         created: paymentIntent.created,
                //     });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: "EMPTY_BASKET",
                });

                history.replace("/orders");
            });
    };

    return (
        <div classNam="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket.length} items</Link>)
                </h1>

                {/* Payment section - Delivery address */}
                <div className="payment__section">
                    {/* Left side of section - Title */}
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    {/* Right side of section - details */}
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>456 React Lane</p>
                        <p>Los Angles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className="payment__section">
                    {/* Left side of section - Title */}
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    {/* Right side of section - details */}
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment method */}
                <div className="payment__section">
                    {/* Left side of section - Title */}
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    {/* Right side of section - details */}
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3 className="payment__total">
                                            Order Total: {value}
                                        </h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={
                                        processing || disabled || succeeded
                                    }
                                >
                                    <span>
                                        {processing ? "Processing" : "Buy Now"}
                                    </span>
                                </button>
                            </div>

                            {/* Catching errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
