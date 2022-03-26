import React from 'react';
import { BsFillCartFill} from 'react-icons/bs'
import './Books.css'

const Books = ({data,showSelectBook}) => {
  
  const {img,name,price} = data
    return (
        <div className="col ">
    <div className="card h-100">
     <img src={img} className="card-img-top img-fluid" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">price : {price}</p>
        <button onClick={() => showSelectBook(data)}>Select it <BsFillCartFill/> </button>
      </div>
    </div>
        </div>
    );
};

export default Books;
