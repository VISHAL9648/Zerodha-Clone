import React from 'react';

function Stats() {
    return (
            <div className='container p-3'>
                <div className='row p-5'>
                    <div className='col-6 p-5'>
                        <h1 className='mb-5'>Trust with confidence</h1>
                        <h3 className='fs-4'>Customer-first always</h3>
                        <p className='text-muted'>That's why 1.3 cror customer trust zerodha with 3.5 lakh crores worth of equity invesments</p>
                        <h3 className='fs-4'>No spam or gimmicks</h3>
                        <p className='text-muted'>That's why 1.3 cror customer trust zerodha with 3.5 lakh crores worth of equity invesments</p>
                        <h3 className='fs-4'>The zerodha univers</h3>
                        <p className='text-muted'>That's why 1.3 cror customer trust zerodha with 3.5 lakh crores worth of equity invesments</p>
                        <h3 className='fs-4'>Do better with money </h3>
                        <p className='text-muted'>That's why 1.3 cror customer trust zerodha with 3.5 lakh crores worth of equity invesments</p>



                    </div>
                    <div className='col-6'>
                        <img src='media/ecosystem.png' alt='ecosystem' style={{width:"90%"}}/>
                        <div>
                            <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore oue product<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                            <a href='' style={{textDecoration:"none"}}> Try kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>

                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Stats;