import  { useState,useEffect } from 'react';
import Books from '../Books/Books';
import './Shop.css'


const Shop = () => {
    const [books, setbooks] = useState([])
    const showSelectBook = id=>{
        console.log(id)
      }
    useEffect(() => {
       fetch('books.json')
       .then(res => res.json())
       .then(data => setbooks(data))
      }, [books])
    return (
        <div className="shop-container">
            <div >
                <h1>book container</h1>
                <div className="book-container row row-cols-1 row-cols-md-3 g-4 container">
            {
            books.map(book => <Books data={book} key={book.id} showSelectBook={showSelectBook}></Books>)
            }
            </div>
            </div>
            <div className="select-container">
                <h1>select books</h1>
            </div>
        </div>
    );
};

export default Shop;