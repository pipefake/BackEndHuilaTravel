import { Router } from "express";
import { testLocation } from "../controllers/location.js";
const router = Router();

router.get('/test-location', testLocation);

//Exportar el Router
export default router;
