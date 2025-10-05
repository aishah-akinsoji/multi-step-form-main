export function Summary({ nextPage, prevPage, moveToPlans, plans, planIndex, isYearly, activeAddOns, activePlan }){
    const totalAddOns = activeAddOns.reduce((total, addon) => total + addon.price, 0);
    const total = plans[planIndex].price + totalAddOns;
    return(
        <div className="container">
            <h1>Finishing Up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="summary">
                <div className="summary-details">
                    <div className="summary-info">
                        <div className="plan-summary">
                            <div className="plan-summary-details">
                                <span className="plan-name">{activePlan}</span>
                                <span onClick={() => moveToPlans(1)} className="change">Change</span>
                            </div>
                            <div className="plan-summary-price">
                                <span>${plans[planIndex].price}/{isYearly ? "yr" : "mo"}</span>
                            </div>
                        </div>
                        <div className="add-on-summary">
                            <div className="addon-summary-details">
                                {
                                    activeAddOns.map(addon => 
                                        <div className="selected-addon">
                                            <span className="addon-name">{addon.name}</span>
                                            <div className="addon-summary-price">
                                                <span>${addon.price}/{isYearly ? "yr" : "mo"}</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <span className="total-text">Total (per {isYearly ? "year" : "month"})</span>
                        <span className="total-price">${total}/{isYearly ? "yr" : "mo"}</span>
                    </div>
                </div>
                <div className="button">
                    <button className="go-back" onClick={prevPage}>Go Back</button>
                    <button className="confirm" onClick={nextPage}>Confirm</button>
                </div>
            </div>
        </div>
    )
}