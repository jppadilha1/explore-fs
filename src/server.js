import Fastify from "fastify";
import { registerUser } from "./routes/register.js";
import { loginUser } from "./routes/login.js";
import { exampleHook } from "./routes/example.js";

const app = Fastify();

app.get("/", (req, reply) => {
  return reply.send("Wassup!");
});

app.register(registerUser);
app.register(loginUser);
app.register(exampleHook);

app.listen({ port: 3000 }, function (err, address) {
  console.log(`Http server is running in ${address}`);
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
