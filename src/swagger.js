import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Songs API",
            version: "1.0.0",
            description: "A simple API to Create, Read, Update and Delete songs"
        }
    },
    apis: ["./src/routes/*.routes.js"]
}

export const swaggerSpec = swaggerJSDoc(options);