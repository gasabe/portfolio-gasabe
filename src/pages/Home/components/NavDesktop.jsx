import React from "react";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "../styles/NavDesktop.css"; 

export default function NavDesktop({ links = [], onLogout = () => {} }) {
  return (
    <nav className="nav-links-desktop">
      {Array.isArray(links) &&
        links.map(({ id, label }) => (
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

      <button
        type="button"
        className="nav-button logout-button"
        onClick={onLogout}
        title="Salir"
      >
        <LogoutIcon fontSize="small" />
        <span>Salir</span>
      </button>
    </nav>
  );
}
