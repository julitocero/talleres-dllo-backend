import { Router, Request, Response } from "express";
import { desglosarString, twoSum, conversionRomana, descomposicion } from "../controllers/taller03";

const router = Router();

router.post("/desglosar_string", (req: Request, res: Response) => {
  const { cadena, tipo } = req.body;
  const resultado = desglosarString(cadena, tipo);
  res.json({ resultado });
});

router.post("/two_sum", (req: Request, res: Response) => {
  const { array, expect } = req.body;
  const resultado = twoSum(array, expect);
  res.json({ resultado });
});

router.post("/conversion_romana", (req: Request, res: Response) => {
  const { cadena } = req.body;
  const resultado = conversionRomana(cadena);
  res.json({ resultado });
});

router.post("/descomposicion", (req: Request, res: Response) => {
  const { cadena } = req.body;
  const resultado =descomposicion(cadena);
  res.json({ resultado });
});

export default router;