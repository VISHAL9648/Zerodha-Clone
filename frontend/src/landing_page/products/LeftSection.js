import React from "react";

function LeftSection({
  imageURL,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3">
      <div className="row p-5 align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-3 mt-md-0 mt-4 text-center text-md-start">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>

          {/* Buttons */}
          <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-3">
            <a href={tryDemo} className="btn btn-primary">Try Demo</a>
            <a href={learnMore} className="btn btn-secondary">Learn More</a>
          </div>

          {/* App Download Badges */}
          <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-4">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" alt="Google Play" className="store-badge" />
            </a>
            <a href={appStore}>
              <img src="media/appstoreBadge.svg" alt="App Store" className="store-badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
