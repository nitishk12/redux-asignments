import React from 'react'
import { connect } from 'react-redux'
import { startGetId } from '../actions/userId'

class UserIdForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const id = this.state.id
        this.props.dispatch(startGetId(id))
    }
    render() {
        return (
            <div>
                <h2>Get User Name by ID</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Id</label>
                    <input type='text' name='id' value={this.state.id} onChange={this.handleChange} />
                    <input type='submit' />
                </form>
                {Object.keys(this.props.userId).length != 0 && (
                    <div>
                        <h2>NAME : {this.props.userId.name}</h2>
                        <h2>EMAIL : {this.props.userId.email}</h2>
                        <h3>CITY : {this.props.userId.address.city}</h3>
                    </div>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.userId
    }
}
export default connect(mapStateToProps)(UserIdForm)