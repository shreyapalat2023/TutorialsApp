import React, { useContext, useState } from 'react';
import { BooksContext } from './BooksContext';

const AddBookCompo = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const { books, setBooks } = useContext(BooksContext);

    const handleAddBook = () => {
        const newBook = {
            id: books.length + 1,
            title,
            author
        };
        setBooks([...books, newBook])
    }
    return (
        <>
            <div className='d-flex justify-content-center'>
                <h3>Add a New Book</h3>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} className='mx-2' />

                <input type='text' placeholder='Author' value={author} onChange={(e) =>
                    setAuthor(e.target.value)} />

                <button className="btn btn-success mx-2" onClick={handleAddBook}>Add Book</button>
            </div>

        </>
    );
};

export default AddBookCompo;