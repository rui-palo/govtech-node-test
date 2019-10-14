import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from "./routes/api"

const app = express();

app.use(bodyParser.json());
app.use(helmet());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.use('/api', routes);
