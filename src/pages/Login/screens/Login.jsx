// pages/Login.jsx
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "../screens/Login.css";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="gradient-bg">
      <div className="gradient-animation" />
      <Box className="login-form">
        <div className="logo-container">
          <img
            className="logo-image"
            src="https://avatars.githubusercontent.com/u/110560590?v=4"
            alt="Logo"
          />
        </div>

        <h1 className="portfolio-name">
          Portfolio <br /> de <br /> Gastón Ezequiel Abelardo
        </h1>

        <div className="especialization">
          Técnico en <br />
          <TypeAnimation
            sequence={["Electrónica", 1500, "Programación informática", 1500]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <Button
          className="button-gradient"
          variant="contained"
          fullWidth
          onClick={() => navigate("/home")}
          sx={{
            mt: 4,
            py: 2,
            fontSize: "1.1rem",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
            },
          }}
        >
          Conocer más
        </Button>
      </Box>
    </div>
  );
}
