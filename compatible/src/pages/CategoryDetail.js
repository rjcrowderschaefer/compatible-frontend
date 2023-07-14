import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { categoriesLoader } from '../apiCalls';

function CategoryDetails() {

    const {id} = useParams();
    const [category, setCategory] = useState(null)
    const fetchCategoryDetails = async () => {
        try {
            let data = await fetch (`http://localhost:8000/api/categories/${id}/`)
            data = await data.json();
            setCategory(data);
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
                    <h4>Active offers: {category.active_offer_total}</h4>
                    <hr />
                    List of active offers (linked to)<br />
                    Add new offer link to offer create form
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