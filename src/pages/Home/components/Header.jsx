import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import NavDesktop from "../components/NavDesktop.jsx";
import NavDrawer from "../components/NavDrawer.jsx";
import "../styles/Header.css";

const links = [
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "about", label: "Sobre mí" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.dispatchEvent(new Event("storage"));
    navigate("/login", { replace: true });
  };

  return (
    <>
      <AppBar position="sticky" elevation={0} className="header-appbar">
        <Toolbar className="header-toolbar">
          <IconButton
            edge="start"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="hamburger-btn"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className="header-title">
            Portfolio
          </Typography>

          <div className="header-actions-desktop">
            <NavDesktop links={links} onLogout={handleLogout} />
          </div>

          <div className="header-actions-mobile">
            <IconButton onClick={handleLogout} aria-label="Salir">
              <LogoutIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <NavDrawer
        open={open}
        onClose={() => setOpen(false)}
        links={links}
        onNavigate={() => setOpen(false)}
        onLogout={handleLogout}
      />
    </>
  );
}
