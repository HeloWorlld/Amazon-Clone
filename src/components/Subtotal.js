import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";
import { useStateValue } from "../containers/StateProvider";
import { getBasketTotal } from "../containers/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            {/* Currency Format for  */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):{" "}
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {/* Proceed button */}
            {/* onClick={(e) => history.push("/payment")} */}
            <button onClick={(e) => history.push("/payment")}>
                Proceed to Checkout
            </button>
        </div>
    );
}

export default Subtotal;
