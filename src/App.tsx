import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import InteractiveMap from "./components/interactiveMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<InteractiveMap />} />
      </Routes>
    </Router>
  );
}

export default App;
