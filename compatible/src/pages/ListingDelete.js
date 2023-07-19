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
                <h2 className="page-title">Confirm listing deletion</h2>
                <p className="page-intro">Additional page info if necessary.</p>
                <Link to='/listings'>
                    <button className="delete btn btn-danger" onClick={deleteListing}>Yes, delete</button>
                </Link>
                <Link to={`/listings/${id}`}>
                    <button className="cancel btn btn-secondary">No, cancel</button>
                </Link>
            </div>
        </>
    )

}

export default ListingDelete