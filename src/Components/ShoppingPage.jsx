import React, {useContext} from 'react'
import { shopContext } from '../Context/ShoppingPageContextComponent'
import '../index.css'
import Cards from './Cards'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../Context/CartPageContextComponent';
import CartModal from './CartModal';




function ShoppingPage() {

    const {products} = useContext(shopContext)
    const {toggleCartPage} = useContext(CartContext)
    
    console.log(products)

  return <>
  <div className='shopping-page'>
  {
    products.map((item)=>(
      <Cards data={item} key={item.id} />
    ))
   
  }
 
  <div style={{position:'fixed', zIndex:'999',bottom:'50%', right:'10px' }}>
   
  <Button className='secondary' variant="outline-success" onClick={toggleCartPage} >Check Out</Button>

  </div>
  <CartModal />

  </div>
 

 
  </>
}

export default ShoppingPage