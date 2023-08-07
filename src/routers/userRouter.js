import { Router } from "express";

const router = Router();

import userController from "../controllers/userController.js";

router.get("/user", userController.show);
router.get("/user/:id", userController.findOne);
router.post("/user", userController.create);

router.put("/user/:id", userController.update);

router.delete("/user/:id", userController.remove);

export default router;