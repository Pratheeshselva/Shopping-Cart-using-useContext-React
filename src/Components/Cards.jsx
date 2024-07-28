import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import { CartContext } from '../Context/CartPageContextComponent';



function Cards({ data }) {
  let {AddToCart,cartItems, removeFromCart} = useContext(CartContext)
  let [toggle, setToggle] = useState(true)


  const isItemInCart = cartItems.some(item=> item.id === data.id)


 const startcartprocess = (data) =>{
  console.log('Add process called')
    // setToggle(prev => !prev)
    AddToCart(data)

  }

  const removecartprocess = (data,id) => {
    console.log(id)
    console.log('remove process called')
    // setToggle(prev => !prev)
    removeFromCart(data,id)
  }

  return <>
    <div className='cardstyle' >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image} alt={data.description} className='cardimage' />
        <Card.Body>
          <Card.Title className='cardtitle' >{data.title}</Card.Title>

          <Card.Text className='itemprice'>
            ${data.price}
          </Card.Text>
          <div className='btn'>
            {isItemInCart  ? <Button variant="dark" onClick={() => removecartprocess(data,data.id)} >Remove from Cart</Button>
               :
<Button variant="success" onClick={() => startcartprocess(data)
               
              }  >Add to Cart</Button>
              
            }
          </div>
        </Card.Body>
      </Card>
    </div>
{console.log(cartItems,toggle)}


 
  </>
}

export default Cards