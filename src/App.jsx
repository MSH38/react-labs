import { useState } from 'react'

function App() {
  const [selectedValue, setSelectedValue] = useState('$100');
  function applyDiscount() {
    setSelectedValue('$75');
  }
  
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <p data-testid="price">{selectedValue}</p>
        <button onClick={applyDiscount} >Apply Discount</button>
      </main>
    </div>
  );
}

export default App;
