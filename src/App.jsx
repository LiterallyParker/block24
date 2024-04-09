import { puppyList } from './data'
import { useState } from 'react'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const [puppy, setPuppy] = useState(null)

  function handleClick() {
    console.log('Hello')
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)

  return (
    <div className='App' key="App">
      <h1>Check out these dogs!</h1>
      <div className='UI'>

      {featPupId && 
      <div className='featPup' key='featPup'>
            <h2>{featuredPup.name}</h2>
            <h3>Age: {featuredPup.age}</h3>
            <h3>Email: {featuredPup.email}</h3>
          </div>}
      <div>

    {puppies.map((puppy) => {
      return (
        <div className="pup" key={`pup-div-${puppy.id}`}>
        <p onClick={() => {setFeatPupId(puppy.id)} } key={puppy.id}>{puppy.name}</p>
        </div>
      )
    }
  )}
  </div>
  </div>
  </div>
  )
}

export default App
