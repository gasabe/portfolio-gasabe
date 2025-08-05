import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "../styles/Header.css";

const links = [
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "about", label: "Sobre mí" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "/login"; // recarga la app y se redirige
  };

  return (
    <header className="header">
      <h1 className="header-title">Portfolio</h1>
      <nav className="nav-links">
        {links.map(({ id, label }) => (
          <NavLink
            key={id}
            to={`/home/${id}`}
            className={({ isActive }) =>
              `nav-button ${isActive ? "active" : ""}`
            }
            style={{ textDecoration: "none" }}
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          onClick={() => {handleLogout()}}
          to="/login"
          className="nav-button logout-button"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <LogoutIcon fontSize="small" />
          Salir del Portfolio
        </NavLink>
      </nav>
    </header>
  );
}
