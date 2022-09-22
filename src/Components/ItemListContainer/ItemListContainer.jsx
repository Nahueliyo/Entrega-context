import React from 'react'
import {Text} from '@chakra-ui/react'
import { ItemCount } from '../ItemCount'
import { products } from '../../Utils/products'
import { ItemList } from '../ItemList'
import { customFetch } from '../../Utils/customFetch'
import { useState, useEffect } from 'react'


const ItemListContainer = ({greeting}) => {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    setLoading(true)
    customFetch(products)
      .then(res => {
        setLoading(false)
        setListProduct(res)
      
      })
  }, [])

  return (
    <>
    {!loading
    ?
    <ItemList listProduct = {listProduct}/>
  :
  <Text>Cargando...</Text>
  }
    </>
  )
}

export default ItemListContainer
