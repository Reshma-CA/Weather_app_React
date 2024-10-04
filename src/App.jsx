import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='app'>
      <h1 style={{ textAlign: 'center',padding: '10px' ,color:'green' }}>Weather App</h1>

      <Weather/>
      
      </div>
  )
}

export default App