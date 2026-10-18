import { useState } from 'react'
import ProductList from './components/ProductList.jsx'

function App() {
  const [showProducts, setShowProducts] = useState(true)
  const [name, setName] = useState('')

  return (
    <main>
      <h1>React Product Dashboard</h1>
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>
      <p>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </p>
      <p>Hello, {name}</p>
      {showProducts && <ProductList />}
    </main>
  )
}

export default App
