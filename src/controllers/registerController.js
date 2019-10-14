import * as registerService from "../services/registerService";

const registerTeachersToStudents = (req, res, next) => {
  // console.log(req.body.teacher);
  registerService.registerTeachersToStudents(req.body.teacher, req.body.students)
  res.sendStatus(204);
};

export default {
  registerTeachersToStudents
}
