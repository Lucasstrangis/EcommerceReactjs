import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div> 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos según su categoría"}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App
