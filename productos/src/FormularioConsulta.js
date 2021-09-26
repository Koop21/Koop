import './FormularioConsulta.css';
import Search from './Search.js'; 

function FormularioConsulta(props){
    return(
        <div class="containerconsulta">
             <div clasName="subcontainer">
                <div className="search">
                    <Search />
                </div>
                <div className="form_reg">
                <label for="code">Código del Producto</label>
                <input className="input" type="number" id="code" disabled></input>
                <label for="descripcion">Descripción del Producto</label>
                <textarea className="descripcion" id="descripcion" disabled></textarea>
                <label for="value">Valor Unitario del Producto</label>
                <input className="input" type="number" id="value" disabled required autofocus min="1000" max="1000000"></input>
                <label for="estado">Estado del Producto</label>
                <select name="Estado" id="estado" disabled required autofocus>
                    <option value="" selected></option>
                    <option value="Disponible">Disponible</option>
                    <option value="No Disponible">No Disponible</option>
                </select>
                <div className="btn_form">
                    <input class="btn_submit" type="submit" id="btn_submit"value="Modificar"></input>
                    <input class="btn_reset" type="reset" value="Eliminar"></input>
                </div>
            </div>
            </div>
        </div>

    );
}

export default FormularioConsulta;