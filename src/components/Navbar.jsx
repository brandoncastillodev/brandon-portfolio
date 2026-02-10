import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const dark = useSelector((state) => state.theme.dark);
  const esp = useSelector((state) => state.lang.esp);

  return (
    <nav className={dark ? "nav-dark" : "nav-light"}>
      <div className={dark ? "links links-dark" : "links links-light"}>
        <Link to="/">{esp ? "hogar" : "home"}</Link>
        <Link to="/projects">{esp ? "proyectos" : "projects"}</Link>
        <Link to="/videos">videos</Link>
        <Link to="/profile">{esp ? "perfil" : "profile"}</Link>
        <Link to="/contact">{esp ? "contacto" : "contact"}</Link>
      </div>
    </nav>
  );
}

export default Navbar;
