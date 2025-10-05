import { useState } from "react";

export function Info({ nextPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);

  function handleNext() {
    if(!name){
        setIsNameEmpty(true);
    }
    else if(!email){
        setIsEmailEmpty(true)
    }
    else if(!phone){
        setIsPhoneEmpty(true)
    }
    else {
      setIsNameEmpty(false)
      setIsEmailEmpty(false)
      setIsPhoneEmpty(false)
      nextPage();
    }
  }

  return (
    <div className="container">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form">
        <div className="name">
          <div className="label">
            <label htmlFor="name">Name</label>
            {isNameEmpty ? <span className="error">This field is required</span> : ""}
          </div>
          <input
            type="text"
            id="name"
            value={name}
            style={{border: isNameEmpty ? "2px solid hsl(354, 84%, 57%)" : "1px solid hsl(229, 24%, 87%)"}}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stephen King"
            required
          />
        </div>
        <div className="email">
          <div className="label">
            <label htmlFor="email">Email Address</label>
            {isEmailEmpty ? <span className="error">This field is required</span> : ""}
          </div>
          <input
            type="email"
            id="email"
            value={email}
            style={{border: isEmailEmpty ? "2px solid hsl(354, 84%, 57%)" : "1px solid hsl(229, 24%, 87%)"}}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>
        <div className="phone">
          <div className="label">
            <label htmlFor="tel">Phone Number</label>
            {isPhoneEmpty ? <span className="error">This field is required</span> : ""}
          </div>
          <input
            type="tel"
            id="tel"
            value={phone}
            style={{border: isPhoneEmpty ? "2px solid hsl(354, 84%, 57%)" : "1px solid hsl(229, 24%, 87%)"}}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +1 234 567 890"
            required
          />
        </div>
        <div className="button">
          <button onClick={handleNext} className="next">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
