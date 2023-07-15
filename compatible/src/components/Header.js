import React, { useState } from 'react';

function Header(props) {
    const categories = props.categories
    console.log(categories)
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

    const CategoriesList = () => {
        let categoryList = []
        for (let i=0; i < categories.length; i++) {
            let category = categories[i]
            let href = "/categories/" + category.id
            categoryList.push(
                <li key={i}><a className="dropdown-item" href={href}>{category.category_name}</a></li>
            )
        }
        return categoryList;
    }

  return (
    <>
    <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img id="nav-img" src="https://i.imgur.com/VuMuUB6.png" width="30" height="30" alt="compatible logo image" className="d-inline-block align-text-top"></img>
                <span id="nav-logo-name">Compatible</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/categories">All Categories</a></li>
                            <hr className="dropdown-divider" />
                                {<CategoriesList />}
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Listings
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/listings">All Listings</a></li>
                            <hr className="dropdown-divider" />
                            <li><a className="dropdown-item" href="/listings/new">Create Listing</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/job-search">Job Search</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Learn More
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/faqs">FAQs</a></li>
                            <li><a className="dropdown-item" href="/about">Who We Are</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/contact">Get In Touch</a></li>
                        </ul>
                    </li>
                    </ul>
                    <ul className="navbar-nav ms-aut nav-auth">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log In</a>
                    </li>
                    <li className="nav-item">
                        <button><a className="nav-link sign-up" href="#">Sign Up</a></button>
                    </li>
                    </ul>
        
                {/* <li className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </li> */}
            </div>
        </div>
        </nav>
    </div>
    </>
  );
}

export default Header;