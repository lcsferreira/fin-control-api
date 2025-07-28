import { Router } from "express";
import { CreateCardController } from "../modules/card/useCases/createCard/CreateCardController";
import { DeleteCardController } from "../modules/card/useCases/deleteCard/DeleteCardController";

const createCardController = new CreateCardController();
const deleteCardController = new DeleteCardController();
const cardRoutes = Router();

cardRoutes.post("/:userId", createCardController.handle);
cardRoutes.delete("/:userId/:cardId", deleteCardController.handle);

export { cardRoutes };
