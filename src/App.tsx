import "bootstrap/dist/css/bootstrap.min.css"
import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
const Home = lazy(() => import("./components/Home"))
const MainLayout = lazy(() => import("./components/MainLayout"))
const NewsList = lazy(() => import("./components/NewsList"))
const NoMatch = lazy(() => import("./components/NoMatch"))

function App() {
  const country = "in"

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>} >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home country={country} />} />

            <Route path="category/:category" element={<NewsList country={country} />} />
          </Route>

          <Route path="*" element={<NoMatch message=
            "The page you are looking for doesn't exist." />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
