import React from 'react'
import { useState } from 'react'
import "./AddProduct.css"

function AddProduct() {
  const [laptop, setlaptop] = useState(false); 
  const[pc,setpc]=useState(false);
  const[pcgaming ,setpcgaming]=useState(false);
  const[laptopgaming,setlaptopgaming]=useState(false);
  const[keyboardd,setkeyboardd]=useState(false);
  const[keyboardGaming,setkeyboardGaming]=useState(false);
  const[mouse,setMouse]=useState(false);
  const[mouseGaming,setmouseGaming]=useState(false);
  const[headset,setheadset]=useState(false);
  const[headsetGaming,setHeadsetGaming]=useState(false);
  const[monior,setMonitor]=useState(false);
    const[moniorGaming,setMonitorGaming]=useState(false);
    const[Charger,setCharger]=useState(false);



    const [id ,setid]=useState('');
    const [name ,setname]=useState('');
    const [category ,setcategory]=useState('');
    const [image ,setimage]=useState('');
    const [new_price ,setnewprice]=useState('');
        const [old_price ,setOldprice]=useState('');
        const[processorgeneration,setprocessorgeneration]=useState('');
        const[processorfamily,setprocessorfamily]=useState('');
        const[processorspeed,setprocessorspeed]=useState('');
        const[processorcache,setprossorcache]=useState('');
        const[numberofcores,setnumberofcores]=useState('');
        const[ramcapacity,setramcapacity]=useState('');
        const[memorytype,setmemorytype]=useState('');
        const[storagecapacity,setstoragecapacity]=useState('');
        const[storagetype,setstoragetype]=useState('');
        const[graphicmanufacturer,setgraphicmanufacturer]=useState('');
        const[graphicmodel,setgraphicmodel]=useState('');
        const[boostclock,setboostclock]=useState('');
        const[tgp,settgp]=useState('');
        const[graphicmemory,setgraphicmemory]=useState('');
        const[graphicmemorytype,setgraphicmemorytype]=useState('');
        const[graphicmemorysource,setgraphicmemorysource]=useState('');
        const[displaysize,setdisplaysize]=useState('');
        const[displaytechnology,setdisplaytechnology]=useState('');
        const[displayresolution,setdisplayresolution]=useState('');
        const[keyboard,setkeyboard]=useState('');
        const[type,settype]=useState('');
        const[offer,setoffer]=useState(0);
        const[isnew,setisnew]=useState('');
        const[ports,setports]=useState('');
        const[contrastratio,setcontrastratio]=useState('');
        const[responsetime,setresponsetime]=useState('');
        const[signalfrequency,setsignalfrequency]=useState('');
        const[coolingsystemmodel,setcoolingsystemmodel]=useState('');
        const[casemodel,setcasemodel]=useState('');
        const[lighttype,setlighttype]=useState('');
        const[powersupply,setpowersupply]=useState('');
        const[keyboardfeatures,setkeyboardfeatures]=useState('');
        const[opticaldrive,setopticaldrive]=useState('');
        const[camera,setcamera]=useState('');
        const[audio,setaudio]=useState('');
        const[fingerprint,setfingerprint]=useState('');
        const[networking,setnetworking]=useState('') ;
       const[batterynumberofcells,setbatterynumberofcells]=useState('');
        const[operationsystem,setoperationsystem]=useState('');
        const[warranty,setwarranty]=useState('');
        const[weightanddimensions,setweightanddimensions]=useState('');
        const[touchscreen,settouchscreen]=useState('');
function handelchange(){
  fetch("http://localhost:5000/add-to-product",{
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
          id: id,
          name: name,
          category: category,
          image: image,
          new_price: new_price,
          old_price:old_price,
          processorgeneration:processorgeneration,
          processorfamily:processorfamily,
          processorspeed:processorspeed,
          processorcache:processorcache,
          numberofcores	:numberofcores,
          ramcapacity:ramcapacity,
          memorytype :memorytype,
          storagecapacity: storagecapacity,
          storagetype:storagetype,
          graphicmanufacturer:graphicmanufacturer,
          graphicmodel :graphicmodel,
          boostclock:boostclock,
          tgp:tgp,
          graphicmemory:graphicmemory	,
          graphicmemorytype:graphicmemorytype	,
          graphicmemorysource:graphicmemorysource,
          displaysize:displaysize,
          displaytechnology:displaytechnology,
          displayresolution :displayresolution,
          keyboard :keyboard,
          type: type,
          offer:offer,
          isnew:isnew,
          ports:ports,
          contrastratio:contrastratio,
          responsetime :responsetime,
          signalfrequency:signalfrequency,
          coolingsystemmodel:coolingsystemmodel,	
          casemodel:casemodel,
          lighttype:lighttype,	
          powersupply:powersupply,	
          keyboardfeatures:keyboardfeatures,
          opticaldrive:opticaldrive,
          camera :camera ,
          audio:audio,
    	  fingerprint:fingerprint,
          networking: networking	,
          batterynumberofcells :batterynumberofcells	,
          operationsystem:operationsystem,
          warranty:warranty,
          weightanddimensions : weightanddimensions,
         touchscreen:touchscreen
        }),
  })
  .then((res)=>res.text())
  .then(()=>alert("add a new product"))
  .catch((err)=> console.log(err))
}


  return (
    <div className='thepage'>
        <h1 style={{textAlign:"center" ,fontSize:"50px"}}>Add A New Product</h1>

        <div className='button_of_add'>
        <button onClick={() => {setlaptop(true)
            setpc(false);
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
            setkeyboardd(false);
            setkeyboardGaming(false);
        }}>Laptop</button>

        <button onClick={()=>{setpc(false)
            setlaptop(false)
            setlaptopgaming(true);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
            setkeyboardd(false);
            setkeyboardGaming(false);
        }}>Laptop Gaming</button>

        <button onClick={()=>{setpc(true)
            setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
            setkeyboardd(false);
            setkeyboardGaming(false);
        }
        }>Pc</button>

        <button onClick={()=>{setpc(false)
            setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(true);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
            setkeyboardd(false);
            setkeyboardGaming(false);
        }}>Pc Gaming</button>

        <button onClick={()=>{setkeyboardd(true);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
            setkeyboardGaming(false);
        }}>Keyboard</button>

        <button onClick={()=>{setkeyboardGaming(true)
            setkeyboardd(false);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
        }}>keyboard Gaming</button>

        <button onClick={()=>{setkeyboardGaming(false)
            setkeyboardd(false);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(true);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
        }} >Mouse</button>

        <button onClick={()=>{setkeyboardGaming(false)
            setkeyboardd(false);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(true);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
        }}>Mouse gaming</button>

        <button onClick={()=>{setkeyboardGaming(false)
            setkeyboardd(false);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(true);
            setMonitorGaming(false);
        }}>Monitor</button>

        <button onClick={()=>{setkeyboardGaming(false)
            setkeyboardd(false);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(true);
        }}>Monitor Gaming</button>

        <button onClick={()=>{setkeyboardGaming(false)
            setkeyboardd(false);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(true);
            setHeadsetGaming(false);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
        }}>Charger</button>

        <button onClick={()=>{setkeyboardGaming(false)
            setkeyboardd(false);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(false);
            setheadset(true);
            setMonitor(false);
            setMonitorGaming(false);
        }}>Headset</button>

        <button onClick={()=>{setkeyboardGaming(false)
            setkeyboardd(false);
        setpc(false);
               setlaptop(false)
            setlaptopgaming(false);
            setpcgaming(false);
            setMouse(false);
            setmouseGaming(false);
            setCharger(false);
            setHeadsetGaming(true);
            setheadset(false);
            setMonitor(false);
            setMonitorGaming(false);
        }}>Headset Gaming</button>
        </div>
 <div className='theaddproduct'>
         <form>
       <div>  <label htmlFor="id">Id </label>
        <br />
        <input type="text" value={id} onChange={ (e)=> setid(e.target.value)} /></div>
          <br/>
            
     <div> <label htmlFor="name">Name </label></div>
        <br />
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}  />
        <br/>
          <br/>
        <label htmlFor="category">category </label>
        <br />
        <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)} />
          <br/>
            <br/>
        <label htmlFor="image">Imge </label>
        <br />
        <input type="text" value={image} onChange={(e)=>setimage(e.target.value)} />
          <br/>
            <br/>
      <label htmlFor="newprice">New Price</label>
        <br />
        <input type="text" value={new_price} onChange={(e)=>setnewprice(e.target.value)} />
          <br/>
            <br/>
        <label htmlFor="oldprice">Old price</label>
        <br />
        <input type="text" value={old_price} onChange={(e)=>setOldprice(e.target.value)} />
          <br/>
            <br/>
     {(laptop||pc||laptopgaming||pcgaming) && <div> <label htmlFor="">Processor Generation</label>
      <br />
        <input type="text"  value={processorgeneration} onChange={(e)=>setprocessorgeneration(e.target.value)}/>
          <br/>
        <label htmlFor="">Processor Family</label>
        <br />
        <input type="text" value={processorfamily} onChange={(e)=>setprocessorfamily(e.target.value)} />
        <br></br>
        <br />
          <label htmlFor="">Processor Speed</label>
        <br />
        <input type="text" value={processorspeed} onChange={(e)=>setprocessorspeed(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Processor cache</label>
        <br />
        <input type="text" value={processorcache} onChange={(e)=>setprossorcache(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Number Of Cores</label>
        <br />
        <input type="text" value={numberofcores} onChange={(e)=>setnumberofcores(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Ram Capacity</label>
        <br />
        <input type="text" value={ramcapacity} onChange={(e)=>setramcapacity(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Memory Type</label>
        <br />
        <input type="text" value={memorytype} onChange={(e)=>setmemorytype(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Storage Capacity</label>
        <br />
        <input type="text" value={storagecapacity} onChange={(e)=>setstoragecapacity(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Storage Type</label>
        <br />
        <input type="text" value={storagetype} onChange={(e)=>setstoragetype(e.target.value)} /> </div>}
      
          {(pcgaming||laptopgaming)&& <div> <br />
          <label htmlFor="">Graphic Manu Facturer</label>
        <br />
        <input type="text" value={graphicmanufacturer} onChange={(e)=>setgraphicmanufacturer(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Graphic Model</label>
        <br />
        <input type="text" value={graphicmodel} onChange={(e)=>setgraphicmodel(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Boostclock</label>
        <br />
        <input type="text" value={boostclock} onChange={(e)=>setboostclock(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Tgp</label>
        <br />
        <input type="text" value={tgp} onChange={(e)=>settgp(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Graphic Memory</label>
        <br />
        <input type="text" value={graphicmemory} onChange={(e)=>setgraphicmemory(e.target.value)} />
        <br></br>
          <br />
          <label htmlFor="">Graphic Memory Type</label>
        <br />
        <input type="text" value={graphicmemorytype} onChange={(e)=>setgraphicmemorytype(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Graphic Memory Source</label>
        <br />
        <input type="text" value={graphicmemorysource} onChange={(e)=>setgraphicmemorysource(e.target.value)} />
        <br></br></div>}
        {(laptopgaming||monior||moniorGaming)&& <div> <br />
          <label htmlFor="">Display Size</label>
        <br />
        <input type="text" value={displaysize} onChange={(e)=>setdisplaysize(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Display Technology</label>
        <br />
        <input type="text" value={displaytechnology} onChange={(e)=>setdisplaytechnology(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Display Resolution</label>
        <br />
        <input type="text" value={displayresolution} onChange={(e)=>setdisplayresolution(e.target.value)} />
        <br></br></div>}
        {(keyboardd||keyboardGaming)&& <div> <br />
          <label htmlFor="">keyboard</label>
        <br />
        <input type="text" value={keyboard} onChange={(e)=>setkeyboard(e.target.value)} />
        <br></br></div>}
          
          <label htmlFor=""> Type</label>
        <br />
        <input type="text" value={type} onChange={(e)=>settype(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">Offer</label>
        <br />
        <input type="text" value={offer} onChange={(e)=>setoffer(e.target.value)} />
        <br></br>
         <br />
          <label htmlFor="">new</label>
        <br />
        <input type="text" value={isnew} onChange={(e)=>setisnew(e.target.value)} />
        <br></br>
           <br />
          <label htmlFor="">Ports</label>
        <br />
        <input type="text" value={ports} onChange={(e)=>setports(e.target.value)} />
        <br></br>
         {(monior||moniorGaming)&& <div>  <br />
          <label htmlFor="">Contrastratio</label>
        <br />
        <input type="text" value={contrastratio} onChange={(e)=>setcontrastratio(e.target.value)} />
        <br></br>
             <br />
          <label htmlFor="">Response Time</label>
        <br />
        <input type="text" value={responsetime} onChange={(e)=>setresponsetime(e.target.value)} />
        <br></br>
              <br />
          <label htmlFor="">Signal Frequency</label>
        <br />
        <input type="text" value={signalfrequency} onChange={(e)=>setsignalfrequency(e.target.value)} />
        <br></br></div>}
               <br />
        {(pcgaming)&& <div>  <label htmlFor="">Cooling System Model</label>
        <br />
        <input type="text" value={coolingsystemmodel} onChange={(e)=>setcoolingsystemmodel(e.target.value)} />
        <br></br>
               <br />
          <label htmlFor="">Case Model</label>
        <br />
        <input type="text" value={casemodel} onChange={(e)=>setcasemodel(e.target.value)} />
        <br></br>
                 <br />
       <label htmlFor="">Light Type</label>
        <br />
        <input type="text" value={lighttype} onChange={(e)=>setlighttype(e.target.value)} /> 
        <br></br></div>}
           {(pc||pcgaming)&& <div>     <br />
          <label htmlFor="">Power Supply</label>
        <br />
        <input type="text" value={powersupply} onChange={(e)=>setpowersupply(e.target.value)} />
        <br></br></div>} 
        {(keyboardd||keyboardGaming)&& <div>         <br />
          <label htmlFor="">Keyboard Features</label>
        <br />
     <input type="text" value={keyboardfeatures} onChange={(e)=>setkeyboardfeatures(e.target.value)} />
        <br></br></div>}
                   <br />
      {(laptop||laptopgaming) &&  <div>  <label htmlFor="">Optical Drive</label>
        <br />
        <input type="text" value={opticaldrive} onChange={(e)=>setopticaldrive(e.target.value)} />
        <br></br>
                    <br />
          <label htmlFor="">Camera</label>
        <br />
        <input type="text" value={camera} onChange={(e)=>setcamera(e.target.value)} />
        <br></br>
                    <br />
          <label htmlFor="">Audio</label>
        <br />
        <input type="text" value={audio} onChange={(e)=>setaudio(e.target.value)} />
        <br></br>
                     <br />
          <label htmlFor="">Finger Print</label>
        <br />
        <input type="text" value={fingerprint} onChange={(e)=>setfingerprint(e.target.value)} />
        <br></br>
                       <br />
          <label htmlFor="">Networking</label>
        <br />
        <input type="text" value={networking} onChange={(e)=>setnetworking(e.target.value)} />
        <br></br>
                         <br />
          <label htmlFor="">Battery Number Of Cells</label>
        <br />
        <input type="text" value={batterynumberofcells} onChange={(e)=>setbatterynumberofcells(e.target.value)} />
        <br></br>
                           <br />
          <label htmlFor="">Operation System</label>
        <br />
        <input type="text" value={operationsystem} onChange={(e)=>setoperationsystem(e.target.value)} />
        <br></br>
                            <br />
          <label htmlFor=""> Warranty</label>
        <br />
        <input type="text" value={warranty} onChange={(e)=>setwarranty(e.target.value)} />
        <br></br>
                            <br />
          <label htmlFor=""> Weight And Dimensions</label>
        <br />
        <input type="text" value={weightanddimensions} onChange={(e)=>setweightanddimensions(e.target.value)} />
        <br></br>
                              <br />
          <label htmlFor="">Touch Screen</label>
        <br />
        <input type="text" value={touchscreen} onChange={(e)=>settouchscreen(e.target.value)} /></div>}  
        <br></br>
          <button onClick={handelchange}>Add Product</button>
        </form> </div>
   </div>
  )
}

export default AddProduct

