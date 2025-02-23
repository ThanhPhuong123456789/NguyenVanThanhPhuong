import express from "express";
import resourceRoutes from "./routes/resourceRoutes";
import { AppDataSource } from "./database/data-source";

const app = express();
app.use(express.json());
app.use("/resources", resourceRoutes);

AppDataSource.initialize().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});