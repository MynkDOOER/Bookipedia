import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Bookdetails = () => {

    const[book, setBook] = useState(null);
    const[loading, setLoading] = useState(true)
    const { id } =  useParams()

    useEffect(()=>{
        const fetchBookDetails = async() => {
            try{
                const response = await fetch(`https://api.freeapi.app/api/v1/public/books/${id}`)
            const result = await response.json();
            console.log(result.data)
            setBook(result.data)
            } catch(err){
                console.log('Error while loading details...', err);
            } finally{
                setLoading(false)
            }
        }
        fetchBookDetails();
    }, [id])

    return (
    <div className="min-h-screen bg-base-200 p-6 md:p-12">
      <div className="container mx-auto bg-base-100 rounded-3xl shadow-2xl p-8 md:p-16 border border-base-300">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={book.volumeInfo?.imageLinks?.thumbnail}
              alt="Book Thumbnail"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover hover:scale-105 transition-transform"
            />
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <h1 className="text-5xl font-black tracking-tight">{book.volumeInfo?.title}</h1>
            
            <div className="badge badge-primary badge-lg p-4 font-bold">
              {book.volumeInfo?.authors?.join(', ') || "Unknown Author"}
            </div>
            
            <div className="divider"></div>
            
            <h3 className="font-bold text-2xl text-primary">About this book</h3>
            <p className="text-lg leading-relaxed opacity-80">
              {book.volumeInfo?.description || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Bookdetails;