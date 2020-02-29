const axios = require('axios')

export const setUsers = (users) => {
    return { type: 'SET_USER', payload: users }
}

// action generator for API calling
export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                console.log(users)
                dispatch(setUsers(users))
            })
    }
}