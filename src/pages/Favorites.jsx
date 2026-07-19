import useFavoriteStore from '../store/UseFavoriteStore';
import BookCard from "../components/BookCard";

const Favorites = () => {
  const { Favorites } = useFavoriteStore();

  return (
    <div className="min-h-screen bg-base-200 p-6 md:p-12">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black mb-4">Your Favorites</h1>
          <p className="opacity-70">
            {Favorites.length > 0 
              ? `You have ${Favorites.length} books saved.` 
              : "You haven't added any favorites yet."}
          </p>
        </div>

        {Favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {Favorites.map((fav) => (
              <BookCard key={fav.id} book={fav} />
            ))}
          </div>
        ) : (
          <div className="text-center p-20">
            <p className="text-xl opacity-50">Go find some great books to add to your list!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;