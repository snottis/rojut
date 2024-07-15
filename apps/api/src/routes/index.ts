import { Hono } from "hono";
import api from "./api";
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.route("/api", api);

export default app;
