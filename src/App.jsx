import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import  ItemListContainer  from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import MiComponente from "./MiComponente";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from "./Components/Cart";



const App = () =>{
  const dash = "Lo mejor del gaming a tu alcance";
  const onAdd = (count) => {
    console.log("Mensaje de prueba");
  }

   return (
    <>
    <ChakraProvider>
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = "/" element={<ItemListContainer greeting="Bienvenidxs" />}/>
      <Route path="/category/:genre" element={<ItemListContainer greeting="Bienvenidxs" />}/>
      <Route path="product/:id" element={<ItemDetailContainer/>}/>
      <Route path="/Cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
      <ItemListContainer greeting={dash}/>
      { <MiComponente stock={5} onAdd={onAdd}/>}
      <ItemDetailContainer/>
    </ChakraProvider>
    </>
   ) 
}
export default App;



