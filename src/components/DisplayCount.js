import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/count'

function DisplayCount(props) {
    return (
        <div>
            <h2>{props.count}</h2>
            <button onClick={() => {
                props.dispatch(increment())
            }}>Up</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(DisplayCount)

