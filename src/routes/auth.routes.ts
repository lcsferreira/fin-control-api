import { Router } from "express";
import { LoginController } from "../modules/auth/useCases/Login/LoginController";
import { ForgotPasswordController } from "../modules/auth/useCases/ForgotPassword/ForgotPasswordController";
import { AuthorizerController } from "../modules/auth/useCases/Authorizer/AuthorizerController";
import { ResetPasswordController } from "../modules/auth/useCases/ResetPassword/ResetPasswordController";

const loginController = new LoginController();
const authorizerController = new AuthorizerController();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

const authRoutes = Router();

authRoutes.post("/login", loginController.handle);
authRoutes.post("/forgot-password", forgotPasswordController.handle);
authRoutes.get("/authorizer", authorizerController.handle);
authRoutes.post("/reset-password", resetPasswordController.handle);

export { authRoutes };
