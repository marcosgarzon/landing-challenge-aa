import React, { useState } from 'react';

const VirtualShootMobile = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`container-fluid vs-container ${isCollapsed ? '' : 'expanded'}`}>
      <div className="vflex">
        <h4 className="vsh4">THE VIRTUAL SHOOT</h4>
      </div>
      <div>
      <div className='container cacord'>
        <button className="acordeon1" onClick={handleToggleCollapse}>
          BOOK
        </button>
        {!isCollapsed && (
          <div className="acordeon-c1">
            
            <p>Plan your shoot in just minutes! Build your own photo or video shoot or select a pre-priced pack.</p>
          </div>
        )}
      </div>
      <div className='container cacord'>
        <button className="acordeon2" onClick={handleToggleCollapse}>
          PREP
        </button>
        {!isCollapsed && (
          <div className="acordeon-c2">
            
            <p>Plan your shoot in just minutes! Build your own photo or video shoot or select a pre-priced pack.</p>
          </div>
        )}
      </div>
      <div className='container cacord'>
        <button className="acordeon3" onClick={handleToggleCollapse}>
          ATTEND
        </button>
        {!isCollapsed && (
          <div className="acordeon-c3">
            
            <p>Plan your shoot in just minutes! Build your own photo or video shoot or select a pre-priced pack.</p>
          </div>
        )}
      </div>
      <div className='container cacord'>
        <button className="acordeon4" onClick={handleToggleCollapse}>
          SHOP
        </button>
        {!isCollapsed && (
          <div className="acordeon-c4">
            
            <p>Plan your shoot in just minutes! Build your own photo or video shoot or select a pre-priced pack.</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default VirtualShootMobile;
