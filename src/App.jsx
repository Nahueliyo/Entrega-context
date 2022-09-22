import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import  ItemListContainer  from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import MiComponente from "./MiComponente";
import { ChakraProvider } from '@chakra-ui/react';


const App = () =>{
  const dash = "Lo mejor del gaming a tu alcance";
  const onAdd = (count) => {
    console.log("Mensaje de prueba");
  }

   return (
    <>
    <Navbar />
    <ChakraProvider>
      <ItemListContainer greeting={dash}/>
      {/* <MiComponente stock={5} onAdd={onAdd}/> */}
      <ItemDetailContainer/>
    </ChakraProvider>
    </>
   ) 
}
export default App;



