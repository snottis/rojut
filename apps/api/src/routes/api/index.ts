import { Hono } from "hono";
import v1 from "./v1";
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.route("/v1", v1);

export default app;
