import React from 'react'

export default function AmountForm() {
    return (
        <div className="amountForm">
            <h3>Enter amount</h3>
            <form>
                <label for="cash" >Cash</label>
                <div className="elements">
                    <span id="euro-icon">&#8364;</span>
                    <input id="cash" type="number" />
                </div>

                <label for="cash" >Credit &times; 1.5  Multiplier</label>
                <div className="elements">
                    <span id="euro-icon">&#8364;</span>
                    <input id="cash" type="number" />
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}
