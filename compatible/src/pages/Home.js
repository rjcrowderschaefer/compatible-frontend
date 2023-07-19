import { useState, useEffect } from 'react'
import { featuredListsLoader } from "../apiCalls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

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
                <div className="home-search-wrapper">
                    <h1 id="h1-home">Gain knowledge by sharing knowledge</h1>
                    <div className="search-box">
                        <div className="search-btn">
                        <div className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /></div>
                        </div>
                        <input type="text" className="input-search" placeholder="I want to learn..." />
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

