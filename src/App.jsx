import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('/api/books')
    .then((r) => r.json())
    .then((data) => console.log(data))
  }, [])

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
