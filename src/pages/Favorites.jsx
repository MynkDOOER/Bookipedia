import useFavoriteStore from '../store/UseFavoriteStore'
import  BookCard from "../components/BookCard";

const Favorites = () => {

    const {Favorites} = useFavoriteStore();

    return (
        <>
        <h1>Favorites Booklists</h1>
        {Favorites.map((fav)=>(
                <BookCard book={fav}/>
            ))}
        </>
    )
}

export default Favorites