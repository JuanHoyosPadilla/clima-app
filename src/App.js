import './App.css';
import 'animate.css';
import SearchForm from './components/searchComponent/SearchForm';
import DataVisualizer from './components/dataComponent/DataVisualizer';
import {useState} from 'react';



function App() {
  const [search, setSearch] = useState('');
  const [datos, setDatos] = useState([]);
  const [view, setView] = useState(true)
  const [loading, setLoading] = useState(false)

  const cargarLoading = ()=> {
    setLoading(false)
    setTimeout(() => {
      setLoading(true)
    }, 1000)
  }
  //const URL = "https://api.openweathermap.org/data/2.5/weather?q=cali&appid=9670ea26d766e57525091f4496e9815f"
  
  const searchSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9670ea26d766e57525091f4496e9815f&units=metric`)
      .then(response => response.json())
      .then(data => {
        setDatos(data)
        setView(false)
        cargarLoading()
      }) 

  }
  return (
    <div className='container'>
      <SearchForm setSearch={setSearch} searchSubmit={searchSubmit} />
      {
        view ? 
            <h1 className='animate__animated animate__pulse animate__infinite'>Search for a City...</h1>
             :
             <DataVisualizer datos={datos} loading={loading} /> 
      }
    </div>
  );
}

export default App;
