import { FiSearch } from "react-icons/fi";
import './styles/global.css'

function App() {
  return (
    <div>
      <div className="title">
        <h1>Book Finder</h1>
      </div>

      <form action="">
        <input type="text"
        placeholder="Pesquise por título ou autor" />

        <button>
        <FiSearch id="iconSearch"/>
        </button>
      </form>
     
    </div>
  );
}

export default App;
