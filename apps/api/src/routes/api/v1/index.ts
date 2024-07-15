import { Hono } from "hono";
import auth from "./auth";
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.route("/auth", auth);

export default app;
