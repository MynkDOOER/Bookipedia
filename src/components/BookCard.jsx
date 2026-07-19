import { Link } from "react-router-dom";
import useFavoriteStore from '../store/UseFavoriteStore';

const BookCard = ({ book }) => {
  const { Favorites, addFavorite, removeFavorite } = useFavoriteStore();
  const isFav = Favorites.some((fav) => fav.id === book.id);

  return (
    // 'card' class handles the border, background, and shadow
    // 'w-64' gives it a fixed width that works well on mobile and desktop
    <div className="card w-64 bg-base-100 border border-gray-700 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-200">
      <figure className="px-4 pt-4 h-40">
        <img 
          src={book.volumeInfo?.imageLinks?.thumbnail} 
          alt="Book Thumbnail" 
          className="rounded-xl h-full object-cover" 
        />
      </figure>
      
      <div className="card-body items-center text-center p-4">
        {/* line-clamp-2 keeps titles from breaking the card height */}
        <h2 className="card-title text-sm line-clamp-2">{book.volumeInfo?.title}</h2>
        
        {/* line-clamp-1 keeps authors on one line */}
        <p className="text-xs text-gray-400 line-clamp-1">
          {book.volumeInfo?.authors?.join(', ') || "Unknown Author"}
        </p>

        <div className="card-actions mt-2 w-full">
          <button 
            onClick={() => (isFav ? removeFavorite(book.id) : addFavorite(book))}
            className="btn btn-outline btn-sm w-full"
          >
            {isFav ? "Remove from Favorites ❌" : "Add to Favorites ✅"}
          </button>
          
          <Link 
            className="text-blue-500 hover:text-blue-300 text-sm mt-2 block" 
            to={`/books/${book.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;