import express from "express";
import { getUserData, storeRecentsearchedCities } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.get('/', protect, getUserData);
userRouter.post('/store-recent-search', protect, storeRecentsearchedCities);



export default userRouter;