import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { featuredListsLoader } from "../apiCalls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronRight, faCommentDots, faHandshake } from '@fortawesome/free-solid-svg-icons';

function Home(props) {
    const listings = props.listings
    // const { id } = useParams();
    // const [featuredListing, setFeaturedListing] = useState([])

    // useEffect(() => {
    //     const fetchFeaturedListing = async () => {
    //         try {
    //             const data = await featuredListsLoader()
    //             setFeaturedListing(data)
    //             console.log(data)
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchFeaturedListing();
    // }, []);



    // const Listings = () => {
    //     let listingsList = []
    //     for (let i = 0; i < listings.length; i++) {
    //         listingsList = listings[i]
    //         return (
    //         <div className="featured-listing" key={i}>
    //             <h2>{listings.listing_name}</h2>
    //         </div>
    //         )
    //     }
    // }


    return (
        <>
            <div className="home-hero">
                <div className="home-search-wrapper">
                    <h1 id="h1-home">Gain knowledge by sharing knowledge</h1>
                    <div className="search-box">
                        <div className="search-btn">
                            <div className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /></div>
                        </div>
                        <input type="text" className="input-search" placeholder="I want to learn..." />
                    </div>
                </div>
            </div>
            <div className="home-page-content-block">
                <input id="explore-categories-btn" type="button" value="Explore Categories" />
                <input id="category-btn" type="button" value="Explore Cooking" />
                <input id="category-btn" type="button" value="Explore Languages" />
                <input id="category-btn" type="button" value="Explore Outdoor/Sports " />
            </div>
            <div className="featured-listings">
                {/* {
                    listings && listings.map((list, idx) => {
                        return (
                            <div className="category-card" key={idx}>
                                {list.name}<br />
                                {list.listings}
                            </div>
                        )
                    })
                } */}
                <div className="featured-wrapper">
                    <div className="featured-listing-card">
                        <img className="featured-listing-img" src="https://www.miyaradventures.com/wp-content/uploads/2015/07/Feature_Image_GirlClimbing.jpg" alt image="person rock climbing" />
                        <div className="featured-listing-details">
                            <h2 className="featured-card-title"><a href="/listings/15">Rock Climbing Instructor</a></h2>
                            <h3 className="featured-card-category"><FontAwesomeIcon icon={faChevronRight} size="2xs" /> Outdoor/Sports</h3>
                            <h3 className="featured-card-comp"><FontAwesomeIcon icon={faChevronRight} size="2xs" /> Paid/Fee-based</h3>
                        </div>
                    </div>
                    <div className="featured-listing-card">
                        <img className="featured-listing-img" src="https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-2-min.png" alt image="person coding" />
                        <div className="featured-listing-details">
                            <h2 className="featured-card-title"><a href="/listings/19">Need English in exchange for Javascript and React teaching</a></h2>
                            <h3 className="featured-card-category"><FontAwesomeIcon icon={faChevronRight} size="2xs" /> Languages</h3>
                            <h3 className="featured-card-comp"><FontAwesomeIcon icon={faChevronRight} size="2xs" /> Skill Swap/Trade</h3>
                        </div>
                    </div>
                    <div className="featured-listing-card">
                        <img className="featured-listing-img" src="https://images.ctfassets.net/pdf29us7flmy/7F5XUfHuv7dAW6joysWHxE/c5623a1d81518a813ad53b5020282bdb/GettyImages-583665183_optimized__1_.jpg?w=720&q=100&fm=jpg" alt image="person rock climbing" />
                        <div className="featured-listing-details">
                            <h2 className="featured-card-title"><a href="/listings/12">Versatile kitchen guru offers services</a></h2>
                            <h3 className="featured-card-category"><FontAwesomeIcon icon={faChevronRight} size="2xs" /> Cooking</h3>
                            <h3 className="featured-card-comp"><FontAwesomeIcon icon={faChevronRight} size="2xs" /> Free/No Charge</h3>
                        </div>
                    </div>
                </div>
                <div className="ready-wrapper">
                    <span className="ready-title">How it works</span>
                    <div className="instructions">
                        <div className="instructions-icon">
                        <FontAwesomeIcon icon={faCommentDots} size="lg" />
                        
                        <span className="instruction-step">
                        Post a listing for the skill you want to learn or share
                        </span>
                        </div>
                        <div className="instructions-icon"><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                        <span className="instruction-step">
                        Search for a listing that aligns with your needs
                        </span>
                        </div>
                        <div className="instructions-icon"><FontAwesomeIcon icon={faHandshake} size="lg" />
                        <span className="instruction-step">
                        Connect with your match to swap knowledge
                        </span>
                        </div>
                    </div>
                    <span className="get-started">Ready to get started?
                    </span>
                    <img src="https://i.imgur.com/Zea1zAI.png" alt="hand holding phone illustration" />

                </div>
            </div>
        </>
    )
}

export default Home;

