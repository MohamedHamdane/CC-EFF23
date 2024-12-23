import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Composant1(){
  const [formData, setFormData] = useState({
    matricule: "",
    marque: "",
    dateCirculation: "",
    couleur: "",
  });

  const [showRecap, setShowRecap] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setShowRecap(true);
  };

  return (
    <div className="container mt-5">
      <h1>Gestion Voitures</h1>
      <form className="border p-4 rounded shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="matricule" className="form-label">
            Matricule
          </label>
          <input
            type="text"
            id="matricule"
            name="matricule"
            className="form-control"
            value={formData.matricule}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="marque" className="form-label">
            Marque
          </label>
          <select
            id="marque"
            name="marque"
            className="form-select"
            value={formData.marque}
            onChange={handleChange}
          >
            <option value="">Choisir...</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="Bmw">Bmw</option>
            <option value="Pagani">Pagani</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="dateCirculation" className="form-label">
            Date de mise en circulation
          </label>
          <input
            type="date"
            id="dateCirculation"
            name="dateCirculation"
            className="form-control"
            value={formData.dateCirculation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="couleur" className="form-label">
            Couleur
          </label>
          <input
            type="text"
            id="couleur"
            name="couleur"
            className="form-control"
            value={formData.couleur}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-dark" onClick={handleConfirm}>
          Confirmer
        </button>
      </form>

      {showRecap && (
        <div className="mt-4">
          <h2>Récapitulatif des informations :</h2>
          <ul>
            <li>Matricule : {formData.matricule}</li>
            <li>Marque : {formData.marque}</li>
            <li>Date Mise en circulation : {formData.dateCirculation}</li>
            <li>Couleur : {formData.couleur}</li>
          </ul>
        </div>
      )}
    </div>
  );
};