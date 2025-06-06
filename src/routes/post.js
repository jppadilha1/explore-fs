import { localdb } from "./../../infra/localdb.js";

export function createUser(app) {
  app.post("/create", (req, reply) => {
    const { name, email } = req.body;

    localdb.create(name, email);

    reply.status(201).send("Created");
  });
}
