import React from 'react';

const ChooseBook = ({data}) => {
   //  console.log(chooseBook)
      //   console.log(data) 
  const {img,name} = data
      
    
    return (
        <div className="select-items ps-3">
            <img src={img} className="selected-img me-auto" alt="" />
            <h6 className="text-start ps-3">{name}</h6>
        </div> 
    );
};

export default ChooseBook;

