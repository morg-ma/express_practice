import { Router } from "express"; 
import { toNodeHandler } from 'better-auth/node';
import { auth } from "../utils/auth";
import * as authHandler from '../handlers/auth';
import { isAuthenticated } from "../middlewares/isAuthenticated";
import express from "express";

const router = Router();

router.all('/api/auth/*', toNodeHandler(auth));
router.use(express.json());

router.get("/api/login", authHandler.signIn);
router.post("/api/logout", authHandler.logOut);
router.get("/api/auth/callback/google",authHandler.callbackGoogle);
router.post("/api/verifyPhone", authHandler.verifyPhone);
router.get("/api/protected", isAuthenticated, authHandler.helloAuth);
router.get("/api/session", authHandler.getSession);

export default router;