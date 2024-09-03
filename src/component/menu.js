import React, { useState } from "react";
import specials from "./data";
import menu from './menu.png'
import Priceincrement from "./price";

const Menu=()=>{
    
        const[selectedcategory, setselectedcategory]=useState('All')
        const filterproducts=(category)=>{
            setselectedcategory(category)
        }
        const getfilteredproducts=()=>{
            if(selectedcategory === 'All'){
                return specials;
            }
            return specials.filter(items=>items.category === selectedcategory)
        }
        
    return(
        <div id="menu">
        <div className="menu-header">
        <img style={{display:"block"}} src={menu}/>
        </div>
        <div className="filters">
            <div className="filter" onClick={()=>filterproducts('All')}>All</div>
            <div className="filter" onClick={()=>filterproducts('snack')}>Snacks</div>
            <div className="filter" onClick={()=>filterproducts('fruits')}>Fruits</div>
            <div className="filter" onClick={()=>filterproducts('food')}>food</div>
            <div className="filter" onClick={()=>filterproducts('drink')}>drink</div>
        </div>
        <div className="menu">
           
            <div className="menu-item">
            {getfilteredproducts().map(items=>(
                 
            
            
                <div className="menu-items">
                
                <div className="top-menu"></div>
                <img src={items.picture}/>
                <div className="bottom">{items.name} ({items.category})</div>
                <div className="description">{items.description}-{items.price}</div>
                
                <Priceincrement />
                
                
                </div>
            ))}
            </div>
           
        </div>
        </div>
    )
}

export default Menu;