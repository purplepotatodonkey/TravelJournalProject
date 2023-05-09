import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './Data'
import './App.css'

function App() {
  const cards = Data.map((item, index) => {
    return (
      <Card
        key={index}
        {...item}
      />
    )
  })

  return (
    <>
      <h1>Working</h1>
      {cards}
    </>
  )
}

export default App
