import { Hono } from "hono";
import routes from "./routes";

type Bindings = {
  DB: D1Database;
};
const app = new Hono<{ Bindings: Bindings }>();

app.route("/", routes);

export default app;
