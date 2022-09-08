import React from "react";
import "./style.css";
import trash from "../../icons/trash.png";

const Atributos = () => {
  return (
    <div className="atributos">
      <h2>Atributos</h2>
      <div className="atributos-name">
        <p>Nombre</p>
        <p>Tipo</p>
        <p>Constraints</p>
        <p>Descripción</p>
        <p>Delete</p>
      </div>
      <div className="atributos-id">
        <p>ID</p>
        <select>
          <option>DECIMAL</option>
          <option>CHAR</option>
          <option>VARCHAR</option>
          <option>DATETIME</option>
        </select>
        <p>Atributo para xyz</p>
        <div className="constrains"></div>
        <img src={trash} alt="trash" />
      </div>
      <div className="atributos-celular">
        <p>Celular</p>
        <select>
          <option>DECIMAL</option>
          <option>CHAR</option>
          <option>VARCHAR</option>
          <option>DATETIME</option>
        </select>
        <p>Atributo para xyz</p>
        <div className="constrains"></div>
        <img src={trash} alt="trash" />
      </div>
      <button>Agregar +</button>
    </div>
  );
};

export default Atributos;
