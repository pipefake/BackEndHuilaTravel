import { Router } from "express";
import { testTouristPlan } from "../controllers/touristPlan.js"
const router = Router();

router.get('/test-testTouristPlan', testTouristPlan);

//Exportar el Router
export default router;

