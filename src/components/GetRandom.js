import React from 'react'
import { connect } from 'react-redux'
import { getRandom, clearRandom } from '../actions/random'

function GetRandom(props) {
    return (
        <div>
            <br />
            <button onClick={() => {
                const number = Math.round(Math.random() * 10)
                props.dispatch(getRandom(number))
            }}>Get Random</button>
            <button onClick={() => {
                props.dispatch(clearRandom())
            }}>Clear</button>

            <h1>{props.random}</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        random: state.random
    }
}
export default connect(mapStateToProps)(GetRandom)