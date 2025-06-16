import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Prodect.css";


 
    function Card(props) {
      return( 

        <div style={{margin:"0px"}}
        className="theCrde">
          
          <img className="size_photo" src={props.img} alt="avatar_img" />
          <h2>{props.name}</h2>
          <br/>
          <p className="text_algin">{props.tel.substring(0, 200)}</p>
          <p className="text_algin" >{props.email.substring(0, 200)}</p>
        </div>
   
      );
    }
    function Prodect() {
         return(<div>
    <Header/>


      <div className="flex">
     
        <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="ASUS TUF"
          email="ASUS TUF Gaming A15 (2024) FA506NFR-HN030 7Gen AMD Ryzen 7 7435HS 8-Core up to 4.5GHz 20M CasheNVIDIA® GeForce RTX™ 2050 Laptop GPU Up to 1670MHz at 60W (70W with Dynamic Boost) 4GB GDDR6 ,  15.6" 
        />
        
        <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
         <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
         <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
        <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="ASUS TUF"
          email="ASUS TUF Gaming A15 (2024) FA506NFR-HN030 7Gen AMD Ryzen 7 7435HS 8-Core up to 4.5GHz 20M CasheNVIDIA® GeForce RTX™ 2050 Laptop GPU Up to 1670MHz at 60W (70W with Dynamic Boost) 4GB GDDR6 ,  15.6" 
        />
        
        <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
         <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
         <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
        <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="ASUS TUF"
          email="ASUS TUF Gaming A15 (2024) FA506NFR-HN030 7Gen AMD Ryzen 7 7435HS 8-Core up to 4.5GHz 20M CasheNVIDIA® GeForce RTX™ 2050 Laptop GPU Up to 1670MHz at 60W (70W with Dynamic Boost) 4GB GDDR6 ,  15.6" 
        />
        
        <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
         <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
         <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
        <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="ASUS TUF"
          email="ASUS TUF Gaming A15 (2024) FA506NFR-HN030 7Gen AMD Ryzen 7 7435HS 8-Core up to 4.5GHz 20M CasheNVIDIA® GeForce RTX™ 2050 Laptop GPU Up to 1670MHz at 60W (70W with Dynamic Boost) 4GB GDDR6 ,  15.6" 
        />
        
        <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
         <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
         <Card
          name="DELL LABTOP"
          img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
        </div>
        <Footer/>
        </div>
 )
}

export default Prodect;
