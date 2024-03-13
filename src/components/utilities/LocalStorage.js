

const getStoredCart = () => {

    const storedCartString = localStorage.getItem('cart')

    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return []
}
const setCartToLS = cart => {

    const setCartString = JSON.stringify(cart)

    localStorage.setItem('cart',setCartString)
}

const addToLS = data => {

    const cart = getStoredCart()
    cart.push(data)
    setCartToLS(cart)
}

export {addToLS, getStoredCart}