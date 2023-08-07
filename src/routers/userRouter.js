import { Router } from "express";

const router = Router();

import userController from "../controllers/userController.js";

router.get("/user", userController.show);

router.post("/user", userController.create);

router.put("/user", userController.update);

router.delete("/user", userController.remove);

export default router;