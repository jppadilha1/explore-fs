export function isAuth(req, reply, done) {
  const { authorization } = req.headers;

  if (authorization != "token") {
    return reply.status(403).send("Unauthorized");
  } else {
    done(); // its same as next in express
  }
}
