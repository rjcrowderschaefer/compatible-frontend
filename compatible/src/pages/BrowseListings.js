import { useEffect, useState } from 'react';
import { listingsLoader } from '../apiCalls';

function BrowseListings(props) {
    const categories = props.categories
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
                listingInfo && listingInfo.map((listing, idx) => {
                    return (
                        <div className="listing-card" key={idx}>
                        <img src={listing.listing_img1} alt="listing image"></img><br />
                        {listing.listing_name}<br />
                        {listing.listing_type}<br />
                        {listing.listing_status}<br />
                        {listing.category_name}<br />
                        <h4><a href={`/listings/${listing.id}`}>View details</a></h4>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default BrowseListings;