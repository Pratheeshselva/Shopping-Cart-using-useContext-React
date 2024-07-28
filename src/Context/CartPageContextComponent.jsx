import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext();

function CartPageContextComponent({ children }) {

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [cartModal, setCartModal] = useState(false)


  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(newTotal);
}, [cartItems, setTotal]);
 //reduce is something new that I learnt, it helps to reduce the array to a single value


  const AddToCart = (item) => {
 const updateItem = { ...item, quantity: 1 };
  const updateCartItems = [...cartItems, updateItem];

  setCartItems(updateCartItems)
  

  }


  const removeFromCart = (data, id) => {
    const updatecartItems = cartItems.filter(data => data.id !== id)
    setCartItems([...updatecartItems])
   


  }

  const toggleCartPage = () => {
    setCartModal(!cartModal)
    console.log('Toggle triggered', cartModal)

  }

  const increaseQuantity = (id) => {
    console.log('Increase quantity called', id)
   const updatedCartItems = cartItems.map(item=>
    item.id === id ? {...item, quantity: item.quantity+1} : item
   )
   console.log('Increase quantity ',updatedCartItems)
   setCartItems(updatedCartItems);

  }

  const DecreaseQuantity = (id) =>{
    console.log('decrease quantity called', id)
    const updatedCartItems = cartItems.map(item=>
      item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity-1} : item
     )
     console.log('Increase quantity ',updatedCartItems)
     setCartItems(updatedCartItems);
  }

  return <CartContext.Provider value={{total, cartItems, total, AddToCart, removeFromCart, toggleCartPage, cartModal, setCartModal, DecreaseQuantity, increaseQuantity }}>
    {children}
  </CartContext.Provider>
}

export default CartPageContextComponent