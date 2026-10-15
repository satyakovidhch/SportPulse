import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-lg">
            <h4 className="fw-bold"> Sports Pulse </h4>
            <div className="ms-auto">
                <Link className="nav-link d-inline mx-2" to="/"> Home </Link>
                <Link className="nav-link d-inline mx-2" to="/about"> About </Link>
                <Link className="nav-link d-inline mx-2" to="/woman"> Woman Section </Link>
                <Link className="nav-link d-inline mx-2" to="/man"> Man Section </Link>
                <Link className="nav-link d-inline mx-2" to="/register"> Register </Link>
            </div>
        </nav>
    )
}
export default Navbar