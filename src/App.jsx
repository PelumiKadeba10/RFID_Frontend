import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import Past from "./Pages/past_records";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past_records" element={<Past />} />
      </Routes>
    </Router>
  );
}

export default App;
