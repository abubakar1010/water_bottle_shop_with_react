
import { useEffect, useState } from 'react'
import './App.css'
import Display from './components/Display/Display'

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
  }
  console.log(cart);
  return (
    <>
      <div className=' flex flex-col items-center justify-center gap-10'>
      <div className='text-center '>
      <h1 className=' text-3xl text-green-500 p-8 rounded-lg'>Best and Quality Products</h1>
      <h1>Available Products: {getData.length} </h1>
      </div>
      <div className='space-y-6 mb-12'>
      <p className='text-2xl font-medium text-pink-700'>Your Cart:</p>
      <p>Total Products: {cart.length} </p>
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
