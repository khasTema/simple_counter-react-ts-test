import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

function App():JSX.Element {
  return (
    <div className="App">
      <h1>Counter Component</h1>
      <Counter />
    </div>
  );
}

export default App;
