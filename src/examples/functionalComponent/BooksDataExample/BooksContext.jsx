import React, {createContext, useState} from 'react';
import BookListCompo from './02BookListCompo';

import AddBookCompo from './03AddBookCompo';

export const BooksContext = createContext();

const BooksContextCompo = () => {
    const [books,setBooks] = useState( [{id : "1", title: "The four Agreement", author: "George Orwell"}, {id: "2", title: "Killing Mocking Bird", author: "Harper lee"}]);
    return (
        <>
                <h1 className='text-center'>Books List</h1>
                {/* {books.id} */}
           <BooksContext.Provider value={{books,setBooks}}>
            <div>
                <BookListCompo/>
                <AddBookCompo/>
            </div>
           </BooksContext.Provider> 
        </>
    );
};

export default BooksContextCompo;