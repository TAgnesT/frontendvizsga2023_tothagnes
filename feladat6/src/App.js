import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';

function App() {

  const [table, setTable]= useState([]);

  useEffect (()=>{
    axios.get('./feladat6-adatok.json')
    .then(response =>{
      setTable(response.data.value);
    })
  },[])

  return (
    <div className="App">
      {
        table.map(tablecont =>{
          return <Book title={tablecont.title} number={tablecont.number} />
        })
      }
      
    </div>
  );
}

export default App;
