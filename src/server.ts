import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();
app.use(
  cors({
    // origin: "http://localhost:3333",
  })
);
app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log("HTTP server running in port http://localhost:3333");
});
