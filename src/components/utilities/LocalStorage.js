

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

const removeFromLs = (id) => {

    const cart = getStoredCart()

    console.log('cart before remove =>',cart);

    const remaining = cart.filter( idx =>{
        // console.log("current id", idx);
        // console.log(" id", id);
        return idx.id != id
    })

    // console.log('cart after remove =>',remaining);

    setCartToLS(remaining)
}

export {addToLS, getStoredCart, removeFromLs}