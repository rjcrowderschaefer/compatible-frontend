import { useEffect, useState } from 'react';
import { categoriesLoader } from '../apiCalls';

// function BrowseCategories() {
//     const [categories, setCategories] = useState([])
    
//     useEffect(() => {
//         getData()
//     }, [])
    
// const getData = async () => {
//     const categoriesResponse = await fetch('http://localhost:8000/api/categories/')
//     const categoriesData = await categoriesResponse.json()
//     setCategories(categoriesData)

// }

function BrowseCategories() {
    const [categoryInfo, setCategoryInfo] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await categoriesLoader()
                // const data = await categoryResponse.json()
                setCategoryInfo(data)
                console.log(data)
            } catch(err) {
                console.log(err);
            }
        }
        fetchCategories();
    }, []);


    return (
        <>
        <h1>Browse Categories Page</h1>
        <div className="categories">
            {
                categoryInfo && categoryInfo.map(category => {
                    return (
                        <div className="category-card">
                        {category.category_name}<br />
                        {category.category_description}
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default BrowseCategories;