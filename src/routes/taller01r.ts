import { Router, Request, Response } from "express";
import { convertidorTemp, resolvedor, peorParidad, mejorParidad} from "../controllers/taller01";

const router = Router();

router.post("/convertidor_temp", (req: Request, res: Response) => {
  const { temp } = req.body;
  const resultado = convertidorTemp(temp);
  res.json({ resultado });
});

router.post("/resolvedor", (req: Request, res: Response) => {
  const { a, b, c, signo } = req.body;
  const resultado = resolvedor(a, b, c, signo);
  res.json({ resultado });
});

router.post("/peor_paridad", (req: Request, res: Response) => {
  const { n } = req.body;
  const resultado = peorParidad(n);
  res.json({ resultado });
});

router.post("/mejor_paridad", (req: Request, res: Response) => {
  const { n } = req.body;
  const resultado = mejorParidad(n);
  res.json({ resultado });
});

export default router;