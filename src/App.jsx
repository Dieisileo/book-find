import axios from 'axios'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { CardBook } from './components/CardBook'
import './styles/global.css'

function App() {
  const [books, setBooks] = useState()
  const [inputValue, setInputValue] = useState('')

  async function handleSearch(e) {
    e.preventDefault()
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${inputValue}`
      ) 
      console.log(data.itens)
      setBooks(data.items)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    console.log(books)
  },[books])

  return (
    <div>
      <div className="title">
        <h1>Book Finder</h1>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Pesquise por título ou autor"
          onChange={e => setInputValue(e.target.value)}
        />

        <button type="submit">
          <FiSearch id="iconSearch" />
        </button>
      </form>
      <div className="resultsBooks">
      {!!books && books.map(book => (
        <CardBook key={book.id} book={book} />
      ))}
      </div>
    </div>
  )
}

export default App
