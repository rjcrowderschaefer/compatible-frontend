import { useEffect, useState } from 'react';
import { listingsLoader } from '../apiCalls';

function BrowseListings() {
    const [listingInfo, setListingInfo] = useState([])

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const data = await listingsLoader()
                setListingInfo(data)
                console.log(data)
            } catch(err) {
                console.log(err);
            }
        }
        fetchListings();
    }, []);


    return (
        <>
        <h1>Browse Listings Page</h1>
        <h2>Add link to create new listing</h2>
        <div className="listings">
            {
                listingInfo && listingInfo.map(listing => {
                    return (
                        <div className="listing-card">
                        <img src={listing.listing_img1} alt="listing image"></img><br />
                        {listing.listing_name}<br />
                        {listing.listing_type}<br />
                        {listing.listing_status}<br />
                        {listing.category}<br />
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default BrowseListings;