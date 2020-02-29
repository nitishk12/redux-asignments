export const getRandom = (n) => {
    return { type: 'GET_RANDOM', payload: n }
}
export const clearRandom = () => {
    return { type: 'CLEAR_RANDOM' }
}