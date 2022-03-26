import React from 'react'

import BarChart from './components/BarChart'
import './App.css'
import Form from './components/FormComponents/Form'
import BubbleSort from './components/BubbleSort'

const App = () => {
  return (
    <div>
      <BarChart />
      <Form/>
      <BubbleSort/>
    </div>
  )
}

export default App
