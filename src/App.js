import React from 'react';
import './App.css';
import Counter from './Counter'
import store from './store/'
import InputMirror from './inputMirror';
import RepoSearch from './RepoSearch';
function App() {
  return (
    <div className="App">
      <Counter store={store} />
      <InputMirror store={store} />
      <RepoSearch store={store} />
    </div>
  );
}

export default App;
