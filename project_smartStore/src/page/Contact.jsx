import React from 'react'
import facebook from "../components/Assets/photoOfContact/2023_Facebook_icon.svg"
import instgram from "../components/Assets/photoOfContact/Instagram_logo_2022.svg"
import x from "../components/Assets/photoOfContact/download.png"

const thestyle={
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px" ,
      marginTop:"5%" ,
     
    
}
const thePage={
     display: "flex",
   
    justifyContent: "center",
    alignItems: "center", 
    marginBottom:"5%"
}
const the_contact_details={
  fontSize:"27px",
  textAlign:"center" ,
  marginTop:"5%"
}
const ollpage={
  width:"60%",
  marginLeft:"20%",
     border: "3px black solid"

}


function Contact() {
  return (<div style={ollpage}>    
       
  <h1 style={the_contact_details}><span style={{fontSize:"40px" }} >Contact Details</span>
    <br /><br />
<br/>
Working Time:
<br></br> <br></br>
<span style={{color:"red"}}>
Saturday - Wednesday : 8:00 AM - 6:30 PM
<br></br>
Friday: Closed
</span>
<br/><br/>
WhatsApp:<br/><br/>
<span style={{color:"red"}}>0782227059</span> 
<br/><br />
Email:
<br/><br/>
 <span style={{color:"red"}}>sales@tecksmart.Jo</span></h1>
        
<br/>
<h1 style={{ textAlign:"center" , fontSize:"40px" }}>Contact us</h1> 
  <div style={thePage }>  
      
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
      
  
    </div></div>
    </div>
  )
}

export default Contact