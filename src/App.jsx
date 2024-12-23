import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Composant2 from "./Composant2";
import Composant3 from "./Composant3";
import Composant1 from "./Composant1";

const App = () => {
  const [salaries, setSalaries] = useState([
    {
      _id: "s1",
      nomsal: "Hamdane",
      prenomsal: "Abir",
      fonction: "Tester",
      service: {
        codeser: "1",
        nomser: "informatique",
      },
    },
    {
      _id: "s2",
      nomsal: "Hamdane",
      prenomsal: "Mohamed",
      fonction: "chef",
      service: {
        codeser: "2",
        nomser: "ressources humaines",
      },
    },
  ]);
  return (
      <Router>
        <div className="container mt-4">
          <h1>Application de gestion des salariés</h1>
        <Composant1/>
          
          <nav className="nav nav-pills mb-3">
            <Link className="nav-link" to="/composant2">
              Composant 2
            </Link>
            <Link className="nav-link" to="/composant3">
              Composant 3
            </Link>
          </nav>
          <Routes>
            <Route path="/composant2" element={<Composant2 salaries={salaries} />} />
            <Route path="/composant3" element={<Composant3 salaries={salaries} />} />
          </Routes>
        </div>
      </Router>
   
  );
};

export default App;