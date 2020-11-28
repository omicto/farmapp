import React from "react";

const LabDetails = ({ lab }) => {
  return (
    <div className="card text-left p-3">
      <h4>{lab.name}</h4>
      <p>{lab.description}</p>
      <h5>Detalles de contacto</h5>
      <ul>
        <li>
          <span className="font-weight-bold">Direccion: </span>
          {lab.address}
        </li>
        <li>
          <span className="font-weight-bold">Teléfono: </span>
          {lab.phone}
        </li>
        <li>
          <span className="font-weight-bold">Horario: </span>
          <ul>
            <li>Abre: {lab.schedule.opens}</li>
            <li>Cierra: {lab.schedule.closes}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LabDetails;
