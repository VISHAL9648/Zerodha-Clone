import React from 'react';

function RightSection({ imageURL, productName, ProductDescription, learnMore }) {
  return (
    <div className="container mt-3">
      <div className="row p-5 align-items-center">
        
        {/* Text Section */}
        <div className="col-12 col-md-6 p-3 text-center text-md-start">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a href={learnMore} className="btn btn-primary">Learn More</a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
