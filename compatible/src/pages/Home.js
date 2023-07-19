import { useState, useEffect } from 'react'
import { featuredListsLoader } from "../apiCalls";

function Home() {
    const [featuredList, setFeaturedList] = useState([])

    useEffect(() => {
        const fetchFeaturedLists = async () => {
            try {
                const data = await featuredListsLoader()
                setFeaturedList(data)
                console.log(data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchFeaturedLists();
    }, []);


    return (
        <>
            <div className="home-hero">
                <h1 id="h1-home">Gain knowledge by sharing knowledge</h1>
                <div className="home-search-wrapper">
                    <div className="search-box">
                        <div className="search-btn"></div>
                        <input type="text" class="input_search" placeholder="I want to learn..." />
                    </div>
                </div>
            </div>
            <p className="home-page-block">Content block</p>
            <div className="featured-listings">
                {
                    featuredList && featuredList.map((list, idx) => {
                        return (
                            <div className="category-card" key={idx}>
                                {list.name}<br />
                                {list.listings}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;

