import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';

const BookListCompo = () => {
    const { books } = useContext(BooksContext);
    return (
        <>
            <h2 className='text-center'>Available Books</h2>
            <div className='d-flex justify-content-center'>


                <ol>
                    {books.map(book => (
                        <li key={book.id}> {book.title} by {book.author}</li>
                    ))}
                </ol>
            </div>
        </>
    );
};

export default BookListCompo;