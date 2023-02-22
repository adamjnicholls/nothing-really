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
      <div>
        {wantedlist && wantedlist.length > 0 && wantedlist.map((listObj, index) => (
            <div key={listObj.uid}><h2>{listObj.title}</h2><div>{listObj.details}</div></div>
          ))}
      </div>
    </div>
  );
}

export default App;
