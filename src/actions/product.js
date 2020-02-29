export const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}
export const removeProduct = (id) => {
    return { type: 'REMOVE_PRODUCT', payload: id }
}
export const markAvailable = (id) => {
    return { type: 'AVAILABLE', payload: id }
}