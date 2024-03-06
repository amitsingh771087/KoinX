import React from 'react'
import './Style.css'

const GetStart = () => {
  return (
    <div className="get-start-container">
    <div className="text-container">
      <h1>Get Started with KoinX <br/> for Free</h1>
      <p className="small-text">
        With our range of features that you can equip for <br/> free, KoinX allows you to be more educated and <br/> aware of tax reports.
      </p>
    </div>
    <div className="image-container">
      <img src={Image} alt="Description" />
    </div>
    <button className="get-started-button">Get Started for Free -&gt;</button>
  </div>
  );
}

export default GetStart