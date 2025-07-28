import { Router } from "express";
import { userRoutes } from "./user.routes";
import { cardRoutes } from "./card.routes";
import { familyRoutes } from "./family.routes";
// import { authRoutes } from "./auth.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/card", cardRoutes);
routes.use("/family", familyRoutes);
// routes.use("/auth", authRoutes);

export { routes };
