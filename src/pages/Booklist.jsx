import { useEffect, useState } from "react"
import  BookCard from "../components/BookCard";


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
        <div>Here is the Pedia's of All Books : The Bookipedia</div>

        <input type="text" placeholder="Franz kafka" value={searchTerm}
         onChange={(e)=>{setSearchTerm(e.target.value)}}/>

        {
            loading ? "Books are Loading..."  :
            <div style={{display:'flex', justifyContent:'start', gap:'1rem', flexWrap:'wrap', padding:'1rem'}}>
            { books.map((book)=>(
                <BookCard  book = {book}/>
            ))}
        </div>         

        }

        </>
    )
}

export default Booklists