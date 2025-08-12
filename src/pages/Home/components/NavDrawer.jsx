import React from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import "../../Home/styles/NavDrawer.css"; // Asegúrate de tener los estilos que te paso más abajo
export default function NavDrawer({
  open = false,
  onClose = () => {},
  links = [],
  onNavigate = () => {},
  onLogout = () => {},
}) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ className: "drawer-paper" }}
    >
      <Box className="drawer-header">
        <Typography variant="subtitle1" className="drawer-title">
          Menú
        </Typography>
        <IconButton onClick={onClose} aria-label="Cerrar menú" className="drawer-close-btn">
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider className="drawer-divider" />

      <List className="drawer-list">
        {Array.isArray(links) &&
          links.map(({ id, label }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                component={NavLink}
                to={`/home/${id}`}
                onClick={onNavigate}
                className="drawer-item"
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          ))}

        <Divider className="drawer-divider spacer" />

        <ListItem disablePadding>
          <ListItemButton onClick={onLogout} className="drawer-item">
            <LogoutIcon fontSize="small" className="drawer-logout-icon" />
            <ListItemText
              primary="Salir del Portfolio"
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
