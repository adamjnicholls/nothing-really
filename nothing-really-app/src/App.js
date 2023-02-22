import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [wantedlist, setWantedlist] = useState([]);

  const fetchData = () => {
    return fetch("https://api.fbi.gov/wanted/v1/list")
          .then((response) => response.json())
          .then((data) => setWantedlist(data.items));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React now
        </a>
      </header>
      <ul>
        {wantedlist && wantedlist.length > 0 && wantedlist.map((listObj, index) => (
            <li key={listObj.uid}>{listObj.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
