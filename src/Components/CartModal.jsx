import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartContext } from '../Context/CartPageContextComponent';
import '../index.css';
import Table from 'react-bootstrap/Table';

function CartModal() {



    const { cartItems, cartModal, toggleCartPage, total, increaseQuantity, DecreaseQuantity, removeFromCart } = useContext(CartContext)

    return <>



        <div className={`cartmodal-div ${cartModal ? 'show' : ''}`} >
            <Button size='lg' onClick={toggleCartPage} variant="dark"> <i className="bi bi-arrow-left"></i> &nbsp; Back to Shop more!!</Button>
            <div><br /><br />

                {
                    cartItems.length === 0 ? (<h3 style={{ textAlign: 'center' }}>Your Cart is Empty!</h3>) : (<>
                        <h2 style={{ textAlign: 'center'}}>Cart Items</h2><br />
                        <Table striped bordered hover className='Maintable'>
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Item Name</th>
                                    <th>Price per unit</th>
                                    <th>Qty</th>
                                    <th>Total price</th>
                                    <th>Delete Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item, i) => (
                                        <tr key={item.id}>
                                            <td>{1 + i++}</td>
                                            <td style={{ textAlign: 'start' }}>{item.title}</td>
                                            <td>${item.price}</td>
                                            <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='quantity-row' >
                                                <Button onClick={() => DecreaseQuantity(item.id)} style={{ width: '30px', height: '40px' }} size='sm'><i className="bi bi-dash"></i></Button> &nbsp;&nbsp;
                                                &nbsp;&nbsp;<p className='text-center'>{item.quantity}</p> &nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button onClick={() => increaseQuantity(item.id)} style={{ width: '30px', height: '40px' }} size='sm'><i className="bi bi-plus"></i></Button>
                                            </td>
                                            <td>${item.price * item.quantity}</td>
                                            <td><Button style={{ width: '9rem' }} variant="outline-danger" onClick={() => removeFromCart(item, item.id)} >Remove Item</Button> </td>
                                        </tr>

                                    ))
                                }


                            </tbody>
                        </Table>



                    </>
                    )



                }
            </div>
            <div>
                {
                    cartItems.length === 0 ? '' :

                        <Table striped bordered hover style={{ width: '50%' }} className='FinalTable' >
                            <thead>
                                <tr>

                                    <th>Total Price</th>
                                    <td>${total}</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Shipping Charges</td>
                                    <td>Free</td>

                                </tr>
                                <tr>
                                    <td>Payment Value</td>
                                    <th>${total}</th>
                                </tr>

                            </tbody>
                        </Table>}
                <br />

                {cartItems.length === 0 ? '' :
                    <div className='text-center'><Button disabled size='md' style={{ width: '50%' }}>CheckOut (Disabled)</Button></div>}
            </div>
        </div>

    </>
}

export default CartModal