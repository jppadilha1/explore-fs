import jwt from "jsonwebtoken";

export function isAuth(req, reply, done) {
  const { authorization } = req.headers;

  const verify = jwt.verify(authorization, process.env.JWT_SECRET);

  if (!verify) {
    return reply.status(403).send("Unauthorized");
  } else {
    done(); // its same as next in express
  }
}
