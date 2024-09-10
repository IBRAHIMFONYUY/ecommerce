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
                    <div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=polytechnic%20Yaounde%20cameroon&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" style={{width: "430px", height: "400px"}}></iframe><a href="https://www.taxuni.com/qbi-calculator/">QBI Calculator</a></div></div>
                </div>
            </div>
            

            </div>
        </div>
        </>
    )
}

export default About;
