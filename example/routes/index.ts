import { Router } from "https://deno.land/x/oak/mod.ts";
import MidtransController from "../controllers/MidtransController.ts";
const router = new Router();
router.post("/status", MidtransController.getStatus);
router.post("/notification", MidtransController.getNotification);
router.get("/", MidtransController.index);

export default router;
