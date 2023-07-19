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
            } catch (err) {
                console.log(err);
            }
        }
        fetchListings();
    }, []);


    return (
        <>
            <h1 className="categories-header">View all listings</h1>
            <h3 className="category-detail-desc add-new-listing">Don't see what you're looking for? Create a <a href="/listings/new">new listing</a></h3>
            <div className="listings">
                {
                    listingInfo && listingInfo.map((listing, idx) => {
                        return (
                            <div className="listing-card-wrapper" key={idx}>
                                <img className="category-detail-img" src={listing.listing_img1} alt="listing image"></img><br />
                                <div className="listing-card-details">
                                    <span className="listing-name">{listing.listing_name}</span><br />
                                    <span className="listing-detail">Request Type: {listing.listing_type}</span><br />
                                    <span className="listing-detail">Compensation: {listing.listing_comp_type}</span><br />
                                    <span className="listing-detail">Status: {listing.listing_status}</span><br />
                                    {/* {categories.category_name}<br /> */}
                                    <span className="listing-view-more"><a href={`/listings/${listing.id}`}>View details</a></span>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BrowseListings;