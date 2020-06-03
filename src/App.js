import React, { useState } from 'react';
import SearchButton from "./SearchButton"
import './App.css';
import ListOfBabyNames from './ListOfBabyNames'
import BabyNamesData from "./BabyNamesData.json"

function App() {
  const [text, setText] = useState("");

  const filteredNames = BabyNamesData.filter(baby => baby.name.toLowerCase().includes(text.toLowerCase()));
  return (
    <div className="nameContainer">
      <header className="App-header">
        <input
          value={text}
          className="searchbtn"
          type="search"
          placeholder="Search for a name..."
          onChange={e => setText(e.target.value)}
        />
        {/* <SearchButton /> */}
        <ListOfBabyNames names={filteredNames} />
      </header>
    </div>
  );
}

export default App;