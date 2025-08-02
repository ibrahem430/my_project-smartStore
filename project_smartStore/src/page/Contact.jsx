import React from 'react'
import facebook from "../components/Assets/photoOfContact/2023_Facebook_icon.svg"
import instgram from "../components/Assets/photoOfContact/Instagram_logo_2022.svg"
import x from "../components/Assets/photoOfContact/download.png"
import "./Css/Contact.css"

// const thestyle={
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "60px" ,
//       marginTop:"5%" ,
     
    
// }
// const thePage={
//      display: "flex",
   
//     justifyContent: "center",
//     alignItems: "center", 
//     marginBottom:"5%"
// }
// const the_contact_details={
//   fontSize:"27px",
//   textAlign:"center" ,
//   marginTop:"5%"
// }
// const ollpage={
//   width:"60%",
//   marginLeft:"20%",
//      border: "3px black solid"

// }


function Contact() {
  return (<div className='ollpage' >    
       <h1 className='contactDetalse'>Contact Details</h1>
       <div className='worktime-whatsapp-gmail'>
<div className='the-work-time'>
<h3 style={{margin:"0px", fontWeight:"1000"}}>Working Time</h3> 

{/* <hr  style={{backgroundColor:"black" ,height:"2px"}}/> */}
<br />

<h3 style={{margin:"0px"}}>* Saturday - Wednesday : <span style={{}}>8:00 AM - 6:30 PM</span>  *</h3> 
<br></br>

<h3 style={{margin:"0px"}} >* Friday: Closed *</h3> 

</div>

<div className='whatsapp1'>


 <h3 style={{margin:"0px"}}>WhatsApp</h3> 
{/* <hr  style={{backgroundColor:"white" ,height:"2px"}}/> */}

<br />
  <button >
              <img
                style={{ height: "30px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png"
                alt=""
              /> Chat With Us In WhatsApp
            </button>
          
{/* *0782227059* */}

</div>

<div className='gmail'>
  <img style={{height:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png" alt="" />
  <h3>sales@tecksmart.Jo</h3> 
</div>
</div>
<div className='facebook-instgram-x'>
 <div><img style={{height:"50px" ,width:"50px"}} src={facebook} alt="" />
        {/* <h2 style={{textAlign:"center"}}>Facebook</h2> */}
        </div>
        <div><img style={{height:"50px" ,width:"50px"}} src={instgram} alt="" />
        {/* <h2 style={{textAlign:"center"}}>Instagram</h2> */}
        </div>
        <div><img style={{height:"50px" ,width:"65px", borderRadius:"50%"}} src={x} alt="" />
        {/* <h2 style={{textAlign:"center"}}>x</h2> */}
        </div>
</div>
{/* 

Email:
<br/><br/>

        
<br/>
<h1 style={{ textAlign:"center" , fontSize:"40px" }}>Contact us</h1>  */}
  {/* <div style={thePage }>  
      
    <div style={thestyle}>                                            

        <div><img style={{height:"110px" ,width:"110px"}} src={facebook} alt="" />
        <h2 style={{textAlign:"center"}}>Facebook</h2>
        </div>
        <div><img style={{height:"110px" ,width:"110px"}} src={instgram} alt="" />
        <h2 style={{textAlign:"center"}}>Instagram</h2>
        </div>
        <div><img style={{height:"100px" ,width:"130px", borderRadius:"50%"}} src={x} alt="" />
        <h2 style={{textAlign:"center"}}>x</h2>
        </div>
      
  
    </div></div> */}
    </div>
  )
}

export default Contact