import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MainLayout from "./components/MainLayout"
import NewsList from "./components/NewsList"
import NoMatch from "./components/NoMatch"

function App() {
  const country = "in"

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home country={country} />} />

          <Route path="category/:category" element={<NewsList country={country}/>} />
        </Route>

        <Route path="*" element={<NoMatch message=
          "The page you are looking for doesn't exist." />} />
      </Routes>
    </div>
  )
}

export default App
