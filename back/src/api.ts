import { json, Router } from "express";
import { serialize } from "v8";
import { Article } from "./interfaces/article";
import { v4 as uuidv4 } from "uuid";

let articles: Article[] = [
  {
    id: "1",
    name: "Pelle",
    price: 40,
    qty: 5,
  },
  {
    id: "2",
    name: "Pelle3",
    price: 40,
    qty: 5,
  },
  { id: "3", name: "Pelleeeee2", price: 70, qty: 5 },
];

const app = Router();

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(json());

app.post("/articles", (req, res) => {
  try {
    const article = req.body as Article;
    article.id = uuidv4();
    articles.push(article);
    res.status(201).end();
  } catch (err) {
    console.log("err:", err);
  } finally {
    res.status(500).end();
  }
});

app.delete("/articles", (req, res) => {
  try {
    const ids = req.body as string[];
    console.log("ids:", ids);
    articles = articles.filter((a) => !ids.includes(a.id));
    res.status(204).end();
  } catch (err) {
    console.log("err:", err);
  } finally {
    res.status(500).end();
  }
});

export const api = app;
