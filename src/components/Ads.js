import React from "react";
import hqc from "../utils/hqc.svg";
import chat from "../utils/chat.svg";

const Ads = () => {
  return (
   
    <div className="clank ">
        <div>
            <img className="hqc" src={hqc}/>
            <p className="hqc-text">High-quality content</p>
        </div>
        <div className="twichChat">
            <img src={chat} className="chat"/>
        </div>
      <div className="ad1">
        <p className="subad1">PRODUCT LISTING PAGES. INSTAGRAM ADS. PRODUCT LISTING PAGES. INSTAGRAM ADS </p>
      </div>
      <div className="ad2">
        <p className="subad2">MARKETING COLLATERAL. FACEBOOK ADS. MMS CAMPAIGNS</p>
      </div>
      <div className="ad3">
        <p className="subad3">ORGANIC CONTENT. EMAIL CAMPAIGNS. AMAZON STORE.</p>
      </div>
      <div className="ad4">
        <p className="subad4">STARTER PACKS. PHOTOS. VIDEO CLIPS. STARTER PACKS. PHOTOS. VIDEO CLIPS.</p>
      </div>
      <div className="ad5">
        <p className="subad5">HAND MODELS. FULL BODY MODELS. HAND MODELS. FULL BODY MODELS.</p>
      </div>
    </div>
   
  );
};

export default Ads;
