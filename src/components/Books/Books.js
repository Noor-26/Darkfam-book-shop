import React from 'react';
import { BsFillCartFill} from 'react-icons/bs'
import './Books.css'

const Books = ({data,showSelectBook}) => {
  
  const {img,name,price} = data
    return (
        <div className="col ">
    <div className="card h-100">
      <div className="container">

     <img src={img} className="card-img-top book-img  img-fluid" alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">price : {price}</p>
        <button className="card-btn" onClick={() => showSelectBook(data)}>Select it <BsFillCartFill/> </button>
      </div>
    </div>
        </div>
    );
};

export default Books;
