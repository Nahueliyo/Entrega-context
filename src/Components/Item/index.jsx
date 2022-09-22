import {VStack, Button, Text, Image, Link} from '@chakra-ui/react'
import { products } from '../../Utils/products'

const Item = ({product}) => {
        return (
            <VStack boxShadow='lg' p='6' rounded='md' bg='white' m='15px' minWidth='275px'>
            <Image src={product.image} alt={product.product} w="100px"/>
            <Text>{product.name}</Text>
            <Text>${product.price}</Text>
            <Button colorScheme='purple' size='m'>
                <Link>Ver Producto</Link>
            </Button>
            </VStack>
        )
}

export { Item } 