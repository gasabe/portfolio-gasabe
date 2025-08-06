import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, Box, Button
} from '@mui/material';
import "../Login/screens/Login.css";

const ProjectCard = ({
  title,
  description,
  image,
  repoLink,
  sx = {},
}) => {
  const cardImage = image || NoPhoto;

  return (
    <Card
      sx={{
        width: 345,
        maxHeight: 400,
        borderRadius: 3,
        background: "linear-gradient(45deg, var(--primary-darker), var(--primary-name))",
        //border: '1px solid rgba(2, 0, 5, 0.8)',
        boxShadow: '3px 4px 15px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        color: "white", 
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 25px 15px rgba(0, 0, 0, 0.61)',
        },
        ...sx,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={cardImage}
        alt={title || 'imagen'}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {title && (
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ height: 48 }}
          >
            {title}
          </Typography>
        )}
        {description && (
          <Box sx={{ mb: 2, minHeight: 40, maxHeight: 40, overflow: 'hidden' }}>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
              {description}
            </Typography>
          </Box>
        )}
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            size="small"
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: "rgba(255,255,255,0.25)",
              }
            }}
          >
            Conocé más
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
