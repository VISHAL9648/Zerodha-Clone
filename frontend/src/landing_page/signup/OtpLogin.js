import React, { useState } from "react";


function OtpLogin() {
  const [mobile, setMobile] = useState("");

  const handleGetOtp = () => {
    if (mobile.length === 10) {
      alert("OTP Sent to " + mobile);
    } else {
      alert("Enter a valid 10-digit mobile number");
    }
  };

  return (
    <div className="container-fluid">
      {/* Heading */}
      <div className="row text-center mt-5 mb-5">
        <h1>Open a free demat & trading account online</h1>
        <p className="text-muted">
          Start investing brokerage-free and join a community of 1.5+ crore investors and traders
        </p>
      </div>

      <div className="row justify-content-center align-items-center">
        
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img src="media/signup.png" alt="Signup" className="img-fluid w-75" />
        </div>

        <div className="col-lg-6 col-md-12 p-4 text-center">
          <h1 className="mb-2">Signup now</h1>
          <h4 className="text-muted">Or track your existing application</h4>

          <div className="input-group mb-3 mx-auto" style={{ maxWidth: "450px" }}>
            <span className="input-group-text py-3 px-4 fs-5 fw-bold">🇮🇳 +91</span>
            <input
              type="tel"
              className="form-control py-3 fs-5"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength="10"
            />
          </div>

          {/* Get OTP Button */}
          <button className="btn btn-primary py-3 px-4 fs-5 fw-bold w-100" style={{ maxWidth: "450px" }} onClick={handleGetOtp}>
            Get OTP
          </button>

          <p className="text-muted mt-3">
            By proceeding, you agree to the Zerodha <a href="/about">terms</a> & <a href="/about">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OtpLogin;
