import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const allProducts = await prisma.product.findMany({});
    res.json(allProducts);
  } catch (error) {}
});

export default productRouter;
