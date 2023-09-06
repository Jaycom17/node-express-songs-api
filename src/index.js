import express from "express";
import * as swaggerUi from "swagger-ui-express";

import { PORT } from "./config.js";
import router from "./routes/songs.routes.js";
import { swaggerSpec } from "./swagger.js";

const app = express();

app.use(express.json());

app.use("/api", router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
