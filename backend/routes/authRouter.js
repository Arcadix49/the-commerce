import express from "express";
import {login, register} from "../controllers/authController.js";
import {log, reg} from "../controllers/userController.js";


const router = express.Router();

router.get('/register', reg)
router.post('/register', register)

router.get('/login', log)
router.post('/login', login)

export default router;