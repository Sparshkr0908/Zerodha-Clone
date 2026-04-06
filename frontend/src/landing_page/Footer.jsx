import React from 'react';
function Footer() {
    return ( 
    <footer style={{backgroundColor:"rgb(250,250,250)", marginBottom:"10px"}}>
        <div className='container border-top mt-5' >
            <div className='row mt-5'>
                <div className='col' >
                    <div >
                    <img src="public/media/image/logo.svg" style={{width:"55%"}} />
                    </div>
                    <p style={{fontSize: "14px", color: "#666", margin: "15px 0"}}>&copy; 2010 - 2026, Zerodha Broking Ltd. <br /> All rights reserved.</p>
                    <div className='mb-3' style={{display: 'flex', gap: '15px', margin: '15px 0'}}>
                        <a href="#" style={{color:"#666", fontSize:"20px"}}><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" style={{color:"#666", fontSize:"20px"}}><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" style={{color:"#666", fontSize:"20px"}}><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" style={{color:"#666", fontSize:"20px"}}><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className='border-bottom'></div>
                    <div className='mt-3' style={{display: 'flex', gap: '15px', margin: '15px 0'}}>
                        <a href="" style={{color:"#666", fontSize:"20px"}}><i class="fa-brands fa-youtube"></i></a>
                        <a href="" style={{color:"#666", fontSize:"20px"}}><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="" style={{color:"#666", fontSize:"20px"}}><i class="fa-brands fa-telegram"></i></a>
                    </div>
                    <div style={{display: 'flex', gap: '16px',textAlign:"center", marginTop: '40px'}}>
                        <img src="public\media\Image\google-play-badge-light.svg" alt="App Store" style={{height: "40px", width:"auto", maxWidth:"180px"}}/>
                        <img src="public\media\Image\appstore-badge-light.svg" style={{height:"40px", width:"auto", maxWidth:"180px"}}/>
                    </div>
                </div>
                <div className='col' style={{marginLeft:"30px"}}>
                    <p style={{fontSize:"20px"}}>Account</p>
                    <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Open demat account</a><br />                    
                    <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Minor demat account</a><br />
                    <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>NRI demat account</a><br />
                    <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>HUF demat account</a><br />               
                    <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Commodity</a><br />       
                    <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Dematerialisation</a><br />              
                    <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Fund transfer</a><br />           
                    <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>MTF</a><br /> 
                </div>
                <div className='col'>
                    <p style={{fontSize:"20px"}}>Support</p>
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Contact us</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Support portal</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>How to file a complaint?</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Status of your complaints</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Bulletin</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Circular</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Z-Connect blog</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Downloads</a><br />
                </div>
                <div className='col'>
                    <p style={{fontSize:"20px"}}>Company</p>
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>About</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Philosophy</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Press & media</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Careers</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Zerodha Cares (CSR)</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Zerodha.tech</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Open source</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Referral program</a><br />
                </div>
                <div className='col'>
                    <p style={{fontSize:"20px"}}>Quick links</p>
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Upcoming IPOs</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Brokerage charges</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Market holidays</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Economic calendar</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Calculators</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Markets</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Sectors</a><br />
                        <a href="" style={{textDecoration:"none", color:"#666",fontSize:".875rem",display: "block",marginBottom: "1px", fontFamily:"inter"}}>Gift Nifty</a><br />
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"12px"}}>
            <p>
                Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="" style={{textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href="" style={{textDecoration:"none"}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>
            <p>
                Procedure to file a complaint on <a href="" style={{textDecoration:"none"}}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>
            <a href="" style={{textDecoration:"none"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
            <p className='mt-3'>
                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <p>
                Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
                India's largest broker based on networth as per NSE. <a href="" style={{textDecoration:"none"}}>NSE broker factsheet</a>
            </p>
            <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="" style={{textDecoration:"none"}}>create a ticket here</a>.
            </p>
            <p>
                *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
            </p>
            <p>
                Zerodha Broking Limited: Customers availing fixed deposit facilitation services offered by Blostem Fintech Private Limited will not have access to any exchange investor grievance redressal forum, SEBI SCORES/ODR, conciliation, or arbitration mechanism in respect of such fixed deposit products.
            </p>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:"20px", marginLeft:"12px",  padding:"18px"}}>
                <a href="" style={{textDecoration:"none", color:"#666", marginLeft:"8rem", fontFamily:"inter", fontSize:"12px"}}>NSE</a>
                <a href="" style={{textDecoration:"none", color:"#666", fontFamily:"inter", fontSize:"12px"}}>BSE </a>
                <a href="" style={{textDecoration:"none", color:"#666", fontFamily:"inter", fontSize:"12px"}}>MCX  </a>
                <a href="" style={{textDecoration:"none", color:"#666", fontFamily:"inter", fontSize:"12px"}}>Terms & conditions </a>
                <a href="" style={{textDecoration:"none", color:"#666",fontFamily:"inter", fontSize:"12px"}}>Policies & procedures  </a>
                <a href="" style={{textDecoration:"none", color:"#666", fontFamily:"inter", fontSize:"12px"}}>Privacy policy  </a>
                <a href="" style={{textDecoration:"none", color:"#666", fontFamily:"inter", fontSize:"12px"}}>Disclosure  </a>
                <a href="" style={{textDecoration:"none", color:"#666",fontFamily:"inter", fontSize:"12px"}}>For investor's attention  </a>
                <a href="" style={{textDecoration:"none", color:"#666",fontFamily:"inter", fontSize:"12px"}}>Investor charter </a>
            </div>
        </div>
    </footer>
     );
}

export default Footer;