import  { useState,useEffect } from 'react';
import './Shop.css';

const Shop = () => {
    const [books, setbooks] = useState([])
    useEffect(() => {
       fetch('books.json')
       .then(res => res.json())
       .then(data => setbooks(data))
      }, [books])
    return (
        <div className="shop-container">
            <div className="book-container ">
                <h1>book container</h1>
            </div>
            <div className="select-container">
                <h1>select books</h1>
            </div>
        </div>
    );
};

export default Shop;