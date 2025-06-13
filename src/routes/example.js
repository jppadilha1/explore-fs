import { isAuth } from "./../middleware/is-auth.js";

export function exampleHook(app) {
  app.get("/examplehook", { onRequest: [isAuth] }, (req, reply) => {
    return reply
      .status(200)
      .send("Hello this is my example of protected route");
  });
}
