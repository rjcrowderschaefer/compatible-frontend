import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { listingsLoader } from '../apiCalls';

function ListingDetails() {

    const {id} = useParams();
    const [listing, setListing] = useState(null)
    const fetchListingDetails = async () => {
        try {
            let data = await fetch (`http://localhost:8000/api/listings/${id}/`)
            data = await data.json();
            setListing(data);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchListingDetails();
    }, [])

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
                    <h4>{listing.category}</h4>
                    
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