import React from 'react';
function NotFound() {
    return ( 
        <div className='container p-3 mb-5 mt-5'>
            <div className='row text-center' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <h1 className='mt-5 p-3 fs-4 text-muted'>404 not Found</h1>
                <p className='mb-4 text-muted' style={{fontSize:"18px"}}>Sorry, the page you are looking for does not exists.</p>
                </div>
        </div>
     );
}

export default NotFound;