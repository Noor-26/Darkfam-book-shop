import React from 'react';
import './Selected.css'
const Selected = ({book}) => {
   const {img,name} = book
   return (
       <div className="selected-items">
            <img src={img} className="selected-img" alt="" />
            <h6 className="text-start ps-3">{name}</h6>
        </div>
    );
};

export default Selected;