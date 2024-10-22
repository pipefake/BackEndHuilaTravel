import { Router } from "express";
import { testReservation } from "../controllers/reservation.js";
const router = Router();

router.get('/test-reservation', testReservation);

//Exportar el Router
export default router;
