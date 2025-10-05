import React, { useState } from "react";
import { Info } from "./Info";
import { Plan } from "./Plan";
import { Addons } from "./Addons";
import { Summary } from "./Summary";
import { Thanks } from "./Thanks";

export default function App() {
  const [isYearly, setIsYearly] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const addons = [
    {
      id: 0,
      name: "Online service",
      class: "service",
      detail: "Access to multiplayer games",
      price: isYearly ? 10 : 1,
    },
    {
      id: 1,
      name: "Larger storage",
      class: "storage",
      detail: "Extra 1TB of cloud save",
      price: isYearly ? 20 : 2,
    },
    {
      id: 2,
      name: "Customizable profile",
      class: "profile",
      detail: "Custom theme on your profile",
      price: isYearly ? 20 : 2,
    }
  ]
  
  const [activeAddOns, setActiveAddOns] = useState([
    {
      id: 0,
      class: "service",
      name: "Online service",
      price: isYearly ? 10 : 1,
    }
  ]);
  const handleSelectedAddOn = (id, classname, name, price) => {
      if (activeAddOns.some(activeaddon => activeaddon.class === classname)){
        const filteredAddOns = activeAddOns.filter(addon => addon.class !== classname);
        setActiveAddOns(filteredAddOns);
      } else{
        const addonObject = {
          id: id,
          class: classname,
          name: name,
          price: price,
        }
        setActiveAddOns(prev => [...prev, addonObject])
      }
  }
  const plans = [
    {
      id: 0,
      name: "Arcade",
      class: "arcade",
      price: isYearly ? 90 : 9,
    },
    {
      id: 1,
      name: "Advanced",
      class: "advanced",
      price: isYearly ? 120 : 12,
    },
    {
      id: 2,
      name: "Pro",
      class: "pro",
      price: isYearly ? 150 : 15,
    }
  ]
  const [planIndex, setPlanIndex] = useState(0);
  const activePlan = plans[planIndex].name;
  
  const pages = [
    {
      id: 1,
      name: "info",
    },
    {
      id: 2,
      name: "plan",
    },
    {
      id: 3,
      name: "add-ons",
    },
    {
      id: 4,
      name: "summary",
    },
    {
      id: 4,
      name: "thank-you",
    }
  ]
  const step = pages[pageIndex].id;
  const page = pages[pageIndex].name;
  const moveToPlans = (index) => {
    setPageIndex(index);
  }
  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  }
  const handlePrevPage = () => {
    setPageIndex(pageIndex - 1);
  }
  const toggleIsYearly = () => {
    setIsYearly(!isYearly);
  }
  const handleActivePlan = (id) => {
    const activePlanId = plans.findIndex(index => index.id === id);
    setPlanIndex(activePlanId);
  }
  const renderPage = () => {
    switch(page){
      case "info":
        return <Info nextPage={handleNextPage}/>;
      case "plan":
        return <Plan nextPage={handleNextPage} plans={plans} activePlan={activePlan} activePlanOnChange={handleActivePlan} isYearly={isYearly} isYearlyOnChange={toggleIsYearly} prevPage={handlePrevPage} planIndex={planIndex}/>;
      case "add-ons":
        return <Addons nextPage={handleNextPage} addons={addons} isYearly={isYearly} prevPage={handlePrevPage} activeAddOns={activeAddOns} activeAddOnOnClick={handleSelectedAddOn}/>;
      case "summary":
        return <Summary nextPage={handleNextPage} prevPage={handlePrevPage} moveToPlans={moveToPlans} plans={plans} planIndex={planIndex} isYearly={isYearly} activeAddOns={activeAddOns} activePlan={activePlan}/>;
      case "thank-you":
        return <Thanks />
    }
  }
  return (
    <div className="app">
      <div className="background">
        <div className="steps">
          <div className="step1">
            <div className={step === 1 ? "active-step" : "step"}>
              1
            </div>
            <div className="step-info">
              <p className="step-detail">STEP 1</p>
              <p className="step-name">YOUR INFO</p>
            </div>
          </div>
          <div className="step2">
            <div className={step === 2 ? "active-step" : "step"}>
              2
            </div>
            <div className="step-info">
              <p className="step-detail">STEP 2</p>
              <p className="step-name">SELECT PLAN</p>
            </div>
          </div>
          <div className="step3">
            <div className={step === 3 ? "active-step" : "step"}>
              3
            </div>
            <div className="step-info">
              <p className="step-detail">STEP 3</p>
              <p className="step-name">ADD-ONS</p>
            </div>
          </div>
          <div className="step4">
            <div className={step === 4 ? "active-step" : "step"}>
              4
            </div>
            <div className="step-info">
              <p className="step-detail">STEP 4</p>
              <p className="step-name">SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        {renderPage()}
      </div>
    </div>
  )
}