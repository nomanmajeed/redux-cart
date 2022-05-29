import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { BsDash, BsPlus, BsTrash } from "react-icons/bs";
import productImages from './productImages'


const Cart = () => {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    return (
        <div className="cart">
            <div className="container">
            
                {products.length > 0 ? <>
                    <h3>Your Cart</h3>
                    <div className="row">
                        <div className="col-9">
                            <div className="cart_heading">
                                <div className="row">
                                    <div className="col-2">Picture</div>
                                    <div className="col-2">Name</div>
                                    <div className="col-2">Price</div>
                                    <div className="col-2">Inc/Dec</div>
                                    <div className="col-2">Total Price</div>
                                    <div className="col-2">Remove</div>
                                </div>
                            </div>
                            {products.map(product => (
                                <div className="row vertical_align" key={product.id}>
                                    <div className="col-2">
                                        <div className="cart_image">
                                            <img src={productImages[`Image_${product.id}`]} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart_name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart_price">
                                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="details_info cart_incDec">
                                            <div className="details_incDec">
                                                <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })}><BsDash /></span>
                                                <span className="quantity">{product.quantity}</span>
                                                <span className="inc" onClick={() => dispatch({ type: 'INC', payload: product.id })}><BsPlus /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart_total text_center">
                                            {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart_remove">
                                            <BsTrash onClick={() => dispatch({ type: 'REMOVE', payload: product.id })} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-3 summary_col">
                            <div className="summary">
                                <div className="summary_heading">
                                    Summary
                                </div>
                                <div className="summary_details">
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Items:
                                        </div>
                                        <div className="col-6">
                                            {totalQuantities}
                                        </div>
                                    </div>
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Price:
                                        </div>
                                        <div className="col-6">
                                            {currencyFormatter.format(totalPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                    <button className="checkout">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <h3 style={{marginTop: '1rem'}}>Your Cart is empty</h3>
                </>}
            </div>
        </div>
    );
}

export default Cart;