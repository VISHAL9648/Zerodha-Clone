import React from 'react';

function Footer() {
    return ( 
         <footer style={{backgroundColor:"rgb(240, 240, 240)"}}>

        <div className="container border-top mt-5" >
            <div className="row mt-5">
                <div className='col'>
                    <img src='media/logo.svg' alt='logo' style={{width:"50%"}}/>
                    <p> &copy; 2018 - 2024, Zerodha Broking Ltd.
                      All rights reserved.</p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href='#'>About</a>
                    <br/>
                    <a href='#'>Products</a>
                    <br/>
                    <a href='#'>Pricing</a>
                    <br/>
                    <a href=''>Referral programme</a>
                    <br/>
                    <a href=''>Careers</a>
                    <br/>
                    <a href=''>Zerodha.tech</a>
                    <br/>
                    <a href=''>Press & media</a>
                    <br/>
                    <a href=''>Zerodha Cares (CSR)</a>
                    <br/>
                </div>
                <div className='col'>
                <p>Support</p>
                <a href=''> Contact us </a> 
                <br/>
                <a href=''> Support portal </a> 
                <br/>
                <a href=''> Z-Connect blog </a> 
                <br/>
                <a href=''> List of charsge </a> 
                <br/>
                <a href=''> Downloads & resources </a> 
                <br/>
                <a href=''> Videos </a> 
                <br/>
                <a href=''> Market overview </a> 
                <br/>
                <a href=''>  How to file a complaint?</a> 
             

                </div>
                <div className='col'>
                <p>Account</p>
                <a href=''>Open an account </a>
                <br/>
                <a href=''>Fund transfer </a> 
                <br/>

                </div>

            </div>
            <div className='mt-5  text-muted' style={{fontSize:"16px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p> Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
</div>
        </div>
        </footer>

     );
}

export default Footer;