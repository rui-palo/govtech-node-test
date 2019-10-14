import express from 'express';
import bodyParser from 'body-parser';

import routes from "./routes/api"

const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  // security
  next();
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.use('/api', routes);
