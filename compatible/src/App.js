import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BrowseCategories from "./pages/BrowseCategories"
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <main>
        <div className="content-container">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/browser-categories' element={<BrowseCategories />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;