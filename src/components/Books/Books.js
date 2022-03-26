import React from 'react';

const Books = props => {

  const {img,name,price} = props.data
    return (
        <div className="col">
    <div className="card h-100">
     <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
      </div>
    </div>
        </div>
    );
};

export default Books;
