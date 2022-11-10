import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import SelectBar from "./components/SelectBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <SelectBar />
          <Table/>
      </header>
    </div>
  );
}

export default App;
