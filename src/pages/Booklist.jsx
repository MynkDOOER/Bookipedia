import { useEffect, useState } from "react"
import  BookCard from "../components/BookCard";
import logo from '../assets/book.png'

const Booklists = () => {

  const[books, setBooks] =  useState([]);
  const[loading, setLoading] = useState(true);
  const[searchTerm, setSearchTerm] = useState('');  

    useEffect(()=>{
        const fetchBookList = async() =>{
            try{
                const response = await fetch(`https://api.freeapi.app/api/v1/public/books?page=1&limit=20&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=${searchTerm}`);
            const result = await response.json();
            console.log(result.data.data);
            setBooks(result.data.data);
            } catch(err){
                console.log("Error Loading Books..", err);
            } finally{
                setLoading(false);
            }
        }
        fetchBookList();
    }, [searchTerm])
    
    return (

        <>
        <div className="flex gap-2 justify-s">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-24 md:w-auto"
        />
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={logo}
              />
            </div>
          </div>
        </div>
      </div>
            {
                loading ? "Books are Loading..."  :
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            
            { books.map((book)=>(
                <BookCard  book = {book}/>
            ))}
            
        </div>        
            } 

        </>
    )
}

export default Booklists