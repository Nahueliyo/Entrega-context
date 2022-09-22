import React from 'react'
import logo from '../../assets/logo.png'
import CartWidget from '../Cartidget/CartWidget';
import"./NavBar.css"
import { Nav } from './Nav/Nav';


const Navbar = ({ nombre, apellido, id, children }) => {

    const categorias = [
        { id: 0, nombre: 'Juegos' },
        { id: 1, nombre: 'Consolas' },
        { id: 2, nombre: 'Contacto' },
        { id: 3, nombre: 'Varios' },
    ]

    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <h1>Bienvenidxs a Ragnarok Gaming{nombre}</h1>
            <Nav categorias={categorias}/>
            <CartWidget />
        </header>
    )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagen: {
        width: '10%',
    },
}

export default Navbar