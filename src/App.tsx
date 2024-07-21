import React, { useState } from 'react'
import { SeriesProps } from './interfaces/SeriesProps'
import './App.css'
import Form from './components/Form'
import List from './components/List'

function App() {

  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([])

  return (
    <div className='App'>
      <h1>My favourite tv series</h1>
      <Form seriesList={seriesList} setSeriesList={setSeriesList} />
      
      
      <List seriesList={seriesList} />
    </div>
  )
}

export default App
