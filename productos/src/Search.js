import React from "react";

function Search(props){
    return(
        <div>
            <label for="code">Ingrese el Código del Producto</label>
            <input type="number" id="code" required min="1" max="1000000"></input>
            <button className="btnsearch">Buscar Producto</button>
        </div>
    );


}

export default Search;