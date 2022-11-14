import Home from "./pages/Home"
import { FavoriteProvider } from "./components/context/FavoriteContext"
const App = () => {
  return (
    <div className="App">
      <FavoriteProvider>
        <Home />
      </FavoriteProvider>
    </div>
  )
}

export default App
