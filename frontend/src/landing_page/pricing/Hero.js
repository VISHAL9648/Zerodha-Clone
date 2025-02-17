import React from "react";

function Hero() {
    return (
        <div className="container ">
          
            <div className="row p-5 mt-5 border-bottom text-center">
               <h1>Pricing</h1>
               <h3 className="text-muted mt-3 fs-5">Free equity invesment and flat rupyes 20 traders</h3>
            </div>
               

            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-4">
                    <img src="media/pricingEquity.svg"/>
                    <h1 className="fs-4">Free equity delivery</h1>
                    <p className="text-muted">All quity delivery invesment (NSE, BSE), are absolutely free - $0 brokerage.</p>
                </div>
                <div className="col-4 p-4">
                <img src="media\intradayTrades.svg"/>
                    <h1 className="fs-4">Free equity delivery</h1>
                    <p className="text-muted">All quity delivery invesment (NSE, BSE), are absolutely free - $0 brokerage.</p>
                </div>
                <div className="col-4 p-4">
                <img src="media/pricingEquity.svg"/>
                    <h1 className="fs-4">Free equity delivery</h1>
                    <p className="text-muted">All quity delivery invesment (NSE, BSE), are absolutely free - $0 brokerage.</p>
                </div>


            </div>


        </div>

    );
}

export default Hero;