import { useState } from "react";
import React from "react";
import specials from "./data";
import Priceincrement from "./price";
import menu from "./menu.png"
import Opps from "./opps";
import pic from "./minor.png"

const Card=()=>{
    const[card, setcard]=useState([])
    const [totalitems, settotalitems]=useState(0)
    const [totalamount, settotalamount]=useState(0)
    const[button, setbutton]=useState('Add Item')
    const[amount, setamount]=useState(1);
    const[price, setprice]=useState(500);
    const incrementamount=500
    const incrementspace=1
    const[selectedcategory, setselectedcategory]=useState('All')

    const add=(special)=>{
        
        const existingproductindex=card.findIndex((items)=>items.id === special.id);
        
        if (existingproductindex!==-1){
            const updatedcard=[...card]
            updatedcard[existingproductindex].quantity +=0
            setcard(updatedcard)
            
            
        }else{
            const newproduct={
                ...special,
                quantity:1,
                dateadded:new Date().toLocaleString(),
            }
            setcard([...card, newproduct])
            settotalitems(totalitems+1)
        settotalamount(totalamount+special.price)
        
        }

        setbutton("Item Added")
        
    }
    const remove=(index)=>{
        const removeitem=card[index]
        
            const newcard=card.filter((_, i)=>i !== index)
            setcard(newcard)
            settotalitems(totalitems-1)
        settotalamount(totalamount-removeitem.price)
    
    }
    const increaseqtty=(index)=>{
        const updatedcard=[...card]
        updatedcard[index].quantity +=1
        setcard(updatedcard)
        settotalitems(totalitems +1)
        settotalamount(totalamount + updatedcard[index].price)
        
        
    }
    const decreaseqtty=(index)=>{
        
        if(card[index].quantity >1){
            const updatedcard=[...card]
            updatedcard[index].quantity -=1
            setcard(updatedcard)
        settotalitems(totalitems-1)
        settotalamount(totalamount - updatedcard[index].price)
        

        }else{
            remove(index)
        }
    }

    
    
    
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
        <>
        <div className="card" id="hidcard">
            
            <div className="card-cnt">
            <h2>Your card <img src={pic} /> </h2>
            <div className="card-items">
                
                {card.map((items,index)=>(
                    
                    <div key={index} className="card-item">
                        
                    <span className="item-minor">{items.quantity} X {items.name} {items.price}FCFA - added on {items.dateadded}
                        <div className="btns">
                        <div className="card-btn" onClick={()=>increaseqtty(index)}>+</div>
                        <div className="card-btn"  onClick={()=>decreaseqtty(index)}>-</div>
                        </div> 

                        <div className="card-btn-remove"  onClick={()=>remove(index)}>remove</div>
                        
                         </span>
                         <hr/>
                    </div>
                    
                    
                ))}
                <h4>Total Price: {totalamount} FCFA</h4><br/>
                <h4>Total Items: {totalitems} ITEMS</h4>
                <div className="card-btn-buy" >Purchase</div>
            </div>
            </div>
            
        </div>
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
            {getfilteredproducts().map(special=>(
                 
            
            
                <div className="menu-items" key={special.id}>
                
                <div className="top-menu"></div>
                <img src={special.picture}/>
                <div className="bottom">{special.name} ({special.category})</div>
                <div className="description">{special.description}</div>
                
                
                <div className="price" style={{
            fontWeight:"bold",
            display:"flex",
            justifyContent:"space-between",
            
        }}>{special.price} FCFA  
            <div className="counter" onClick={()=>add(special)}  >
            add item
            
            </div>
            
            </div>
                
                
                </div>
            ))}
            </div>
           
        </div>
        </div>
        </>
    )
}
export default Card;
