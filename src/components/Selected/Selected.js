import React from 'react';

const Selected = ({book}) => {
   const {img,name} = book
    return (
        <div className="selected items">
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Selected;