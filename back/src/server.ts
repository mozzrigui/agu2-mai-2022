import express from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { api } from "./api";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.use("/api", api);

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
