import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [randombook, setRandomBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchRandomBook = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/books/book/random"
        );
        const result = await response.json();
        setRandomBook(result.data);
      } catch (err) {
        console.log("Error while Fetching data...", err);
      } finally {
        setLoading(false);
      }
    };
    FetchRandomBook();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to Bookipedia</h1>
        <p className="text-lg text-gray-500">Discover your next great read.</p>
      </div>

      {loading ? (
        <span className="loading loading-spinner loading-lg text-primary"></span>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold underline decoration-primary underline-offset-8">
            Book of the Day
          </h2>
          
          <BookCard book={randombook} />
          
          <Link to="/books" className="btn btn-primary px-8 mt-4">
            View All Books
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;