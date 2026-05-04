import { Link, NavLink } from "react-router-dom";

function Navbar(){
    return (
        <div>
                <Link to="/">Filtros</Link>
                <NavLink to="/lista" style={({ isActive })=> ({
                    fontWeight: isActive ? 'bold': 'normal', color: isActive ? 'blue' : 'black'
                })}>Lista completa</NavLink>
        </div>
    )
}

export default Navbar;