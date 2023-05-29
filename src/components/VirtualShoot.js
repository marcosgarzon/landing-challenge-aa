import React, { useState } from "react";

const Card = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Option 1":
        return <p className="text-card-p">Plan your shoot in just minutes! Build your own photo or video shoot or select a pre-priced pack.</p>;
      case "Option 2":
        return <p className="text-card-p">Finalize your shoot list and select your models! Ship us your products in order to get on shedule</p>;
      case "Option 3":
        return <p className="text-card-p">Every shoot starts with a kickoff call. See content appear in real time and give feedback through our live chat.</p>;
      case "Option 4":
        return <p className="text-card-p">Only pay for what you love: $39 photos & $93 video clips. Selected edits during checkout. Get your content bak in 24hs.</p>;
      default:
        return <p className="text-card-p">Select an option</p>;
    }
  };

  return (
<div className="card estilo-card container-fluid">
  <div className="row pl-5">
    <div className="col-12 col-md-4 ">
      <div className="options-column lfix ">
        <ul className="list-group-flush ">
          <li className="list-group-item">
            <button
              className={`option-button  ${
                selectedOption === "Option 1" ? "active botoncito" : "botoncito-inactivo"
              }`}
              onClick={() => handleOptionClick("Option 1")}
            >
              BOOK
            </button>
          </li>
          <li className="list-group-item">
            <button
              className={`option-button ${
                selectedOption === "Option 2" ? "active active botoncito" : "botoncito-inactivo"
              }`}
              onClick={() => handleOptionClick("Option 2")}
            >
              PREP
            </button>
          </li>
          <li className="list-group-item">
            <button
              className={`option-button ${
                selectedOption === "Option 3" ? "active active botoncito" : "botoncito-inactivo"
              }`}
              onClick={() => handleOptionClick("Option 3")}
            >
              ATTEND
            </button>
          </li>
          <li className="list-group-item">
            <button
              className={`option-button ${
                selectedOption === "Option 4" ? "active active botoncito" : "botoncito-inactivo"
              }`}
              onClick={() => handleOptionClick("Option 4")}
            >
              SHOP
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="divider"></div>
    <div className="col-12 col-md-8 text-column justify-content-center text-align-center d-flex">{renderContent()}</div>
  </div>
</div>
  );
};

const VirtualShoot = () => {
  return (
    <div>
      <div>
        <h4 className="h4-virtual">THE VIRTUAL SHOOT</h4>
      </div>
      <div className="card-container">
        <div className="">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default VirtualShoot;
