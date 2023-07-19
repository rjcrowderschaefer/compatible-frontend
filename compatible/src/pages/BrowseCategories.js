import { useEffect, useState } from 'react';
import { categoriesLoader } from '../apiCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function BrowseCategories() {
    const [categoryInfo, setCategoryInfo] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await categoriesLoader()
                setCategoryInfo(data)
                console.log(data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchCategories();
    }, []);


    return (
        <>
            <h1 className="categories-header">Full list of categories</h1>
            <div className="categories">
                {
                    categoryInfo && categoryInfo.map((category, idx) => {
                        return (
                            <div className="category-card" key={idx}>
                                <div className="category-name-header">
                                        <div className="cat-title-icon">
                                        <FontAwesomeIcon icon={faCircleDot} size="2xs" style={{color: "#ee9275",}} /></div>
                                        {category.category_name}</div>
                                        <div className="cat-desc-icon"><FontAwesomeIcon icon={faChevronRight} size="2xs" style={{color: "#1e311d",}} /><FontAwesomeIcon icon={faChevronRight} size="2xs" style={{color: "#1e311d",}} /></div>{category.category_description + " "}
                                <a href={`/categories/${category.id}`}>View category details</a>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BrowseCategories;