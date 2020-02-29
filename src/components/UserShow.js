import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UserShow(props) {
    return (
        <div>
            {
                props.user && (
                    <div>
                        <h2>{props.user.name}</h2>
                    </div>
                )
            }

            <Link to='/assignments/show-user'>back</Link>
        </div>
    )
}

// by passing props as the second argument i can read props.match.params.id
const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShow)