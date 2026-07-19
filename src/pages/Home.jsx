import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [randombook, setRandomBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchRandomBook = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/books/book/random",
        );
        const result = await response.json();
        console.log(result.data);
        setRandomBook(result.data);
      } catch (err) {
        console.log("Error while Fetching data...", err);
      } finally {
        setLoading(false);
      }
    }
    FetchRandomBook();
  }, []);

  return (
    <>
      <div>WELCOME TO BOOKIPEDIA | Here is Your Book Of the Day</div>

      {loading ? "Book is loading...." : 
      <div>
        <img src={randombook.volumeInfo?.imageLinks?.thumbnail} alt="" />
        <p>{randombook.volumeInfo?.title}</p>
        <p>{randombook.volumeInfo?.authors}</p>
        <Link to={`/books/${randombook.id}`}>View Details</Link>
      </div>
      }

      <Link to='/books'>View All Books</Link>

    </>
  );
};

export default Home;
