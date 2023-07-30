import express from "express";
import User from "../models/User";
const router = express.Router();

router.get("/:id/registration/status", async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ auth0_uid: id });

  if (user) {
    const status =
      user.auth0_uid &&
      user.picture &&
      user.name &&
      user.gender &&
      user.age &&
      user.weight &&
      user.height;

    return res.status(200).send({ completed: Boolean(status) });
  } else {
    return res.sendStatus(400);
  }
});

router.post("/new", async (req, res) => {
  console.log(req.body);
  const { auth0_uid, picture } = req.body;

  if (!(auth0_uid && picture)) {
    return res.sendStatus(400);
  }

  const user = await User.findOne({ auth0_uid, picture });
  if (!user) {
    const newUser = new User({ auth0_uid, picture });

    await newUser.save();
    return res.status(200).send(newUser);
  } else {
    return res.sendStatus(400);
  }
});

router.put("/:id/update", async (req, res) => {
  const { id } = req.params;
  try {
    await User.findOneAndUpdate({ auth0_uid: id }, req.body);
    return res.sendStatus(200);
  } catch (_) {
    return res.sendStatus(500);
  }
});

export default router;
