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
                <div className="category-details-card" key={id}>
                    <h1 className="categories-header">{listing.listing_name}</h1>
                    <img className="category-detail-img" src={listing.listing_img1}></img>
                    <h3 className="category-detail-desc">{listing.listing_description}</h3>
                    <img className="category-detail-img" src={listing.listing_img2}></img>
                    <img className="category-detail-img" src={listing.listing_img3}></img>
                    <h4 className="listing-detail detail-page">Request type: {listing.listing_type}</h4>
                    <h4 className="listing-detail detail-page">Compensation: {listing.listing_comp_type}</h4>
                    <h4 className="listing-detail detail-page">Status: {listing.listing_status}</h4>
                    <h4 className="listing-detail detail-page">Created: {listing.created_at}</h4>
                    <h4 className="listing-detail detail-page">Category: <Categories /></h4>

                    <div className="modify-listing">
                        <Link to={`/listings/${id}/edit`}>
                            <button className="edit-listing">Edit</button>
                        </Link>
                        <Link to={`/listings/${id}/delete`}>
                            <button className="delete-listing">Delete</button>
                        </Link>
                    </div>

                    {/* <hr />
                    List of related listings by category (carousel linked to?)<br />
                    Add links to edit, delete listing
                    Add link to create new listing (sub nav that only displays when on browse listings, listing detail pages?) */}
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