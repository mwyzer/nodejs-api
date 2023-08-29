import express from "express";

import RoleController from "../controllers/RoleController";
import UserController from "../controllers/UserController";

const router = express.Router();

// Role Routing

router.get("/role", RoleController.GetRole);
router.post("/role", RoleController.CreateRole);
router.post("/role/:id", RoleController.UpdateRole);
router.delete("/role/:id", RoleController.DeleteRole);
router.get("/role/:id", RoleController.GetRoleById);

//User Routing


export default router;