import { Router } from "express";
import {
  getAllAreas,
  getArea,
  createArea,
  updateArea,
  updatePersonal,
  deletePersonal,
  deleteArea,
} from "../controllers/area.controller.js";
import { schemaValidation } from "../middlewares/validator.middlewares.js";
import { areaSchema } from "../schemas/area.schema.js";

const Routes = Router();

Routes.get("/", getAllAreas)
  .get("/:id", getArea)
  .post("/", schemaValidation(areaSchema), createArea)
  .patch("/:id", updateArea)
  .put("/personal", updatePersonal)
  .delete("/personal/:areaId/:userId", deletePersonal)
  .delete("/:id", deleteArea);

export default Routes;
