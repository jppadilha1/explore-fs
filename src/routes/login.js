import { localdb } from "../../infra/localdb.js";

export function loginUser(app) {
  app.post("/access", (req, reply) => {
    const { email } = req.body;

    const user = localdb.findUser(email);

    if (!user) {
      return reply.status(500).send("User undefined");
    } else {
      return reply.status(200).send(user);
    }
  });
}
