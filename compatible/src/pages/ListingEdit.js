import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { listingsLoader } from '../apiCalls';

function ListingEdit(props) {
    const categories = props.categories
    const {id} = useParams();
    const [listing, setListing] = useState(null);
    const navigate = useNavigate();
    
    async function getListing() {
        try {
            let myListing = await fetch(`http://localhost:8000/api/listings/${id}/`);
            // let myListing = await `${listingsLoader}/${id}`
            myListing = await myListing.json()
            setListing(myListing)
            console.log(myListing) 
        } catch(err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getListing();
    }, []);

    const handleChange = (e) => {
        setListing((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    };

    const handleCategoryChange = (e) => {
        setListing((currentState) => ({
            ...currentState,
            category: e.target.value
        }))
    };

    async function handleSubmit(e) {
        try {
            e. preventDefault();
            await fetch (`http://localhost:8000/api/listings/${id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(listing)
            });
            return navigate(`/listings/${id}`)
        } catch(err) {
            console.log(err)
        }
    }

    const Categories = () => {
        let categoryList = [
            // <option name="category" key="-1" value="0">-- select an option --</option>
        ]
        for (let i=0; i < categories.length; i++) {
            let category = categories[i]
            categoryList.push(
                <option key={i} name="category" value={category.id}>{category.category_name}</option>
            )
        }
        return categoryList;
    }

    function loaded() {
        return (
            <>
                <div className="add-new-listing">
                    <p className="page-intro">Use the form below to create a new listing to connect with our community to learn or share your skills!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="Listing name">Listing Name</label>
                                    <input type="text" className="form-control" name="listing_name" onChange={handleChange} value={listing.listing_name} />
                                </div>
                                <div className="col">
                                <label htmlFor="Listing description">Description</label>
                                    <textarea className="form-control" name="listing_description" rows="3" onChange={handleChange} value={listing.listing_description} />
                                </div>
                                <div className="col">
                                    <label htmlFor="Listing img1">Listing image 1</label>
                                    <input type="text" className="form-control" name="listing_img1" onChange={handleChange} value={listing.listing_img1} />
                                </div>
                                <div className="col">
                                    <label htmlFor="Listing img2">Listing image 2</label>
                                    <input type="text" className="form-control" name="listing_img2" onChange={handleChange} value={listing.listing_img2} />
                                </div>
                                <div className="col">
                                    <label htmlFor="Listing img3">Listing image 3</label>
                                    <input type="text" className="form-control" name="listing_img3" onChange={handleChange} value={listing.listing_img3} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="Listing type">Listing Type</label>
                                    <select className="form-control" name="listing_type" onChange={handleChange} placeholder={listing.listing_type}>
                                        {/* <option hidden> -- select an option -- </option> */}
                                        <option value="Skill">Skill</option>
                                        <option value="Need">Need</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="Listing comp type">Type of Compensation</label>
                                    <select className="form-control" name="listing_comp_type" onChange={handleChange} value={listing.listing_comp_type}>
                                        {/* <option hidden> -- select an option -- </option> */}
                                        <option value="Skill Swap/Trade">Skill Swap/Trade</option>
                                        <option value="Paid/Fee-based">Paid/Fee-based</option>
                                        <option value="Free/No charge">Free/No charge</option>
                                        <option value="I\'m Flexible!">I'm Flexible!</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="Listing status">Status</label>
                                    <select className="form-control" name="listing_status" onChange={handleChange} value={listing.listing_status}>
                                        {/* <option hidden> -- select an option -- </option> */}
                                        <option value="Active">Active</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Withdrawn">Withdrawn</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                <div className="col">
                                {/* <p>{errorMessages.category ? errorMessages.category : null}</p> */}
                                <label htmlFor="Category">Category</label>
                                <select className="form-control" name="category" value={listing.category} onChange={handleCategoryChange}>
                                
                                {<Categories />}
                                </select>
                                </div> 
                            </div>
                        </div><br />
                        <button type="submit" className="button ">Edit listing</button>
                    </form>
                </div>
            
            </>
        )
    }

        return (
            <>
            {listing ? loaded() : <h2>Loading...</h2>}
            </>
        )

}

export default ListingEdit