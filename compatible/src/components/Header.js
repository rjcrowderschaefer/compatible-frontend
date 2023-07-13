import React, { useState } from 'react';

function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img id="nav-img" src="https://i.imgur.com/VuMuUB6.png" width="30" height="30" alt="compatible logo image" class="d-inline-block align-text-top"></img>
                <span id="nav-logo-name">Compatible</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Browse Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Create Offer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Job Search</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Learn More
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">FAQs</a></li>
                            <li><a class="dropdown-item" href="#">Who We Are</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Get In Touch</a></li>
                        </ul>
                    </li>
                    </ul>
                    <ul class="navbar-nav ms-aut nav-auth">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Log In</a>
                    </li>
                    <li class="nav-item">
                        <button><a class="nav-link sign-up" href="#">Sign Up</a></button>
                    </li>
                    </ul>
        
                {/* <li class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </li> */}
            </div>
        </div>
        </nav>
    </div>
    </>
  );
}

export default Header;