import express from "express";
import path from "path";
import fs from "fs";

const router = express.Router();

function registerRoutesDynamically() {
  const directory = path.dirname(__filename);
  const filename = path.basename(__filename);
  let paths: string[] = [];

  try {
    const files = fs.readdirSync(directory);
    paths = files.filter((file) => file !== filename);
  } catch (err) {
    console.error("Error reading directory:", err);
  }

  paths.forEach((routerPath) => {
    import(`./${routerPath}`).then((routeRouter) => {
      router.use(`/${path.parse(routerPath).name}`, routeRouter.default);
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
