import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AvaliacaoNutricional } from "./pages/AvaliacaoNutricional";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AvaliacaoNutricional />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
