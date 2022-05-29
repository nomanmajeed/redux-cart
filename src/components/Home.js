import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { Link } from 'react-router-dom';
import productImages from './productImages'

const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="products-header">Available Products</h1>
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product_img">
                                    <Link to={`/details/${product.id}`}>
                                        <img src={productImages[`Image_${product.id}`]} alt="Img Name" />
                                    </Link>
                                </div>
                                <div className="product_name">
                                    {product.name}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product_price">
                                            <span className="actual_price">{currencyFormatter.format(product.price, { code: 'USD' })}</span><span className="discounted_price">{product.discount}%</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product_discount_price">
                                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Home;