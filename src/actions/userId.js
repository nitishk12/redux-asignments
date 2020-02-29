const axios = require('axios')

export const setId = (user) => {
    return { type: 'SET_ID', payload: user }
}

export const startGetId = (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const users = response.data
                console.log(users)
                dispatch(setId(users))
            })
    }
}