import React, {useState, useEffect } from 'react';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BrowseCategories from "./pages/BrowseCategories";
import JobSearch from "./pages/JobSearch.js";
import About from "./pages/About.js";
import FAQs from "./pages/FAQs.js";
import Contact from "./pages/Contact.js";
import ContactConfirmation from "./pages/ContactConfirmation";
import CategoryDetail from "./pages/CategoryDetail";
import BrowseListings from "./pages/BrowseListings";
import ListingDetail from  "./pages/ListingDetail";
import ListingNew from "./pages/ListingNew";
import ListingEdit from "./pages/ListingEdit";
// import ListingDelete from "./pages/ListingDelete";
import { Route, Routes } from 'react-router-dom';
import { categoriesLoader } from './apiCalls';

function App() {
  
  const [categories, setCategories] = useState([]) 

  async function getCategories() {
    try {
        let categoryList = await categoriesLoader();
        setCategories(categoryList)
        console.log(categoryList)
    } catch(err) {
        console.log(err)
    }
}

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <>
      <main>
        <div className="content-container">
          <Header categories={categories}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories'>
              <Route path='' element={<BrowseCategories />} />
              <Route path=':id' element={<CategoryDetail />} />
            </Route>
            <Route path='/listings'>
              <Route path='' element={<BrowseListings categories={categories} />} />
              <Route path='new' element={<ListingNew categories={categories} />} />
              <Route path=':id'> 
                <Route path='' element={<ListingDetail categories={categories}/>} />
                <Route path='edit' element={<ListingEdit />} />
                {/* <Route path="delete" element={<ListingDelete />} /> */}
              </Route>
            </Route>
            <Route path='/job-search' element={<JobSearch />} />
            <Route path='/about' element={<About />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/contact'>
               <Route path='' element={<Contact />} />
               <Route path='thank-you' element={<ContactConfirmation />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;