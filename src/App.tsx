import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/home/Header"
import Home from "./components/home/Home"

function App() {
  const country = "in"
  
  return (
    <div className="App">
      <Header />
      <Home country={country} category="general"/>
    </div>
  )
}

export default App
