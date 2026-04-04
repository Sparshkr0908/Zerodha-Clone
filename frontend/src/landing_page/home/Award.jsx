import React from 'react';
function Award() {
    return (  
           <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6 p-5'>
                        <img src="public/media/image/largestBroker.svg"/>
                    </div>
                    <div className='col-6 p-5 mt-5'>
                        <h2>Largest Stock Broker in India</h2>
                        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <p>Futures and options</p>
                                    </li>
                                    <li>
                                        <p>Commodity derivatives</p>
                                    </li>
                                    <li>
                                        <p>Curreny derivatives</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <p>Stocks and IPOs</p>
                                    </li>
                                    <li>
                                        <p>Direct mutuals funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Govts. Securities</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img style={{width:"90%"}} src="media\Image\pressLogos.png"/>
                    </div>
                </div>
           </div>
    );
}

export default Award;