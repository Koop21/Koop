
import './App.css';
import Menu from './Menu.js';
import Formulario from './Formulario.js';
import Pie from './Pie.js';
import Conceptos from './Rutas';
import Rutas from './Rutas';
import react from 'react';

class App extends react.Component {
  render(){
    return(
      <div clasName="app">
        <Menu />
        <Rutas />
        <Pie /> 
      </div>
    );
  } 
}

export default App;
