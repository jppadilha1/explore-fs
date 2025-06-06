import Fastify from "fastify";
import { createUser } from "./routes/post.js";

const app = Fastify();

app.get("/", (req, reply) => {
  return reply.send("Wassup!");
});

app.register(createUser);

app.listen({ port: 3000 }, function (err, address) {
  console.log(`Http server is running in ${address}`);
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
