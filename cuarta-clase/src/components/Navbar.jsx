import { Link, NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";

function Navbar(){

    const { dark, toggleTheme } = useTheme();
    return (
        <div
            style={{
                padding: "20px",
                background: dark ? "#222" : "#ddd",
                color: dark ? "white" : "black"
            }}
        >
                <Link to="/">Filtros</Link>
                <NavLink to="/lista" style={({ isActive })=> ({
                    fontWeight: isActive ? 'bold': 'normal', color: isActive ? 'blue' : 'black'
                })}>Lista completa</NavLink>
                <Link to="/formulario">Formulario</Link>
                <Link to="/producto/:2" >Detalle</Link>
                <Link to="/blog">Blog</Link>

                <button onClick={toggleTheme}>
                    Cambiar tema
                </button>
        </div>
    )
}

export default Navbar;