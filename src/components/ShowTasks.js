import React from 'react'
import { connect } from 'react-redux'
import { showTask } from '../actions/task'

function ShowTasks(props) {
    const handleClick = () => {
        props.dispatch(showTask())
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th><input type='checkbox' onChange={handleClick} /></th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.task.map(tas => {
                        return (
                            <tr key={tas.id}>
                                <td><input type='checkbox' checked={tas.isCompleted} disabled={true} /></td>
                                <td>{tas.title}</td>
                                <td>{tas.isCompleted ? 'complete' : 'pending'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        task: state.task
    }
}
export default connect(mapStateToProps)(ShowTasks)