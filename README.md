# Colombia Turismo

Sitio web de turismo en Colombia con soporte multilingüe.

## Características

- Interfaz web responsive
- Soporte multilingüe (Español e Inglés)
- Galería de imágenes de destinos turísticos
- Información sobre actividades y rutas turísticas
- Formulario de contacto

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MongoDB
- i18next para internacionalización

## Requisitos Previos

- Node.js (v14 o superior)
- MongoDB
- Git

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/colombia-turismo.git
cd colombia-turismo
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con:
```
PORT=8080
MONGODB_URI=mongodb://localhost:27017/colombia_turismo
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
colombia-turismo/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── src/
│   ├── locales/
│   │   ├── es/
│   │   └── en/
│   └── js/
├── server.js
└── package.json
```

## Internacionalización

El sitio utiliza i18next para manejar múltiples idiomas. Los archivos de traducción se encuentran en:
- `src/locales/es/` - Traducciones en español
- `src/locales/en/` - Traducciones en inglés

## Despliegue

### GitHub Pages

1. Crear un repositorio en GitHub
2. Subir el código:
```bash
git init
git add .
git commit -m "Primer commit"
git remote add origin https://github.com/tu-usuario/colombia-turismo.git
git push -u origin main
```

3. En la configuración del repositorio, ir a "Pages"
4. Seleccionar la rama main como fuente
5. El sitio estará disponible en: `https://tu-usuario.github.io/colombia-turismo`

### Netlify

1. Crear una cuenta en Netlify
2. Conectar con el repositorio de GitHub
3. Configurar el build:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. El sitio estará disponible en: `https://tu-sitio.netlify.app`

## Desafíos y Aprendizajes

### Internacionalización

1. **Desafíos**:
   - Mantener consistencia en las traducciones
   - Manejar contenido dinámico
   - Optimizar el rendimiento con múltiples idiomas

2. **Soluciones**:
   - Uso de claves de traducción consistentes
   - Implementación de lazy loading para archivos de idiomas
   - Caché de traducciones en el navegador

3. **Aprendizajes**:
   - Importancia de la estructura de archivos de traducción
   - Técnicas de optimización para contenido multilingüe
   - Mejores prácticas en la gestión de idiomas

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles. 