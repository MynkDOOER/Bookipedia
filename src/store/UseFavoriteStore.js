import {create} from 'zustand'

const useFavoriteStore = create((set) => ({
    Favorites:[],

    addFavorite: (book) => set((state)=>({
        Favorites:[...state.Favorites, book]
    })),

    removeFavorite: (id) => set((state)=>({
        Favorites:state.Favorites.filter((book)=> book.id !== id)
    }))
}))

export default useFavoriteStore;