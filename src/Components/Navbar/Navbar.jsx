import React from 'react'
import logo from '../../assets/logo.png'
import CartWidget from '../Cartidget/CartWidget';
import"./NavBar.css"
import { Nav } from './Nav/Nav';
import { HStack, Spacer, Link } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"


const Navbar = () => {


    return (
        // <header style={styles.container}>
        //     <img style={styles.imagen} src={logo} alt="logo" />
        //     <h1>Bienvenidxs a Ragnarok Gaming{nombre}</h1>
        //     <Nav categorias={categorias}/>
        //     <CartWidget />
        // </header>

        <HStack>
            <NavLink to="/">
                <img src={logo} alt="Logo" width="100px"/>
            </NavLink>
            <Spacer />
            <HStack>
                <NavLink to="genre/Aventura">
                    <Link>Aventura</Link>
                </NavLink>
                <NavLink to="genre/Souls Like">
                    <Link>Souls Like</Link>
                </NavLink>
                <NavLink to="genre/Historia">
                    <Link>Historia</Link>
                </NavLink>
                <NavLink to="genre/Fantasía">
                    <Link>Fantasía</Link>
                </NavLink>
                <NavLink to="genre/Slasher">
                    <Link>Slasher</Link>
                </NavLink>
            </HStack>
        </HStack>
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