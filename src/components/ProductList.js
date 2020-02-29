import React from 'react'
import { connect } from 'react-redux'
import ProductForm from './ProductForm'
import { removeProduct, markAvailable } from '../actions/product'

function ProductList(props) {
    const handleRemove = (id) => {
        const remove = window.confirm('Are You Sure ?')
        if (remove) {
            props.dispatch(removeProduct(id))
        }
    }
    const handleClick = (id) => {
        props.dispatch(markAvailable(id))
    }
    return (
        <div>
            <h2>Listing Products - {props.products.length}</h2>
            <ul>
                {props.products.map(product => {
                    return <li key={product.id}>{product.name} - {product.price} - {product.description} - {product.available ? 'available' : 'not available'}
                        <input type='checkbox' checked={product.available} onChange={() => {
                            handleClick(product.id)
                        }} />
                        <button onClick={() => {
                            handleRemove(product.id)
                        }}>remove</button>
                    </li>
                })}
            </ul>
            <ProductForm />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(ProductList)