import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import MiComponente from "./MiComponente";

const App = () =>{
  const dash = "Lo mejor del gaming a tu alcance";
  const onAdd = (count) => {
    console.log("Mensaje de prueba");
  }

   return (
    <>
      <Navbar />
      <ItemListContainer greeting={dash}/>
      <MiComponente stock={5} onAdd={onAdd}/>
    </>
   ) 
}
export default App;



