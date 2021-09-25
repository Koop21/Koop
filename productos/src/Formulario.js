import react from "react";
import './Formulario.css';

function Formulario(props){
    return(
        <div class="container">
            <div class="form_top">
                <h2>Registro de Productos</h2>
            </div>
            <hr />
            <div className="form_reg">
                <label for="code">Código del Producto</label>
                <input className="input" type="number" id="code" required min="1" max="1000000"></input>
                <label for="descripcion">Descripción del Producto</label>
                <textarea className="descripcion" id="descripcion"  required autofocus minlength="5" maxlength="100" size="102"></textarea>
                <label for="value">Valor Unitario del Producto</label>
                <input className="input" type="number" id="value" required autofocus min="1000" max="1000000"></input>
                <label for="estado">Estado del Producto</label>
                <select name="Estado" id="estado" required autofocus>
                    <option value="" selected></option>
                    <option value="Disponible">Disponible</option>
                    <option value="No Disponible">No Disponible</option>
                </select>
                <div className="btn_form">
                    <input class="btn_submit" type="submit" value="Registrar"></input>
                    <input class="btn_reset" type="reset" value="Cancelar"></input>
                </div>
            </div>
        </div>

    );
}

export default Formulario;