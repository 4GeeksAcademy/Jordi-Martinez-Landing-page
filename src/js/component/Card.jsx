import React from "react";


export const Card = () => {
    return(
        <div classname="card col-2" style={{ width: '18rem' }}>
  <img src="https://picsum.photos/260/155" classname="card-img-top" alt="..."/>
  <div classname="card-body">
    <h5 classname="card-title">Card title</h5>
    <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary btn-lg" type="button">Find out more!</button>
  </div>
</div>
    )
   
}