import React from 'react'

const ReadyCard = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center ready-card redmob">
      <div className="text-center">
        <span className=" emoji-style">&#x1F64C;</span>
        <h5 className='texto-ready'>Ready to get started?</h5>
        <button className="ready-button">Build a shoot</button>
      </div>
    </div>
  )
}

export default ReadyCard