const tasksInitialState = [
    { id: 1, title: "deploy app", isCompleted: false },
    { id: 2, title: "make app", isCompleted: false },
    { id: 3, title: "database backup", isCompleted: false }
]

const taskReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
        case 'SHOW_TASK': {
            return state.map(task => {
                return { ...task, ...{ isCompleted: !task.isCompleted } }
            })
        }
        default: {
            return [...state]
        }
    }
}
export default taskReducer