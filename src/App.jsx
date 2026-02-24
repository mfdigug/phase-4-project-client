import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  return (
    <>
      <div>
        <h1>Book Exchange App</h1>
      
        <p>
          This will display some books
        </p>
      </div>
    </>
  )
}

export default App
