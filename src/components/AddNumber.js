import React from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../actions/number'

function AddNumber(props) {
    const handleClick = () => {
        const mynum = Math.round(Math.random() * 10)
        props.dispatch(addNumber(mynum))
    }
    return (
        <div>
            <h2>{props.number[props.number.length - 1]}</h2>
            <button onClick={handleClick}>generate number</button>
            <ul>
                {props.number.map((ele, i) => {
                    return <li key={i}>{ele}</li>
                })}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}
export default connect(mapStateToProps)(AddNumber)