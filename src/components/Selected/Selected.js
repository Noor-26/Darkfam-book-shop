import React from 'react';
import './Selected.css'
const Selected = ({book}) => {
   const {img,name} = book
   return (
       <div className="selected-items my-2">
            <img src={img} className="selected-img me-auto" alt="" />
            <h6 className="text-start ps-3 me-auto">{name}</h6>
        </div> 
    );
};

export default Selected;