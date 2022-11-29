import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../login/login";
import Inicio from "../inicio/inicio";
import Registro from "../registro/registro";
import Mascotas from "../mascotas/mascotas"
import Fundaciones from "../fundaciones/fundaciones"
import PrivateRoute from "../auth/privaterouter";
import BuscarMascotas from "../mascotas/mascotas.buscar" //este corresponde al privado.... pendiente por revisar
//import FundacionesBuscar from "../fundaciones/fundaciones.buscar";

export default function AppRouter() {
  return (
    
    <Router>
      <Switch>
        <PrivateRoute exact path={["/buscarmascotas"]} component={BuscarMascotas}/>
        {/* <PrivateRoute exact path={["/buscarfundaciones"]} component={FundacionesBuscar}/> */}
        <Route exact path={["/login"]} component={Login} />
        <Route exact path={["/"]} component={Login} />
        <Route exact path={["/inicio"]} component={Inicio} />
        <Route exact path={["/registro"]} component={Registro} />
        <Route exact path={["/mascotas"]} component={Mascotas} />
        <Route exact path={["/fundaciones"]} component={Fundaciones} />
        <Route path={"*"}  component={()=>(
        <h1 style={{ marginTop: 400 }}>
              {" "}
              404 <br /> Esta página no existe{" "}</h1>  
        )}/>
             
              </Switch>
      
    </Router>
  );
}


