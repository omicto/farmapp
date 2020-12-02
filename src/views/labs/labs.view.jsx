import React from "react";
import LabDetails from "../../components/lab-details/lab-details.component";

const labs = [
  {
    name: "LIACSA Laboratorios",
    description: "Laboratorio de análisis clínicos en Chihuahua",
    address: "Av. de la Cantera 9139, Colonia Misiones, 31115, Chihuahua, Chih",
    schedule: { opens: "9:00", closes: "20:00" },
    phone: "6144260262",
  },
];

const Laboratories = () => {
  return (
    <div>
      <div className="header">
        <h4 className="rcw-title">Laboratorios</h4>
        <p style={{color: 'white'}}><strong>Encuentra información de laboratorios que realizan la prueba PCR</strong></p>
      </div>
      
      {labs.map((lab) => (
        <LabDetails lab={lab} key={lab.phone}></LabDetails>
      ))}
    </div>
  );
};

export default Laboratories;
