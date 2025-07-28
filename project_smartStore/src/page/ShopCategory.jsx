import React, { useContext, useState, useEffect } from 'react';
// import { shopContext } from '../context/ShopContext';
import Card from './Card';
import "./Css/Shopcategory.css"
// import img_sort from "../components/Assets/sort.jpeg"




function ShopCategory(props) {
  const [data, setData] = useState([]);
  const [fulterdata , setfulterdata]=useState([]);
      
  
  
  useEffect(() => {
        fetch("http://localhost:5000/product")
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.error(err));
          const thedata=data.filter((item)=>props.category===item.category);
          setfulterdata(thedata);
      }, [props.category]);
  

      useEffect(()=>{
        const thedata=data.filter((item)=>props.category===item.category);
          setfulterdata(thedata);
      },[data, props.category])



function sortedFrombigToSmall(){
  const sorted=[...fulterdata].sort((a,b) => b.new_price - a.new_price);
  setfulterdata(sorted);

}

function sortedFromSmailToBig(){
  const sorted=[...fulterdata].sort((a,b) => a.new_price - b.new_price);
  setfulterdata(sorted);
}

  const handleSortByName = () => {
    const sorted = [...fulterdata].sort((a, b) =>
      a.name.localeCompare(b.name,undefined, { sensitivity: 'base' })
    );
    setfulterdata(sorted);
  };
  const handleSortByName1 = () => {
    const sorted = [...fulterdata].sort((a, b) =>
      b.name.localeCompare(a.name, undefined, { sensitivity: 'base' })
    );
    setfulterdata(sorted);
  };
  
//sort the item
  function handelselect(e){
    const theTypeOfSort=e.target.value;
   if(theTypeOfSort==="a_z"){
    handleSortByName();
   } else if( theTypeOfSort==="z_a"){
    handleSortByName1();
   }else if( theTypeOfSort==="low_high"){
    sortedFrombigToSmall();
   }else if(theTypeOfSort==="high_low"){
    sortedFromSmailToBig();
   }

  }
  return (
   
    <div >

      <div className='the-header-of-page'>
        <img src={props.banner} alt="image" />
      </div>
    
      <div className='thecover-of-card'>

              <h3>The Number of {props.category} Is : {fulterdata.length}</h3>  
   
<div className='sort'>
   
<select style={{padding:"5PX" ,border:"2px black solid"}} onChange={handelselect} >
        <option value="a_z"> Name ( A &gt; Z )</option>
           <option value="z_a">Name ( Z &gt; A )</option>
              <option value="low_high"> Price ( high &gt; low )</option>
                 <option value="high_low">Price ( low &gt; high )</option>
      </select>
      </div>
      
 

    <div className='flex'>
      {fulterdata.map((item) => {
        
       
          return (

              <Card
        key={item.id}
        id={item.id}
        name={item.name}
         price={item.new_price}
        image={`http://localhost:5000/image/${item.image}`} 
        offer={item.offer}
        new={item.isnew}
      />
          );
         
      })}
    </div>
    <div style={{marginBottom:"5%"}}></div></div>
    </div>
  );
}

export default ShopCategory;
