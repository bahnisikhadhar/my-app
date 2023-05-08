import React from 'react';
// import './App.css';
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GrammarlyEditorPlugin clientId="client_AQxzw2sMWyyDPHVVVBGWbP">
        <textarea name="text" id="" cols="30" rows="10"></textarea>
        </GrammarlyEditorPlugin>
      </header>
    </div>
  );
}

export default App;
