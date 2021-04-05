import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './List'
import './App.css'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('http://swapi.dev/api/planets').then((res) => {
      setList(res.data.results)
    })
  }, [])

  return (
    <div className="App">
      {list.map((element, index) => {
        return <List name={element.name} key={index} />
      })}
    </div>
  )
}

export default App
