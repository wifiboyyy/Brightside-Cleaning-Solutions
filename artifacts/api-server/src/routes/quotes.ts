import { Router, type IRouter } from "express";
import { SubmitQuoteBody } from "@workspace/api-zod";
import { db, quotesTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/quotes", async (req, res) => {
  const parsed = SubmitQuoteBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input", details: parsed.error.issues });
    return;
  }

  const { name, email, phone, service, address, message } = parsed.data;

  const [quote] = await db.insert(quotesTable).values({
    name,
    email,
    phone,
    service,
    address,
    message: message ?? null,
  }).returning();

  res.status(201).json({
    id: quote.id,
    message: "Thank you! We'll be in touch within 24 hours with your free quote.",
    createdAt: quote.createdAt,
  });
});

export default router;
