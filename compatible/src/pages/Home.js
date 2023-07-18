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
            <h1 className="home-hero">Gain knowledge by sharing knowledge</h1>
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

