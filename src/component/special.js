import React from "react";
import specials from "./data";
import { useState } from "react";

const Special = () => {
    const [slideindex, setslideindex] = useState(0)
    const next = () => {
        setslideindex((prevIndex) => (prevIndex + 1) % specials.length)
    };
    const prev= () => {
        setslideindex((prevIndex) => prevIndex===0 ? specials.length-1: prevIndex-1);
    };
    const getprev=()=>{
        return slideindex === 0? specials.length-1: slideindex-1;
    }
    
    const getnext=()=>{
        return slideindex === specials.length-1 ? 0:slideindex+1;
    }
    
    return(
        <div id="specials">
        <h2 style={{textAlign:'center'}}>Today's specials</h2>
        <div className="section-special">
        
        <div className="specials-container">
            
            
            <div className="sepcials-items prev" >
                <img src={specials[getprev()].picture}/>
                <h3>{specials[getprev()].name}</h3>
            </div>
            <div className="specials-items active" style={{
                transition:  "ease-in-out 0.5s"
            }} >
                <img src={specials[slideindex].picture}/>
                <h3>{specials[slideindex].name}</h3>
            </div>
            <div className="sepcials-items next" >
                <img src={specials[getnext()].picture}/>
                <h3>{specials[getnext()].name}</h3>
            </div>
            
            
            
            
            
            <div className="swap">
                <button className="prev" onClick={prev}>&#10094;</button>
                <button className="next" onClick={next}>&#10095;</button>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Special;