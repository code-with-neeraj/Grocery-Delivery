import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

// controllers/userController.ts
export const getAccountStats = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const userId = req.user.id;
  console.log("USER =>", req.user);
  console.log("USER ID =>", userId);

  try {
    const totalOrders = await prisma.order.count({
      where: {
        userId,
      },
    });

    const totalAddresses = await prisma.address.count({
      where: {
        userId,
      },
    });

    const orders = await prisma.order.findMany({
      where: {
        userId,
      },
      select: {
        total: true,
      },
    });

    const totalSpending = orders.reduce(
      (sum, order) => sum + order.total,
      0
    );

    return res.status(200).json({
      totalOrders,
      totalAddresses,
      totalSpending,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};