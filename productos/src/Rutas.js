import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Consulta from "./Consulta";
import Lista from "./Lista";
import Menu from "./Menu";
import Registro from "./Registro";

const   Rutas=()=>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/agregar" component={Registro}/>
                    <Route exact path="/consultar" component={Consulta}/>
                    <Route exact path="/lista" component={Lista}/>
                    <Route exact path="/">
                       <h1>KOOP</h1>
                       <h2>Sistema de Ventas</h2>
                    </Route>
                </Switch>
            </Router>
           
        </div>

    );
}

export default Rutas;