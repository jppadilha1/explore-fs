import { localdb } from "../../infra/localdb.js";

export function registerUser(app) {
  app.post("/register", (req, reply) => {
    const { name, email } = req.body;

    localdb.create(name, email);

    reply.status(201).send("Created");
  });
}
