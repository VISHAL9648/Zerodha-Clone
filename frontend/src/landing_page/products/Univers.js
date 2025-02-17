import React from 'react';

function Univers() {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1>The Zerodha Univers</h1>
                <p className="mb-5">Extend your trading and investment even further with our partner platforms</p>
            </div>

            <div className="row text-center justify-content-center">
                {[
                    { img: "media/smallcaseLogo.png", text: "Thematic investment platform" },
                    { img: "media/sensibullLogo.svg", text: "Options trading" },
                    { img: "media/ZerodhaFundhouse.png", text: "Our asset management venture creating simple and transparent index funds." },
                    { img: "media/streakLogo.png", text: "Thematic investment platform" },
                    { img: "media/dittoLogo.png", text: "Thematic investment platform" },
                    { img: "media/goldenpiLogo.png", text: "Thematic investment platform" },
                ].map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 p-3">
                        <img src={item.img} alt="Platform Logo" className="img-fluid" style={{ height: "50px" }} />
                        <p className="text-small text-muted">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-3">
                <button className="btn btn-primary px-4 py-2">Sign Up Now</button>
            </div>
        </div>
    );
}

export default Univers;
