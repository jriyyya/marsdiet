import axios from "axios";
import express from "express";
const router = express.Router();

//GET REQUESTS
router.get("/search", async (req, res) => {
  try {
    //make call to calorieninjas api
    const results = await axios.get(
      "https://api.calorieninjas.com/v1/nutrition",
      {
        params: {
          query: req.body.query,
        },
        headers: {
          "X-Api-Key": process.env.CALORIENINJAS_API_KEY,
        },
      }
    );

    //send the response
    return res.status(200).send(results.data);
  } catch (err: any) {
    //in case of any error
    res.status(500).send({
      message: "Something went wrong",
      error: err.message,
    });
    console.log(err);
  }
});

router.get("/search/calories", async (req, res) => {
  try {
    //make call to the calorieninjas api
    const results = (
      await axios.get("https://api.calorieninjas.com/v1/nutrition", {
        params: {
          query: req.body.query,
        },
        headers: {
          "X-Api-Key": process.env.CALORIENINJAS_API_KEY,
        },
      })
    ).data;

    //empty object to hold reponse
    const response = {};
    //format response for calories
    Object.entries(results.items).forEach((entry) => {
      (response as any)[(entry[1] as any).name as any] = (entry[1] as any)
        .calories as any;
    });

    //Send response
    return res.status(200).send(response);
  } catch (err: any) {
    //in case of any error
    res.status(500).send({
      message: "Something went wrong",
      error: err.message,
    });
    console.log(err);
  }
});

//export the router
module.exports = router;
