import { useState } from 'react'
import ProductList from './components/ProductList.jsx'

function App() {
  const [showProducts, setShowProducts] = useState(true)

  return (
    <main>
      <h1>React Product Dashboard</h1>
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>
      {showProducts && <ProductList />}
    </main>
  )
}

export default App
