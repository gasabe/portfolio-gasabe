import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
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

  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "var(--primary-darker)",
          color: "var(--primary-light)",
          borderBottom: "1px solid var(--neutral-800)",
        }}
      >
        <Toolbar className="header-toolbar">
          {/* Botón hamburguesa (mobile) */}
          <IconButton
            edge="start"
            onClick={toggleDrawer(true)}
            className="hamburger-btn"
            aria-label="Abrir menú"
            size="large"
            sx={{ color: "var(--primary-light)" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Título / marca */}
          <Typography
            variant="h6"
            className="header-title-text"
            sx={{ fontWeight: 700 }}
          >
            Portfolio
          </Typography>

          {/* Links de escritorio */}
          <nav className="nav-links-desktop">
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

            <button
              type="button"
              className="nav-button logout-button"
              onClick={handleLogout}
              title="Salir"
            >
              <LogoutIcon fontSize="small" />
              <span>Salir</span>
            </button>
          </nav>
        </Toolbar>
      </AppBar>

      {/* Drawer (menú lateral mobile) */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "var(--primary-darkest)",
            color: "var(--primary-contrast)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 1.5,
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "var(--primary-name)", fontWeight: 700 }}
          >
            Menú
          </Typography>
          <IconButton onClick={toggleDrawer(false)} aria-label="Cerrar menú">
            <CloseIcon sx={{ color: "var(--primary-light)" }} />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "var(--neutral-800)" }} />

        <List sx={{ py: 0 }}>
          {links.map(({ id, label }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                component={NavLink}
                to={`/home/${id}`}
                onClick={toggleDrawer(false)}
                className="drawer-item"
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider sx={{ my: 1, borderColor: "var(--neutral-800)" }} />

          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} className="drawer-item">
              <LogoutIcon
                fontSize="small"
                style={{ marginRight: 8, opacity: 0.9 }}
              />
              <ListItemText
                primary="Salir del Portfolio"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
