import { Router, Request, Response } from "express";
import { findMax, includes, sum, missingNumbers } from "../controllers/taller02";

const router = Router();

router.post("/find_max", (req: Request, res: Response) => {
  const { numeros } = req.body;
  const resultado = findMax(numeros);
  res.json({ resultado });
});

router.post("/includes", (req: Request, res: Response) => {
  const { lista, elemento } = req.body;
  const resultado = includes(lista, elemento);
  res.json({ resultado });
});

router.post("/sum", (req: Request, res: Response) => {
  const { lista } = req.body;
  const resultado = sum(lista);
  res.json({ resultado });
});

router.post("/missing_numbers", (req: Request, res: Response) => {
  const { list } = req.body;
  const resultado =missingNumbers(list);
  res.json({ resultado });
});

export default router;