import { VStack, Center, Text, Image, Heading, Select, HStack, Button } from "@chakra-ui/react"
import { useState } from "react"
import { FaCreditCard, FaRegCreditCard, FaHeart} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { ItemCount } from "../ItemCount"
import { useCartContext } from "../../Context/CartContext"


const ItemDetail = ( listProduct ) => {

    const {image, product, genre, price, name, category, description} = listProduct


    const [isAdded, setListAdded] = useState (false)

    const { addToCart, cartList } = useCartContext()

    const onAdd = (quantity) =>{
        addToCart(listProduct, quantity)
        setIsAdded(true)
    }

    return(
        <Center boxShadow='dark-lg' p='6' rounded='md' bg='white' m="20px auto" maxWidth= "800px">
            <Image src={image} w="200px"/>
            <VStack maxWidth="500px" align="left" mx="15px">
                <HStack>
                    <Heading>{product}</Heading>
                    <FaHeart size='20px' cursor="pointer"/>
                </HStack>
                <Text className='bold' fontSize='2x1'>${price}</Text>
                <Text>Stock: {stock}</Text>
                <HStack>
                    <FaCreditCard /><FaRegCreditCard />
                </HStack>
                <Text fontSize='sm'>{description}</Text>
                {
                    isAdded ?
                    <NavLink to= "/cart">
                        <Button colorScheme='blue' size='md'>Ir al Carrito</Button>
                    </NavLink>
                    :
                    <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
                }
                
            </VStack>
            
        </Center>



    )
}

export { ItemDetail }