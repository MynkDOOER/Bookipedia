import { useState } from "react"

const BookCard = ({book}) => {

    const[IsFavorite, setIsFavorite] =  useState(false);

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
                 textAlign:'center',border:'2px solid black',borderRadius:'1rem', width:'15vw', height:'300', 
    }}>
        <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="Book Thumbnail" style={{objectFit:'cover', boxShadow:'10px 10px lightgray'}} />
        <p><span style={{fontWeight:'bolder'}}>Title:</span>{book.volumeInfo?.title}</p>
        <p><span style={{fontWeight:'bolder'}}>Authors:</span>{book.volumeInfo?.authors}</p>
        <button onClick={()=>{setIsFavorite(!IsFavorite)}}> {IsFavorite ? "✅" : "❌"} </button>
        
    </div>
  )
}

export default BookCard
