import {VStack, Button, Text, Image, Link} from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
const Item = ({product}) => {
        return (
            <VStack boxShadow='lg' p='6' rounded='md' bg='white' m='15px' minWidth='275px'>
            <Image src={product.image} alt={product.product} w="100px"/>
            <Text>{product.name}</Text>
            <Text>${product.price}</Text>
            <Button colorScheme='purple' size='m'>
                <NavLink to={"product/${genre.id}"}>
                    <Link>Ver Producto</Link>
                <NavLink/>
                
            </Button>
            </VStack>
        )
}

export { Item } 