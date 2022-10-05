import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layouts/LayoutMain/Layout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
