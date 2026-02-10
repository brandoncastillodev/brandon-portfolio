import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../state/theme";

function Navbar() {
  const dark = useSelector((state) => state.theme.dark);
  const esp = useSelector((state) => state.lang.esp);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handleChange = () => {
  //     dispatch(setTheme(mediaQuery.matches));
  //   };

  //   dispatch(setTheme(mediaQuery.matches));

  //   mediaQuery.addEventListener("change", handleChange);

  //   return () => mediaQuery.removeEventListener("change", handleChange);
  // }, [dispatch]);

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
