import { VStack, Center, Text, Image, Hstack, Button} from '@chakra-ui/react'
import { useCartContext } from '../../Context/CartContext'


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()


    return(
        <Center>
            <VStack>
                {cartList.map(prod => 
                    <Hstack key={prod.id} boxShadow='lg' p='5' rounded='md' spacing={11} bg="white">
                        <Image src={prod.image} w="100px"></Image>
                        <Text as="b">{prod.name}</Text>
                        <Text>Cantidad: {prod.quantity}</Text>
                        <Text>Precio: {prod.price * quantity}</Text>
                        <Button colorScheme='red' size='sm' onclick={()=> removeProduct(prod.id)}>X</Button>
                    </Hstack>
                    )}
            {cartList.length === 0 ?
            <Text>El carrito esta vacio</Text>
            :
            <>
                    <Text>Total: ${totalPrice()}</Text>
                    <Button colorScheme='red' size='sm' onclick={()=> cleanCart(prod.id)}>Vaciar Carrito</Button>
            </>
        }
                    
            </VStack>
        </Center>
    )
}


export {Cart}