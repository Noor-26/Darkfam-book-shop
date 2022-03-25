import  { useState,useEffect } from 'react';
import Books from '../Books/Books';
import './Shop.css'


const Shop = () => {
    const [books, setbooks] = useState([])
    useEffect(() => {
       fetch('books.json')
       .then(res => res.json())
       .then(data => setbooks(data))
      }, [books])
    return (
        <div className="shop-container">
            <div className="book-container row row-cols-1 row-cols-md-3 g-4">
                <h1>book container</h1>
            {
            books.map(book => <Books data={book}></Books>)
            }
            </div>
            <div className="select-container">
                <h1>select books</h1>
            </div>
        </div>
    );
};

export default Shop;