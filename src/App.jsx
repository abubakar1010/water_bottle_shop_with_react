
import { useEffect, useState } from 'react'
import './App.css'
import Display from './components/Display/Display'

function App() {

  const [getData, setGetData] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch('bottleApi.json')
      const data = await response.json()
      console.log(data);
      setGetData(data)
    }
    callApi()
  }, [])


  return (
    <>
      <h1 className=' text-3xl text-green-500 p-8 rounded-lg'>Best and Quality Products</h1>
      <h1>Available Products: {getData.length} </h1>
      <div>
      <p>Your Cart:</p>
      <p>Total Products: </p>

      </div>


      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

        {
          getData.map(element => <Display key={element.id} data={element} />)
        }
      </div>
    </>
  )
}

export default App
