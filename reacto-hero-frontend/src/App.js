import React, {useState} from 'react';

import Header from './Header';

function App() {
  const [cont, setCounter] = useState(0)
  function increment(){
    setCounter(cont+1);
  }

  return (
    <div>
      <Header title={cont}></Header>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
