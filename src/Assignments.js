import React from 'react'
import { Link } from 'react-router-dom'

function Assignments(props) {
    return (
        <div>
            <h2>Listing Assignments</h2>
            <ul>
                <li><Link to='/assignments/display-count'>Display Count</Link></li>
                <li><Link to='/assignments/display-random'>Display Random</Link></li>
                <li><Link to='/assignments/show-number'>Show numbers</Link></li>
                <li><Link to='/assignments/show-task'>Show Tasks</Link></li>
                <li><Link to='/assignments/show-product'>Product Form</Link></li>
                <li><Link to='/assignments/show-user'>Show Users API</Link></li>
                <li><Link to='/assignments/show-user-id'>Show Users by filling id</Link></li>
            </ul>
        </div>
    )
}
export default Assignments