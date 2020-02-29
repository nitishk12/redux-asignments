import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UsersList(props) {
    return (
        <div>
            <h2>Listing users - {props.users.length}</h2>
            <ul>
                {props.users.map(user => {
                    return <li key={user.id}><Link to={`/assignments/show-user/${user.id}`}>{user.name}</Link></li>
                })}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UsersList)