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
      <Navbar />
      <section className="cards-list">{cards}</section>
    </>
  )
}

export default App
