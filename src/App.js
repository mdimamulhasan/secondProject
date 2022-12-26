import React, { Fragment } from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AddBooks from "./components/pages/AddBooks.js";
import ShowBooks from "./components/pages/ShowBooks.js";
import Error from './components/pages/Error';
import EditBooks from './components/pages/EditBooks';


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-books" element={<AddBooks />} />
          <Route path="/show-books" element={<ShowBooks />} />
          <Route path="/edit-books" element={<EditBooks />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;