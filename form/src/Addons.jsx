export function Addons({ nextPage, prevPage, addons, isYearly, activeAddOns, activeAddOnOnClick }){
    const checkSelected = (classname) => {
        return activeAddOns.some(activeaddon => activeaddon.class === classname)
            ? "checkbox checked"
            : "checkbox";
    }
    
    return(
        <div className="container">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div>
                <div className="add-ons">
                    {
                        addons.map(addon => 
                            <div key={addon.id} id={addon.id} className={activeAddOns.some(activeaddon => activeaddon.class === addon.class) ? `${addon.class} selected` : addon.class} onClick={() => activeAddOnOnClick(addon.id, addon.class, addon.name, addon.price)}>
                                <div className={checkSelected(addon.class)}>
                                    {activeAddOns.some(activeaddon => activeaddon.class === addon.class) ? <img src="icon-checkmark.svg"/> : ""}
                                </div>
                                <div className="add-on-info">
                                    <div className="details">
                                        <label>{addon.name}</label>
                                        <span className="add-on-detail">{addon.detail}</span>
                                    </div>
                                    <div className="add-on-price">
                                        <span>${addon.price}/{isYearly ? "yr" : "mo"}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="button">
                    <button className="go-back" onClick={prevPage}>Go Back</button>
                    <button className="next" onClick={nextPage}>Next Step</button>
                </div>
            </div>
        </div>
    )
}