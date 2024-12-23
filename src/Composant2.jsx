import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Composant2 = ({ salaries }) => {
    
    return (
      <div className="container mt-4">
        <h2>Liste des Salariés</h2>
        <table className="table table-bordered ">
          <thead className="table-info  ">
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Fonction</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((salarie, index) => (
              <tr key={index}>
                <td>{salarie.nomsal}</td>
                <td>{salarie.prenomsal}</td>
                <td>{salarie.fonction}</td>
                <td>{salarie.service.nomser}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Composant2;
  