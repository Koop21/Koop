
import './Menu.css';


function Menu (props){
    return(
        <nav id="menu">
            <ul className="menuprincipal">
                <li><a href="#"><span class="home"></span>Inicio</a></li>
                <li><a href="#">Ventas</a></li>
                <li className="submenu">
                    <a href="#">Productos</a>
                    <ul className="children">
                        <li><a href="./" target="_blank">Agregar Producto</a></li>
                        <li><a href="./consulta.js" target="_blank">Consultar Producto</a></li>
                        <li><a href="#">Lista de Productos</a></li>
                    </ul>
                </li>
                <li><a href="#">Usuarios</a></li>
                <li className="item-r"><a href="#">Log Out</a></li>
            </ul>
        </nav>
    );
}

export default Menu;