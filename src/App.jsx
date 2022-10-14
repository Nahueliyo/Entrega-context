import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import  ItemListContainer  from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import MiComponente from "./MiComponente";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from "./Components/Cart";
import { CartContextProvider } from "../Context/CartContext";



const App = () =>{
  const dash = "Lo mejor del gaming a tu alcance";
  const onAdd = (count) => {
    console.log("Mensaje de prueba");
  }

   return (
    <>
    <ChakraProvider>
      <BrowserRouter>
    <CartContextProvider>
      
    </CartContextProvider>
    <Navbar />
    <Routes>
      <Route path = "/" element={<ItemListContainer greeting="Bienvenidxs" />}/>
      <Route path="/category/:genre" element={<ItemListContainer greeting="Bienvenidxs" />}/>
      <Route path="product/:id" element={<ItemDetailContainer/>}/>
      <Route path="/Cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </>
   ) 
}
export default App;



