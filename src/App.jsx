import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Vina = lazy(() => import("./pages/Vina"));
import ScrollToTop from "./Components/ScrollToTop";
import Loader from "./Components/Loader";

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vina" element={<Vina />} />
            <Route path="/:category" element={<Menu />} />
            <Route path="/vina/:category" element={<Menu />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
