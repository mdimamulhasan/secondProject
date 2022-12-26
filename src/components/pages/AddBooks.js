import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from "../../features/booksSlice.js";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const numberOfBooks = useSelector((state) => state.bookRducer.books.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, title, author };
    dispatch(addBook(book));
    navigate("/show-books");
  }

  return (
    <div>
      <h2>Add books</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Add books</button>
      </form>
    </div>
  )
}

export default AddBooks