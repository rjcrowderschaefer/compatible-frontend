import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { categoriesDetailLoader } from '../apiCalls';

function CategoryDetails() {

    const {id} = useParams();
    const [category, setCategory] = useState(null)
    const fetchCategoryDetails = async () => {
        try {
            let data = await categoriesDetailLoader(id)
            // data = await data.json();
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
                <div key={id}>
                    <h2>{category.category_name}</h2>
                    <h3>{category.category_description}</h3>
                    <img src={category.category_img1}></img>
                    <img src={category.category_img2}></img>
                    <img src={category.category_img3}></img>
                    <h4>Active listings: {category.active_listing_total}</h4>
                    <hr />
                    List of active listings (linked to)<br />
                    Add new listing link to listing create form
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