import express from "express";
import User from "../models/User";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("BHAI CHAL gaya");
});

router.get("/:id/registration/status", (req, res) => {
  const { id } = req.params;

  User.findOne({ auth0_uid: id }).then((user) => {
    const status =
      user &&
      user.auth0_uid &&
      user.picture &&
      user.name &&
      user.gender &&
      user.age &&
      user.weight &&
      user.height;

    return res.status(200).send({ completed: status });
  });

  res.sendStatus(500);
});

router.post("/new", (req, res) => {
  const { auth0_uid, picture } = req.body;

  if (!(auth0_uid && picture)) {
    return res.sendStatus(400);
  }

  const newUser = new User({ auth0_uid, picture });

  newUser.save().then(() => {
    return res.status(200).send(req.body);
  });

  return res.sendStatus(500);
});

export default router;
