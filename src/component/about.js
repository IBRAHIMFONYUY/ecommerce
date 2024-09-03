import React from "react";
import map from"./map.png";

const About=()=>{
    return(
        <>
        <h2 style={{
            
            textAlign:"center"
        }}>ABOUT US</h2>
        <div className="about-section" id="about">
            
            <div className="about">
                
            <div className="first">
                <div className="about-header">
                    <div>Get to us</div>
                    <div>Contact</div>
                </div>
                <div className="about-desc">
                    <h2>💻 Description</h2>
                    <div className="h3">The kiwi is one of the most nitrisious fruits</div>
                </div>
                <div className="about-desc">
                    <h2>📞 Description</h2>
                    <div className="h3">The best hamburger is one of the most eaten snacks in the world</div>
                </div>
            </div>
            
            <div className="second">
                <div className="about-header">
                <div>location</div>
                </div>
                <div className="map" style={{padding:"15px"}}>
                    <img src={map} />
                </div>
            </div>
            

            </div>
        </div>
        </>
    )
}

export default About;