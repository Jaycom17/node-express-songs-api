# API de Canciones

Bienvenido a la API de Canciones. Esta API te permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) en una base de datos MySQL para gestionar canciones. Además.

## Tecnologías Utilizadas

- Express.js: Framework de Node.js para construir la API.
- mysql2: Conexión a la base de datos MySQL.
- Zod: Validación de esquemas para asegurar la integridad de los datos.
- Puppeteer: Realiza web scraping para obtener enlaces de YouTube e imágenes.
- Cors: Manejo de peticiones desde distintas direcciones

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Jaycom17/node-express-songs-api.git
   cd api-canciones

2. Instala las dependencias

    ```bash
    npm i

3. Crea un archivo .env y configura las variables de entorno

4. Inicia el servidor

    ```bash
    npm start

## Endpoints de la API
1. POST /api/songs: Crea una nueva canción en la base de datos.
2. GET /api/songs: Obtiene la lista de todas las canciones registradas.
3. GET /api/songs/:id: Obtiene detalles de una canción específica por su ID.
4. PUT /api/songs/:id: Actualiza la información de una canción por su ID.
5. DELETE /api/songs/:id: Elimina una canción por su ID.

## Documentación Swagger
La documentación Swagger para esta API se encuentra disponible en la ruta /api-docs.