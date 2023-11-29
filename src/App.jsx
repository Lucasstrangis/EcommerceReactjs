import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './Notification/NotificationContext'


const App = () => {
  
 return (
    <div>
      <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos según su categoría"}/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
         </Routes>
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </div>  
  )
}

export default App
