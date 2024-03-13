
import { useEffect, useState } from 'react'
import './App.css'
import Display from './components/Display/Display'
import {addToLS, removeFromLs} from './components/utilities/LocalStorage'
import { getStoredCart } from './components/utilities/LocalStorage'
import Cart from './components/Cart/Cart'

function App() {

  const [getData, setGetData] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch('bottleApi.json')
      const data = await response.json()
      // console.log(data);
      setGetData(data)
    }
    callApi()
  }, [])

  const [cart, setCart] = useState([])

  function handleCart(data){

    const updatedCart = [...cart,data]
    setCart(updatedCart)
    addToLS(data)
  }
  useEffect( () => {

    const savedCart = []
    if (getData.length) {
      const storedCard = getStoredCart()
      // console.log(storedCard);
      for (let id of storedCard ){
        // console.log(id);
        if (getData) {
          
          savedCart.push(id)
        }
      }
      setCart(savedCart)
    }

  },[getData])

  // remove item form ls and ui 

  const handleRemoveItem = (id) => {

    removeFromLs(id)
    // console.log('id',id);

  }

  return (
    <>
      <div className=' flex flex-col items-center justify-center gap-10'>
      <div className='text-center '>
      <h1 className=' text-3xl text-green-500 p-8 rounded-lg'>Best and Quality Products</h1>
      <h1>Available Products: {getData.length} </h1>
      </div>
      <div className='space-y-6 mb-12'>
      <p className='text-2xl font-medium text-pink-700'>Your Cart:</p>
      <Cart cart={cart} handleRemoveItem={handleRemoveItem}/>
      {/* <p>Name: {name} </p> */}
      {/* <p>Price: {price} </p> */}
      </div>

      </div>


      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

        {
          getData.map(element => <Display key={element.id} data={element} handleCart={handleCart} />)
        }
      </div>
    </>
  )
}

export default App
