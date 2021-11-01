import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { FiSearch } from "react-icons/fi";
import './styles/global.css'

function App() {
  const [books, setBooks] = useState([])
  const [inputValue, setInputValue] = useState('')

  async function handleSearch() {
    try {
      const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}`);
      setBooks(data.itens);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div className="title">
        <h1>Book Finder</h1>
      </div>

      <form action="" onSubmit={handleSearch}>
        <input 
        type="text"
        placeholder="Pesquise por título ou autor"
        onChange={e => setInputValue(e.target.value)}
        />

        <button type="submit">
        <FiSearch id="iconSearch"/>
        </button>
      </form>
     
    </div>
  );
}

export default App;
