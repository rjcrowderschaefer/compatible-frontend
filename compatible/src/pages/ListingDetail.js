import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { listingsDetailLoader } from '../apiCalls';

function ListingDetails(props) {
    const categories = props.categories
    const { id } = useParams();
    const [listing, setListing] = useState(null)
    const fetchListingDetails = async () => {
        try {
            let data = await listingsDetailLoader(id)
            setListing(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchListingDetails();
    }, [])

    const Categories = () => {
        if (listing) {
            for (let i = 0; i < categories.length; i++) {
                if (categories[i].id === listing.category) {
                    return categories[i].category_name
                }
            }
        }
        return null;
    }
    console.log(Categories())




    function loaded() {
        return (
            <>
                <div key={id}>
                    <h2>{listing.listing_name}</h2>
                    <h3>{listing.listing_description}</h3>
                    <img src={listing.listing_img1}></img>
                    <img src={listing.listing_img2}></img>
                    <img src={listing.listing_img3}></img>
                    <h4>{listing.listing_type}</h4>
                    <h4>{listing.listing_comp_type}</h4>
                    <h4>{listing.listing_status}</h4>
                    <h4>{listing.created_at}</h4>
                    <h4>Listing category: <Categories /></h4>

                    <div className="modify-trip">
                        <Link to={`/listings/${id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to={`/listings/${id}/delete`}>
                            <button>Delete</button>
                        </Link>
                    </div>

                    <hr />
                    List of related listings by category (carousel linked to?)<br />
                    Add links to edit, delete listing
                    Add link to create new listing (sub nav that only displays when on browse listings, listing detail pages?)
                </div>
            </>
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            {listing ? loaded() : loading()}
        </>
    )
};

export default ListingDetails;