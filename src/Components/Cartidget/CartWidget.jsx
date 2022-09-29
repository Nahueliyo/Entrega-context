import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom'


const CartWidget = () => {
  return (
    <NavLink to="/cart">
      <ShoppingCartIcon />
    </NavLink>
  )
}

export {CartWidget}
