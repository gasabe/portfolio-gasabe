import { Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import "../screens/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home'); // Navegación directa sin localStorage
  };

  return (
    <div className="layout-content layout-content--login gradient-bg">
      <div className="gradient-animation"></div>

      <Box className="login-form">
        <div className="logo-container">
          <div className="logo-frame">
            <img className="logo-image" src="https://avatars.githubusercontent.com/u/110560590?v=4" alt="Logo" />
          </div>
        </div>
        <Button
          className="button-gradient"
          variant="contained"
          fullWidth
          onClick={handleEnter}
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