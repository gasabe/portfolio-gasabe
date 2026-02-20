# Portfolio — Gastón Ezequiel Abelardo

Portfolio personal desarrollado con **React 19** y **Vite 7**, donde presento mi experiencia profesional, proyectos, formación académica y datos de contacto.

## Demo

La aplicación inicia con una pantalla de bienvenida animada y, al hacer clic en **"Conocer más"**, se accede al contenido principal del portfolio.

## Tecnologías

| Categoría | Herramientas |
|---|---|
| Framework | React 19, Vite 7 |
| Routing | React Router DOM v7 (rutas anidadas) |
| UI Components | Material UI v7 (AppBar, Drawer, Button, etc.) |
| Estilos | CSS custom properties, Tailwind CSS v4 |
| Animaciones | react-type-animation, CSS keyframes |
| Carrusel | react-slick + slick-carousel |

## Estructura del proyecto

```
src/
├── App.jsx                    # Definición de rutas
├── main.jsx                   # Entry point (Vite)
├── index.css                  # Estilos globales
└── pages/
    ├── Components/
    │   ├── Card.jsx           # Tarjeta de proyecto reutilizable
    │   └── ProjectModal.jsx   # Modal con carrusel de capturas
    ├── Home/
    │   ├── Home.jsx           # Layout principal (Header + Outlet + Footer)
    │   ├── components/
    │   │   ├── Header.jsx     # Barra de navegación superior
    │   │   ├── Footer.jsx     # Pie de página
    │   │   ├── NavDesktop.jsx # Navegación horizontal (desktop)
    │   │   └── NavDrawer.jsx  # Navegación lateral (mobile)
    │   ├── pages/
    │   │   ├── Experience.jsx # Experiencia laboral y habilidades
    │   │   ├── Projects.jsx   # Galería de proyectos
    │   │   ├── About.jsx      # Biografía y formación académica
    │   │   └── Contact.jsx    # Links de contacto
    │   └── styles/            # CSS por componente
    └── Login/
        └── screens/
            ├── Login.jsx      # Pantalla de bienvenida
            └── Login.css
```

## Secciones

- **Experiencia**: Historial laboral con descripción de roles y una grilla de habilidades técnicas (Frontend, Backend, Bases de datos).
- **Proyectos**: Tarjetas con imagen, descripción y modal detallado con carrusel de capturas y enlace a GitHub.
- **Sobre mí**: Biografía, formación académica (UNSAM, EET N°1) e idiomas.
- **Contacto**: Links directos a WhatsApp, Gmail, LinkedIn y GitHub.

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/gasabe/portfolio-gasabe.git
cd portfolio-gasabe

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualización del build |

## Autor

**Gastón Ezequiel Abelardo** — Técnico en Programación Informática (UNSAM) · Técnico en Electrónica (EET N°1)

- [GitHub](https://github.com/gasabe)
- [LinkedIn](https://www.linkedin.com/in/gaston-ezequiel-abelardo-680b12187/)


https://github.com/user-attachments/assets/3e3438bd-51d9-4ce2-9e1b-7d398a46dd19


https://github.com/user-attachments/assets/b8a7cb5a-591a-4189-9608-26196f5d7fc0



https://github.com/user-attachments/assets/1b1f2862-b605-4866-af06-7bab5bb03cec



https://github.com/user-attachments/assets/d6fd0781-f5e0-4add-9337-9eb6e78aed0c



https://github.com/user-attachments/assets/b8ca5a29-be27-4dfb-a977-3691cffd2922
