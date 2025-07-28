import { Router } from "express";
import { CreateFamilyController } from "../modules/family/useCases/createFamily/CreateFamilyController";

const createFamilyController = new CreateFamilyController();
const familyRoutes = Router();

familyRoutes.post("/:userId", createFamilyController.handle);

export { familyRoutes };
