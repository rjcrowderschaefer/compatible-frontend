import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listingsPostLoader } from '../apiCalls';

function CreateListing(props) {
    const categories = props.categories
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState({})
    const [listingForm, setListingForm] = useState({
        listing_name: "",
        listing_description: "",
        listing_img1: "",
        listing_img2: "",
        listing_img3: "",
        listing_type: "",
        listing_comp_type: "",
        listing_status: "",
        category: 0,
    })

    const handleChange = (e) => {
        setListingForm({ ...listingForm, [e.target.name]: e.target.value});
    };

    const handleCategoryChange = (e) => {
        setListingForm({ ...listingForm, category: e.target.value})
    };

    const validateSelect = () => {
        if (listingForm.category != 0) {
            console.log("truecalled")
            return true
        } else {
            setErrorMessages({...errorMessages, category: 'Please make a valid selection'});
            console.log("falsecalled")
            return false;
        }
     }

    async function handleSubmit(e) {
        e.preventDefault()
        if (validateSelect()) {
            try {
                await listingsPostLoader(listingForm)
                e.target.reset();
                navigate('/listings');
            } catch(err) {
                console.log(err)
            }
        }
    }

    const Categories = () => {
        let categoryList = [
            <option name="category" key="-1" value="0">-- select an option --</option>
        ]
        for (let i=0; i < categories.length; i++) {
            let category = categories[i]
            categoryList.push(
                <option key={i} name="category" value={category.id}>{category.category_name}</option>
            )
        }
        return categoryList;
    }


    
    return (
        <>
            <div className="add-new-listing">
                <h1 className="categories-header">Create a new listing</h1>
                <p className="listings-form-header">Use the form below to create a new listing to connect with our community to learn or share your skills!</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        
                                <label className="listing-edit-form-label" htmlFor="Listing name">Listing Name</label>
                                <input type="text" className="form-control" name="listing_name" onChange={handleChange} placeholder="What do you want to list?" />
                            
                            <label className="listing-edit-form-label" htmlFor="Listing description">Description</label>
                                <textarea className="form-control" name="listing_description" rows="3" onChange={handleChange} placeholder="Describe the listing" />
                           
                                <label className="listing-edit-form-label" htmlFor="Listing img1">Listing image 1</label>
                                <input type="text" className="form-control" name="listing_img1" onChange={handleChange} placeholder="Upload listing image" />
                            
                                <label className="listing-edit-form-label" htmlFor="Listing img2">Listing image 2</label>
                                <input type="text" className="form-control" name="listing_img2" onChange={handleChange} placeholder="Upload listing image" />
                            
                                <label className="listing-edit-form-label" htmlFor="Listing img3">Listing image 3</label>
                                <input type="text" className="form-control" name="listing_img3" onChange={handleChange} placeholder="Upload listing image" />
                            
                                <label className="listing-edit-form-label" htmlFor="Listing type">Listing Type</label>
                                <select className="form-control" name="listing_type" onChange={handleChange} placeholder="Pick a type of listing">
                                    <option hidden> -- select an option -- </option>
                                    <option value="Skill">Skill</option>
                                    <option value="Need">Need</option>
                                </select>
                            
                                <label className="listing-edit-form-label" htmlFor="Listing comp type">Type of Compensation</label>
                                <select className="form-control" name="listing_comp_type" onChange={handleChange} placeholder="What do you want in return?">
                                    <option hidden> -- select an option -- </option>
                                    <option value="Skill Swap/Trade">Skill Swap/Trade</option>
                                    <option value="Paid/Fee-based">Paid/Fee-based</option>
                                    <option value="Free/No charge">Free/No charge</option>
                                    <option value="I\'m Flexible!">I'm Flexible!</option>
                                </select>
                            
                                <label className="listing-edit-form-label" htmlFor="Listing status">Status</label>
                                <select className="form-control" name="listing_status" onChange={handleChange} placeholder="Satus of listing">
                                    <option hidden> -- select an option -- </option>
                                    <option value="Active">Active</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Withdrawn">Withdrawn</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            
                            <p>{errorMessages.category ? errorMessages.category : null}</p>
                            <label className="listing-edit-form-label" htmlFor="Category">Category</label>
                            <select className="form-control" name="category" value={listingForm.category} onChange={handleCategoryChange} placeholder="Select a category">
                            
                            {<Categories />}
                            </select>
                        
                    </div><br />
                    <button type="submit" className="button submit-listing">Create listing</button>
                </form>
            </div>
        
        </>
    )

}

export default CreateListing;