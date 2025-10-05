export function Plan({ nextPage, plans, prevPage, isYearly, isYearlyOnChange, activePlan, activePlanOnChange }){
    return(
        <div className="container">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div>
                <div className="plan">
                    {
                        plans.map(plan =>
                            <div id={plan.id} key={plan.id} className={activePlan === plan.name ? `${plan.class} selected` : plan.class} onClick={() => activePlanOnChange(plan.id)}>
                                <img src={`icon-${plan.class}.svg`} />
                                <div className="details">
                                    <label>{plan.name}</label>
                                    <span className="price">${plan.price}/{isYearly ? "yr" : "mo"}</span>
                                    <span className="discount">{isYearly ? "2 months free" : ""}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="toggle">
                    <span className="billing" style={{color: !isYearly ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Monthly</span>
                    <div className="switch" style={{justifyContent: isYearly ? "flex-end" : "flex-start"}}>
                        <span className="slider" onClick={isYearlyOnChange}></span>
                    </div>
                    <span className="billing" style={{color: isYearly ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Yearly</span>
                </div>
                <div className="button">
                    <button className="go-back" onClick={prevPage}>Go Back</button>
                    <button className="next" onClick={nextPage}>Next Step</button>
                </div>
            </div>
        </div>
    )
}