import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom'
import { useCartContext } from "../../Context/CartContext"
import { Text } from "@chakra-ui/react"



const CartWidget = () => {

  const { totalQuantity } = useCartContext()

  return (
    <NavLink to="/cart">
      <ShoppingCartIcon />
      <Text className="badge" fontsize='xs'>{totalQuantity()}</Text>
    </NavLink>
  )
}

export {CartWidget}
