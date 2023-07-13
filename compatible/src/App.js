import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BrowseCategories from "./pages/BrowseCategories"
import JobSearch from "./pages/JobSearch.js"
import About from "./pages/About.js"
import FAQs from "./pages/FAQs.js"
import Contact from "./pages/Contact.js"
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <main>
        <div className="content-container">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/browse-categories' element={<BrowseCategories />} />
            <Route path='/job-search' element={<JobSearch />} />
            <Route path='/about' element={<About />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;