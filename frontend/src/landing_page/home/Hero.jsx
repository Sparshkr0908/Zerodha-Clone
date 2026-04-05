import React from 'react';
function Hero() {
    return ( 
        <div className='container p-3 mb-5'>
            <div className='row text-center' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img style={{width:"70%"}} src="media/Image/homeHero.png" alt='Hero Image' className='mb-4'/>
                <h1 className='mt-5 fs-3 text-muted'>Invest in everything</h1>
                <p className='mb-5 fs-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"15%",margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;