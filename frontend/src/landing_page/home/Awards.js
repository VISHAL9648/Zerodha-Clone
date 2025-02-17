import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center p-4">
          <img src="media/largestBroker.svg" alt="Largest Broker" className="img-fluid" />
        </div>

        {/* Text Content Section */}
        <div className="col-lg-6 col-md-12 p-4">
          <h1>Largest stock broker in India</h1>
          <p className="mb-4">
            +2 million Zerodha clients contribute to over 15% of all retail order volumes in India daily,
            trading and investing in:
          </p>

          {/* Investment Options - Two Columns on Desktop, One Column on Mobile */}
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>📈 Futures and Options</li>
                <li>💰 Commodity Derivatives</li>
                <li>🌍 Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>📊 Stocks & IPOs</li>
                <li>📌 Direct Mutual Funds</li>
                <li>🏛 Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="mt-4 text-center text-md-start">
            <img src="media/pressLogos.png" alt="Press Logos" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
