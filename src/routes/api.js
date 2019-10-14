import RegisterController from "../controllers/registerController";
import NotificationsController from "../controllers/notificationsController";
import StudentsController from "../controllers/studentController";

import { Router } from "express";

const router = new Router();

// Students
router.post("/suspend", StudentsController.suspendStudent);
router.get("/commonstudents", StudentsController.findCommonStudents);

// Register
router.post("/register", RegisterController.registerTeachersToStudents);

// Notifications
router.post("/retrievefornotifications", NotificationsController.retrieveForNotifications);

export default router
