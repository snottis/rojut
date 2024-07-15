import { googleAuth, revokeToken } from "@hono/oauth-providers/google";
import { Hono } from "hono";
import type { Bindings } from "@/bindings";

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "/google",
  googleAuth({
    scope: ["openid", "email"],
    prompt: "select_account",
  })
);

app.get("/google", (c) => {
  const token = c.get("token");
  const grantedScopes = c.get("granted-scopes");
  const user = c.get("user-google");

  return c.json({
    token,
    grantedScopes,
    user,
  });
});
export default app;
