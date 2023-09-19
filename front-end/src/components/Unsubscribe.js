import React, { useState } from "react";
import './Unsubscribe.css';

function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCancelSubscription = async () => {
    try {
      const response = await fetch("http://localhost:5000/cancel-sub-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setStatusMessage(`Subscription successfully ${data.status}`);
      } else {
        const json = await response.json();
        setStatusMessage(json.error || "An error occurred during cancellation.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("An error occurred while processing the request.");
    }
  };
  const handleEmailClick = () => {
    setStatusMessage("");
  };

  return (
    <>
      <section>
        <div className="pic">
          <div className="major-div">
            <h1 className="unsubscribe-h1">Cancel My Request</h1>
            <div className="container-unsubscribe">
              <p className="unsub-p">
                Your subscription will be canceled immediately following your request. No additional fees will be charged to your card. If the subscription to the service has already been taken for the period to come, you can continue to access the site and its services until the end of the period.
              </p>
              <input
                placeholder="Enter your email"
                className="unsub-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={handleEmailClick}
              />
              <button className="button" onClick={handleCancelSubscription}>
                Click Here To Unsubscribe
              </button>
              {statusMessage && <span className="unsubcribe-p">{statusMessage}</span>}
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
}

export default Unsubscribe;
