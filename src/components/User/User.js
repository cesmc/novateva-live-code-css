import React from "react";
import "./style.css";

const User = () => {
  return (
    <div className="user">
      <form>
        <div>
          <p>Nombre</p>
          <br />
          <input type="text" placeholder="Person" />
        </div>
        <div>
          <p>Descripción</p>
          <br />
          <input type="text" placeholder="Tabla usada para x y z" />
        </div>
      </form>
    </div>
  );
};

export default User;
