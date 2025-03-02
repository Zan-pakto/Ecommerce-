const zod = require("zod");
const signup = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(6),
});
const login = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});
module.exports = { signup, login };
