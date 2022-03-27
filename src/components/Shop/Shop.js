import  { useState,useEffect } from 'react';
import Books from '../Books/Books';
import ChooseBook from '../ChooseBook/ChooseBook';

import Selected from '../Selected/Selected';
import './Shop.css'


const Shop = () => {
    const [books, setbooks] = useState([])
    const [selectBooks,setSelectBook] = useState([])
    const [chooseBook,setChooseBook] = useState([])

    const showSelectBook = book =>{
        const newBook = [...selectBooks,book]
        setSelectBook(newBook)
    }
    const ranNum = Math.floor(Math.random()*4)
 
    let item = []
    const ChooseItem = id =>{
        if(selectBooks[id]){
           item = selectBooks[id]
        }
        else{
            alert("select 4 books")          
        }
        
        return item; 
    }
  
    const hoiyaJa = () =>{
        setChooseBook(ChooseItem(ranNum))
        return chooseBook
    }
    
    
    useEffect(() => {
       fetch('books.json')
       .then(res => res.json())
       .then(data => setbooks(data))
      }, [books])
    return (
        <div className="shop-container">
            <div >
                <h1 className='my-2'> Famous books for you</h1>
                <div className="book-container row row-cols-1 row-cols-md-3 g-4 container">
            {
            books.map(book => <Books data={book} key={book.id} showSelectBook={showSelectBook}></Books>)
            }
            </div>
            </div>
            <div className="select-container">
                <h1>select books</h1>
                <div className='my-3'>

                {
                    selectBooks.map(selectBook =>  <Selected book={selectBook}></Selected>)
                }
                </div>
              <div>
                  <h5>Select one book for you</h5>

              
                <div className='select-items'>

               <ChooseBook data={chooseBook}></ChooseBook>  
                </div>
              
                 
              </div>
                <div className='buttons'>
                    
               <button className='select-btn my-3' onClick={hoiyaJa} >choose 1 for you</button>
               <button className='select-btn' onClick={()=> setSelectBook([])}>choose again</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;