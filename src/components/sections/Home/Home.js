import React from 'react';
import '../../../App.css'
import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpeg';
import Link from '../../UI/Link/Link';
import Marquee from 'react-text-marquee';
const home = () => {
  return (
    <Section id='home'>
      <div className='fuild-container' style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='home-content p-5 border' >
          <div className='intro container text-center text-light'>
          <div className="d-flex flex-sm-wrap">
  <div className="p-2">
    <h6 className='sub-title mb-4'>HOW MUCH WILL IT COST YOUR COMPANY/BUSINESS IF YOU LOSE AN EMPLOYEE OR HAVE TO SHUT DOWN YOUR FACILITY FOR ANY AMOUNT OF TIME DO TO AN INFECTIOUS DISEASE?</h6>
<h6>Keep medical premiums lower by keeping your employees healthy and employed</h6>
            
            </div>
  <div className="p-2 vl"></div>
  <div className="p-2">
    <h6>FULL SPRAY FOR AS LOW AS $140.00</h6>
  <h6>Licensed and Insured</h6>
  <div className="d-flex flex-row">
  <div className="p-2 " style={{backgroundColor:'#5dcadf',borderRadius:20}}>COVID-19</div>
  <div className="p-2 ml-1" style={{backgroundColor:'#5dcadf',borderRadius:20}}>INFLUENZA</div>
  <div className="p-2 ml-1" style={{backgroundColor:'#5dcadf',borderRadius:20}}>COLD</div>
  <div className="p-2 ml-1" style={{backgroundColor:'#5dcadf',borderRadius:20}}>MRSA  </div>
  {/* <div className="p-2 ml-1" style={{backgroundColor:'#5dcadf',borderRadius:20}}>STAPH  </div>
  <div className="p-2 ml-1" style={{backgroundColor:'#5dcadf',borderRadius:20}}>VRE  </div>
  <div className="p-2 ml-1" style={{backgroundColor:'#5dcadf',borderRadius:20}}>VIRUSES  </div> */}

</div>
  </div>
  
  
</div>
            {/* <div className='row d-flex'>
<div className='col-6 '>
<h2 className='sub-title mb-4'>
            HOW MUCH WILL IT COST YOUR COMPANY/BUSINESS IF YOU LOSE AN EMPLOYEE OR HAVE TO SHUT DOWN YOUR FACILITY FOR ANY AMOUNT OF TIME DO TO AN INFECTIOUS DISEASE?
<h6>Keep medical premiums lower by keeping your employees healthy and employed</h6>
         
            </h2>

</div>
<div class="vl col-1 d-flex"></div>
<div className='col-3 d-flex'>
<h6>FULL SPRAY FOR AS LOW AS $140.00</h6>
</div>
</div> */}

{/* <div className='col-6'>
 <h5>Licensed and Insured</h5>
  </div> */}
            
            

           
            
            {/* <Link target='about' classes='btn btn-primary rounded-0 mr-2'>
              Learn More
            </Link>
            <Link target='contact' classes='btn btn-light text-dark rounded-0'>
              Contact Us
            </Link> */}
          </div>
        </div>
      </div>
      <div className='mt-2'  role="alert" style={{margin:'auto',color:'red',width:'50%',height:30,backgroundColor:'#2f4e72',borderRadius:'20px'}} >
      <marquee  direction="left" height="28" width="100%" bgcolor='#5dcadf'style={{borderRadius:'20px'}}><b>CALL IMEDIATELY FOR AN EMERGRENCY EXPOSURE SPRAY TECHNICIANS AVAILABLE 24/7 </b></marquee>
</div>
      
    </Section>
  );
};

export default home;
