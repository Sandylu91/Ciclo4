import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../login/login";
import Inicio from "../inicio/inicio";
import Registro from "../registro/registro";
import Mascotas from "../mascotas/mascotas"

export default function AppRouter() {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} > </Route>
              <Route
          path="/"
          element={
            <h1 style={{ marginTop: 400 }}>
              {" "}
              404 <br /> Esta página no existe{" "}
            </h1>
          }></Route>
        <Route exact path="/inicio" element={<Inicio />} ></Route>
        <Route exact path="/registro" element={<Registro />} ></Route>
        <Route exact path="/mascotas" element={<Mascotas />} ></Route>
        <Route exact path="/" element={<Inicio />} />
      </Routes>
      
    </Router>
  );
}

// function Inicio () {
//   return (
//     <div>
//       <h2 style={{ marginTop: 200 }}>Inicio</h2>
//     </div>
//   );
// }


