import React  from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Univers";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
    return(
        <>
        <Hero/>
        <LeftSection  
        imageURL="media/kite.png"
     productName="Kite"
    ProductDescription="Our ultra-fast flagship platform  with stearming market data, advanced chart, an elegant UI , and more . Enjoy the kite experince seamlessly on your Androd and ios devices "
    tryDemo=""
    learnMore=""
    googlePlay=""

    appStore="" />
        <RightSection
          imageURL="media/console.png"
          productName="Console"
         ProductDescription="Buy direct mutual funds online , commission-free, delivered directly to your  Demat account . Enjoy the invesment exprience on your Android ans iOS devices."
         learnMore=""/>

      <LeftSection 
       imageURL="media/coin.png"
     productName="Coin"
    ProductDescription="Buy direct mutual funds online , commission-free, delivered directly to your  Demat account . Enjoy the invesment exprience on your Android ans iOS devices."
    tryDemo=""
    learnMore=""
    googlePlay=""
    appStore="" />
        <RightSection
         imageURL="media/Kiteconnect.png"
          productName="Kite Connect API"
         ProductDescription="Buy direct mutual funds online , commission-free, delivered directly to your  Demat account . Enjoy the invesment exprience on your Android ans iOS devices."
         learnMore=""/>

      <LeftSection  imageURL="media/varsity.png"
     productName="Varsity Mobile"
    ProductDescription="An easy to grap collection of stock market lesson with in-depth covrage and illustration . content is broken down into bite-size cards to help you learn on the go"
    tryDemo=""
    learnMore=""
    googlePlay=""
    appStore="" />
    <p className="text-center mt-3 mb-3">Want to know more about our techonlogy stack ? Check out the Zerodha.tech blog.

    </p>
        <Universe/>
        </>

    );
}

export default PricingPage;