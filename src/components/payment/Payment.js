import React from 'react'
import paypal from "./paypal.svg";
import charity from "./give-love.svg";
import card from "./credit-card.svg"

export default function Payment() {
    return (

        <div className="payment-div">
            <div className="list-payment">
                <div className="payment">
                    <input id="check" type="checkbox"></input>
                    <img src={card} alt="paypal"></img>
                    <span>Convert to credit</span>
                </div>

                <div className="payment">
                    <input id="check" type="checkbox" ></input>
                    <img src={charity} alt="charity"></img>
                    <span>Donate to charity</span>
                </div>

                <div className="payment">
                    <input id="check" type="checkbox"></input>
                    <img src={paypal} alt="paypal"></img>
                    <span>Paypal checkout</span>
                </div>
            </div>
            <p className="payments-footer">Convert your cash to Credit to get even more lottery lines</p>
        </div>
    )
}
