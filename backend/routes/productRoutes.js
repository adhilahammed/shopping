import { PrismaClient } from "@prisma/client";
import express from "express";
import { authenticateToken } from "../middlewares/auth.js";

const prisma = new PrismaClient();
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const allProducts = await prisma.product.findMany({
      select: {
        id: true,
        image: true,
        name: true,
        color: true,
        price: true,
      },
    });
    res.json(allProducts);
  } catch (error) {}
});

productRouter.post("/rating", authenticateToken, async (req, res) => {
  try {
    const { rateCount, review, productId } = req.body;
    const userId = req.user.userId;
    const rating = await prisma.rating.create({
      data: {
        rateCount,
        review,
        productId,
        userId,
      },
    });

    res.json(rating);
  } catch (error) {
    console.log("fffff");

    res.json(error);
  }
});

productRouter.put("/rating", authenticateToken, async (req, res) => {
  try {
    const { rateCount, review, productId, id } = req.body;

    const rating = await prisma.rating.update({
      where: {
        id,
      },
      data: {
        rateCount,
        review,
      },
    });
    res.json(rating);
  } catch (error) {
    res.json(error);
  }
});

productRouter.get("/:id", async (req, res) => {
  console.log(req.params.id, "ss");

  try {
    const id = req.params.id;
    const allProducts = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        image: true,
        name: true,
        color: true,
        price: true,
        reviews: true,
      },
    });

    const totalRatingsCount = allProducts.reviews.length;
    const ratingsSum = allProducts.reviews.reduce(
      (sum, item) => sum + item.rateCount,
      0
    );
    const averageRating = ratingsSum / totalRatingsCount;

    const response = {
      totalRatingsCount,
      averageRating,
      allProducts,
    };

    console.log(totalRatingsCount, ratingsSum);

    res.json(response);
  } catch (error) {
    console.log("hai");

    res.json(error);
  }
});

export default productRouter;
