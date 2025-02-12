import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Vina from "./pages/Vina";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vina" element={<Vina />} />
          <Route path="/menu/:category" element={<Menu />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
