import React from "react";
import { useState } from "react";
const Priceincrement=()=>{
    const[price, setprice]=useState(0);
    const[amount, setamount]=useState(0);
    const incrementamount=500
    const incrementspace=1
    const increaseprice=()=>{
        setprice(prevprice => prevprice + incrementamount);
        setamount(prevamount=>prevamount+incrementspace)
    };
    const reduceprice=()=>{
        setprice(prevprice =>  incrementamount-prevprice);
        setamount(prevamount=>incrementspace-prevamount)
    };

    return(
        <div className="price" style={{
            fontWeight:"bold",
            display:"flex",
            justifyContent:"space-between",
            
        }}>{price}FCFA for {amount} 
            <div className="counter" onClick={increaseprice} ><div onClick="" style={{
                width:"25px",
                height:"15px",
                borderRadius:"20px 0px 0px 20px",
                borderRight:"solid 1px rgba(243, 86, 73, 1)",
                fontSize:"10px",
                background:"white",
                textAlign:"center"
            }}> -</div>
            
            
            </div>
            
            </div>
        
        
        
    )
}
export default Priceincrement;