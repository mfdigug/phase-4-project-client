import { useState, useEffect } from 'react'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('/api/books')
    .then((r) => r.json())
    .then((data) => setBooks(data))
  }, [])

  return (
    <>
      <div>
        <h1>Book Exchange App</h1>
      
        <p>
          This will display some books
        </p>
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title} by {book.author}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
