import { Router } from "express";
import { CreateCardController } from "../modules/card/useCases/createCard/CreateCardController";
import { DeleteCardController } from "../modules/card/useCases/deleteCard/DeleteCardController";
import { PayCardController } from "../modules/card/useCases/payCard/PayCardController";
import { GetAllUserCardsController } from "../modules/card/useCases/getAllUserCards/getAllUserCardsController";
import { GetCardDetailsController } from "../modules/card/useCases/getCard/getCardDetailsController";

const createCardController = new CreateCardController();
const deleteCardController = new DeleteCardController();
const payCardController = new PayCardController();
const getAllUserCardsController = new GetAllUserCardsController();
const getCardDetailsController = new GetCardDetailsController();
const cardRoutes = Router();

cardRoutes.post("/:userId", createCardController.handle);
cardRoutes.delete("/:userId/:cardId", deleteCardController.handle);
cardRoutes.post("/:cardId/pay", payCardController.handle);
cardRoutes.get("/:userId", getAllUserCardsController.handle);
cardRoutes.get("/:cardId", getCardDetailsController.handle);

export { cardRoutes };
