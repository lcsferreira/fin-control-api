import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET || "";
import bcrypt from "bcrypt";

export class ResetPasswordUseCase {
  async execute(token: string, password: string, confirmPassword: string) {
    try {
      const decoded = jwt.verify(token, secret) as { userId: string };

      if (!decoded) {
        throw new AppError("Link expired", 400);
      }

      const user = await prisma.user.findUnique({
        where: {
          id: decoded.userId,
        },
      });

      if (!user) {
        throw new AppError("User not found", 404);
      }

      if (password !== confirmPassword) {
        throw new AppError("Passwords do not match", 400);
      }

      if (password.length < 8) {
        throw new AppError("Password must be at least 8 characters long", 400);
      }

      if (password === user.password) {
        throw new AppError(
          "New password cannot be the same as the old password",
          400
        );
      }

      const hashedPassword = await bcrypt.hash(password, 8);

      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });

      return { message: "Password reset successfully" };
    } catch (error: any) {
      if (error instanceof AppError) {
        throw error;
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw new AppError("Link expired", 400);
      }
      throw new AppError(error.message, 500);
    }
  }
}
