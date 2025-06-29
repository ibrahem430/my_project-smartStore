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
      marginTop:"5%" 
    
}
const thePage={
    marginLeft:"20%",
    marginRight:"20%" ,
     marginTop:"10%" 
}



function Contact() {
  return (<div>
         <div style={thePage}>
            <h1 style={{ textAlign:"center"}}>Contact us</h1>
    <div style={thestyle}>
        <div><img style={{height:"120px" ,width:"120px"}} src={facebook} alt="" />
        <h2 style={{textAlign:"center"}}>Facebook</h2>
        </div>
        <div><img style={{height:"120px" ,width:"120px"}} src={instgram} alt="" />
        <h2 style={{textAlign:"center"}}>Instagram</h2>
        </div>
        <div><img style={{height:"120px" ,width:"150px", borderRadius:"50%"}} src={x} alt="" />
        <h2 style={{textAlign:"center"}}>x</h2>
        </div>
    </div></div>

    <div><p><span style={{}}>Contact Details</span>
Address:

City Center for Computers Wasfi Al-Tal Streen ( Gardenz ), PizzaHut Building #28 Amman , Jordan

Working Time:

Saturday - Wednesday : 8:00 AM - 6:30 PM
Thursday : Holiday (رأس السنة الهجرية)
Friday: Closed

Telephone: 06-5626110 - 06-5626111 - 06-5626114

WhatsApp: 0796802525

Email: sales@citycenter.Jo</p></div>
    </div>
  )
}

export default Contact