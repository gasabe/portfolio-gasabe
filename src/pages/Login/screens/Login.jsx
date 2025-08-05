import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../screens/Login.css";

const logo = "https://avatars.githubusercontent.com/u/110560590?v=4";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/experience");
  };

  return (
    <div className="layout-content layout-content--login gradient-bg">
      <div className="gradient-animation"></div>

      <Box className="login-form">
      <div class="logo-container">
        <div class="logo-frame">
          <img class="logo-image" src= {logo} alt="Logo" />
        </div>
      </div>
        <Button
          className="button-gradient"
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            mt: 4,
            py: 2,
            fontSize: "1.1rem",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "white",
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

export default Login;
