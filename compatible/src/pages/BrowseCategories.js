import { useEffect, useState } from 'react';
import { categoriesLoader } from '../apiCalls';

function BrowseCategories() {
    const [categoryInfo, setCategoryInfo] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await categoriesLoader()
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
                categoryInfo && categoryInfo.map((category, idx) => {
                    return (
                        <div className="category-card" key={idx}>
                        <a href={`/categories/${category.id}`}>{category.category_name}</a><br />
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