import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Composant3 = ({ salaries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    const filteredSalaries = salaries.filter(
      (salarie) =>
        salarie.service.nomser.toLowerCase() === searchTerm.toLowerCase()
    );

    setResult(filteredSalaries);
  };

  return (
    <div className="container mt-4">
      <h3>Recherche par service:</h3>
      <div className="mb-3">
        <label htmlFor="serviceInput" className="form-label">
          Entrer le nom du service:
        </label>
        <input
          type="text"
          id="serviceInput"
          className="form-control"
          placeholder="Nom du service"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Chercher
      </button>
      <div className="mt-4">
        <h4>Résultat</h4>
        {result.length > 0 ? (
          <ul className="list-group">
            {result.map((salarie) => (
              <li key={salarie._id} className="list-group-item">
                <strong>Nom:</strong> {salarie.nomsal}{" "}
                <strong>Prénom:</strong> {salarie.prenomsal}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-danger">Aucun salarié n'est affecté à ce service</p>
        )}
      </div>
    </div>
  );
};

export default Composant3;