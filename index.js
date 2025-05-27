import express from "express";
import userRoutes from "./routes/users.js";
import accessRoutes from "./routes/access.js";
import doorsRoutes from "./routes/doors.js";
import permissionsRoutes from "./routes/permissions.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", accessRoutes);
app.use("/", doorsRoutes);
app.use("/", permissionsRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(8800, () => {
    console.log("Servidor rodando na porta 8800");
  });
}

export default app;
