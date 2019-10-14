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

// router.post("/register", (req, res, next) => {
//   console.log(req.body.teacher);
//   registerTeachersToStudents(req.body.teacher, req.body.students)
//   res.sendStatus(204);
// });

// router.post("/suspend", (req, res, next) => {
//   console.log(req.body.student);
//   suspendStudent(req.body.student);
//   res.sendStatus(204);
// });

// router.post("/retrievefornotifications", async (req, res, next) => {
//   console.log(req.body);
//   const recipients = await sendNotifications(req.body.teacher, req.body.notification)
//   res.status(200).send({ recipients });
// });

// router.get("/commonstudents", async (req, res, next) => {
//   // console.log(req.query.teacher);
//   const students = await findCommonStudents(req.query.teacher);
//   res.status(200).send({ students });
// })

app.use('/api', routes);
