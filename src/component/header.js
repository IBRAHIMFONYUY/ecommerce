import React, { useState } from "react";
import mainlogo from "./citypng.png"
import elipse from "./elipse.png"
import btnp from "./btnp.png"
import mainopt from "./mainoption.png"
import minor from "./minor.png"
import minor2 from "./minor2.png"
import About from "./about";



const Head=({scrollto, hidelinks})=>{
    
        
        
    return(
        <div className="header">
            <nav>
                <div className="nav" onClick={()=>hidelinks('links')}>&#9776;</div>
                <div className="links"  id="links" >
                    <div className="link"  onClick={()=>scrollto('menu')}><a href="#menu">MENU</a></div>
                    <div className="link"onClick={()=>scrollto('specials')}><a href="#specials">SPECIALS</a></div>
                    <div className="link" onClick={()=>scrollto('about')}><a href="#about">ABOUT</a></div>
                    <div className="link" ><a href="login.html">Logout</a></div>
                </div>
            </nav>
        <div className="tagline"> <h1>Discorver a new <br/> experience like no other. <br/> We bring you the best quality <br/>and unbeatable value</h1>
        <div className="main-btn" onClick={()=>scrollto('menu')}><a href="#about">ORDER NOW </a><img src={btnp}/></div>
        </div>
        <div className="main-logos">
        <img className="minor" src={minor}/>
        <img className="elipse" src={elipse}/>
        
        <img className="main-logo" src={mainlogo}/>
        
        <img  src={minor2}/> 
        
        </div>
        
        <img className="main-option" src={mainopt}/> 
                   
         
        
        
        
        
        </div>
    )
}

export default Head;