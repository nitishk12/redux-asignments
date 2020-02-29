import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/product'

class ProductForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            description: '',
            available: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            available: this.state.available
        }
        console.log(formData)
        this.props.dispatch(addProduct(formData))
    }
    handleCheck = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <label htmlFor='price'>Price</label>
                    <input id='price' type='text' name='price' value={this.state.price} onChange={this.handleChange} />
                    <br />
                    <label htmlFor='description'>Description</label>
                    <input id='description' type='text' name='description' value={this.state.description} onChange={this.handleChange} />
                    <br />
                    <label htmlFor='available'>Availability</label>
                    <input id='available' type='checkbox' name='available' value={this.state.name} onChange={this.handleCheck} />
                    <br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default connect()(ProductForm)