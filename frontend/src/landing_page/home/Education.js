import React from 'react';
 
function Education() {
    return ( 
          <div className='container '>
            <div className='row'>
                <div className='col-6 mb-5'>
                 <img src='media/education.svg' style={{width:"70%"}} alt='education' />
                </div>
                <div className='col-6   mt-5'>
                 <div className='row mt-5'>
                <h3>Free and open source education</h3>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='#' style={{textDecoration:"none"}} >Varsity <i class="fa fa-long-arrow-right" arial-hidden="true"></i></a>
                <p className='row p-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                <a href='#' style={{textDecoration:"none"}} >TradingQ&A <i class="fa fa-long-arrow-right" arial-hidden="true"></i></a>
                    </div>
                </div>
            </div>
          </div>
      );
}

export default Education;