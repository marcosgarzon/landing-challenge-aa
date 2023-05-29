import React from "react";
import packstarting from "../utils/packstarting.svg";
import food1 from "../utils/food1.svg";
import food2 from "../utils/food2.svg";
import pizza from "../Images/pizza.png";

const PackStarting = () => {
  return (
    <div className="bgpack-starting">
      <div className="image-left">
        <img src={food1} alt="Imagen Izquierda" />
      </div>
      <div className="image-right">
        <img src={pizza} alt="Imagen Derecha" />
      </div>
      <div className="text-container">
        <h3 className="h3-packs">PACKS STARTING AT $39</h3>
        <p className="p3-packs">Expertly curated packs tailored to your exact need</p>
        <a className="learn-more1" href="#">Learn more</a>
      </div>
      <img src={packstarting} alt="Pack Starting" />
    </div>
  );
};

export default PackStarting;
