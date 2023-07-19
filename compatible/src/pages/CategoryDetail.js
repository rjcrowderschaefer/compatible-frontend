import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { categoriesDetailLoader } from '../apiCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CategoryDetails() {

    const {id} = useParams();
    const [category, setCategory] = useState(null)
    const fetchCategoryDetails = async () => {
        try {
            let data = await categoriesDetailLoader(id)
            setCategory(data);
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCategoryDetails();
    }, [])

    function loaded() {
        return (
            <>
                <div className="category-details-card" key={id}>
                    <h1 className="categories-header">{category.category_name}</h1>
                    <img className="category-detail-img" src={category.category_img1} />
                    <h3 className="category-detail-desc">{category.category_description}</h3>
                    <img className="category-detail-img" src={category.category_img2}></img>
                    <img className="category-detail-img" src={category.category_img3}></img>
                    {/* <h4>Active listings: {category.active_listing_total}</h4> */}
                    {/* List of active listings (linked to)<br />
                    Add new listing link to listing create form */}
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
            {category ? loaded() : loading()}
        </>
    )
};

export default CategoryDetails;