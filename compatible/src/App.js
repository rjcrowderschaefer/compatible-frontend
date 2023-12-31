import React, { useState, useEffect } from 'react';
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
import ListingDetail from "./pages/ListingDetail";
import ListingNew from "./pages/ListingNew";
import ListingEdit from "./pages/ListingEdit";
import ListingDelete from "./pages/ListingDelete";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Logout from './pages/auth/Logout';
import { Route, Routes } from 'react-router-dom';
import { categoriesLoader, listingsLoader } from './apiCalls';

function App() {

  const [categories, setCategories] = useState([])
  const [listings, setListings] = useState([])
  const [user, setUser] = useState(null)

  async function getCategories() {
    try {
      let categoryList = await categoriesLoader();
      setCategories(categoryList)
      console.log(categoryList)
    } catch (err) {
      console.log(err)
    }
  }

  async function getListings() {
    try {
      let listingsList = await listingsLoader();
      setListings(listingsList)
      console.log(listingsList)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCategories();
    getListings();
  }, []);

  return (
    <>
      <main id="page-container">
        <div id="content-wrap">
          <Header categories={categories} user={user} />
          <Routes>
            <Route path='/' element={<Home listings={listings}/>} />
            <Route path='/categories'>
              <Route path='' element={<BrowseCategories />} />
              <Route path=':id' element={<CategoryDetail />} />
            </Route>
            <Route path='/listings' >
              <Route path='' element={<BrowseListings categories={categories} />} />
              <Route path='new' element={<ListingNew categories={categories} />} />
              <Route path=':id'>
                <Route path='' element={<ListingDetail categories={categories} />} />
                <Route path='edit' element={<ListingEdit categories={categories} />} />
                <Route path="delete" element={<ListingDelete categories={categories} />} />
              </Route>
            </Route>
            <Route path='/job-search' element={<JobSearch />} />
            <Route path='/about' element={<About />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/contact'>
              <Route path='' element={<Contact />} />
              <Route path='thank-you' element={<ContactConfirmation />} />
            </Route>
            <Route path='/login' element={<Login user={user} setUser={setUser} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;