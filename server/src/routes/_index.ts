import express from "express";
import exampleRouter from "./example";
import userRouter from "./user";
import path from "path";
import fs from "fs";

const router = express.Router();

router.use("/example", exampleRouter);
router.use("/user", exampleRouter);

function registerRoutesDynamically() {
  const directory = path.dirname(path.join(__dirname, "routes"));
  const filename = path.basename(__dirname);
  let paths: string[] = [];

  try {
    const files = fs.readdirSync(directory);
    const filteredFiles = files.filter((file) => file !== filename);
    paths = filteredFiles;
  } catch (err) {
    console.error("Error reading directory:", err);
  }

  paths.forEach((path) => {
    import(`./${path}`).then((routeRouter) => {
      router.use(`/${path}`, routeRouter.default);
    });
  });
}

router.get("/", (req, res) => {
  res.send(
    `Backend running successfully on ${
      req.protocol + "://" + req.get("host") + req.originalUrl
    }`
  );
});

registerRoutesDynamically();

export default router;
