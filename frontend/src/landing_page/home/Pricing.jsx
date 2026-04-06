import React from 'react';
function Pricing() {
    return ( 
        <div className='container p-4 mt-5' style={{fontFamily: 'Arial, sans-serif'}}>
            <div className='row p-4'>
                <div className='col-5 mb-5'>
                    <h2 className='mb-4 fs-4'>Unbeatable pricing</h2>
                    <p className='mb-3 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none", fontWeight:"500px", fontSize:"1rem"}}>See pricing <i class="fa-solid fa-arrow-right" style={{marginLeft:"5px",fontSize:"0.9rem"}}></i></a>
                </div>
                <div className='col-7'>
                    <div className='row'>
                        <div className='col-4'>
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100px'}}>
                                <img style={{ height: '80px', width: 'auto', zIndex: '1' }} src="public/media/image/pricing-eq.svg"/>
                                <div className='text-muted' style={{position: 'absolute',bottom:"18px",left: '74px', zIndex: '2',fontSize: '11px',lineHeight: '1.4'}}>
                                    Free account <br /> opening
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100px'}}>
                                <img style={{ height: '80px', width: 'auto', zIndex: '1' }} src="public/media/image/pricing-eq.svg"/>
                               <div className='text-muted' style={{position: 'absolute',bottom:"18px",left: '69px', zIndex: '2',fontSize: '11px',lineHeight: '1.4'}}>
                                    Free equity delivery<br />and direct mutual funds
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100px'}}>
                                <img style={{ height: '80px', width: 'auto', zIndex: '1' }} src="public/media/image/other-trades.svg"/>
                                <div className='text-muted' style={{position: 'absolute',bottom:"18px",left: '95px', zIndex: '2',fontSize: '11px',lineHeight: '1.4'}}>
                                     Intraday and <br /> F&O
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;

