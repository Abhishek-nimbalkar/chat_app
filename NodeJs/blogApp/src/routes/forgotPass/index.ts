import express, { Request, Response } from "express";
import Token from "../../models/token";
import Users from "../../models/user";
import crypto from "crypto";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await Users.findOne({ emailId: email });

  if (!user) {
    throw new Error("User does not exist");
  }
  let token = await Token.findOne({ userId: user._id });
  if (token) {
    await token.deleteOne();
  }
  let resetToken = crypto.randomBytes(32).toString("hex");
  await new Token({
    userId: user._id,
    token: resetToken,
    createdAt: Date.now(),
  }).save();

  const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
  sendEmail(
    user.email,
    "Password Reset Request",
    { name: user.name, link: link },
    "./template/requestResetPassword.handlebars"
  );
  return link;
});

export default router;
