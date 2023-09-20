import { Router } from "express";
import {
  signin,
  signup,
  getAllProfiles,
  getProfile,
  deleteProfile,
} from "../controllers/auth.controller.js";

import { schemaValidation } from "../middlewares/validator.middlewares.js";
import { loginSchema } from "../schemas/auth.schema.js";

const Routes = Router();

Routes
  .post("/signin", schemaValidation(loginSchema), signin)
  .post("/signup", signup)
  .get("/", getAllProfiles)
  .get("/:id", getProfile)
  .delete("/:id", deleteProfile)

export default Routes;
