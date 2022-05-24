import { Router } from "express";
import { Article } from "./interfaces/article";

const articles: Article[] = [
  {
    name: "Pelle",
    price: 40,
    qty: 5,
  },
  {
    name: "Pelle3",
    price: 40,
    qty: 5,
  },
  { name: "Pelleeeee2", price: 70, qty: 5 },
];

const app = Router();

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
