import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { CardBook } from './components/CardBook'
import './styles/global.css'

function App() {
  const [books, setBooks] = useState()
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSearch(e) {
    e.preventDefault()
    try {

      setLoading(true)

      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${inputValue}`
      )
      setBooks(data.items)

      setLoading(false)

    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    console.log(loading)
  }, [loading])

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

        {inputValue.length >= 1 && (
          <button type="reset" id="buttonClear">
            <FiX id="iconClear" />
          </button>
        )
        }
      </form>
      <div className='boxLoading'>
        {loading && (
          <CircularProgress />
        )}
      </div>
      <div className="resultsBooks">
        {!!books && books.map(book => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default App
