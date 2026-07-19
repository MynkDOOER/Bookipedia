import { Route, Routes } from "react-router-dom"
import Layout from './layout/Layout'
import Home from './pages/Home'
import Booklist from './pages/Booklist'
import Bookdetails from './pages/Bookdetails'
import Favorites from './pages/Favorites'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/books' element={<Booklist/>}/>
      <Route path='/books:id' element={<Bookdetails/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      </Route>
    </Routes>
  )
}

export default App
