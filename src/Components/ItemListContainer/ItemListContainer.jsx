import React from 'react'
import {Heading, Text} from '@chakra-ui/react'
import { ItemCount } from '../ItemCount'
import { products } from '../../Utils/products'
import { ItemList } from '../ItemList'
import { customFetch } from '../../Utils/customFetch'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const { genre } = useParams()

  useEffect(()=> {
    setLoading(true)
    customFetch(products)
      .then(res => {
        if (genre){
          setLoading(false)
          setListProduct(res.filer(prod => prod.genre === genre))
        } else{

        setLoading(false)
        setListProduct(res)
        }
      })
  }, [genre])

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
