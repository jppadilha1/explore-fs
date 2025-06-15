import { localdb } from "../../infra/localdb.js";
import jwt from "jsonwebtoken";

export function loginUser(app) {
  app.post("/access", (req, reply) => {
    const { email } = req.body;

    const user = localdb.findUser(email);

    if (!user) {
      return reply.status(500).send("User undefined");
    }

    const token = jwt.sign({ user: user.name }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return reply.status(200).send(token);
  });
}
