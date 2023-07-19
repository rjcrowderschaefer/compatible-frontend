import { useParams, Link } from 'react-router-dom';
import { listingsDeleteLoader } from '../apiCalls';

function ListingDelete() {
    const {id} = useParams();

    async function deleteListing() {
        try {
            await listingsDeleteLoader(id)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="delete-trip-conf">
                <h1 className="categories-header">Confirm listing deletion</h1>
                <p className="listings-form-header">Are you sure you want to delete this listing?</p>
                <div className="modify-listing">
                <Link to='/listings'>
                    <button className="submit-listing" onClick={deleteListing}>Yes, delete</button>
                </Link>
                <Link to={`/listings/${id}`}>
                    <button className="edit-listing">No, cancel</button>
                </Link>
                </div>
            </div>
        </>
    )

}

export default ListingDelete