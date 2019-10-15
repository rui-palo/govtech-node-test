import * as registerService from '../services/registerService';
import { errorEnum } from '../constants/error';

const registerTeachersToStudents = (req, res) => {
  try {
    registerService.registerTeachersToStudents(req.body.teacher, req.body.students);
    res.sendStatus(204);
  } catch ({ message }) {
    res.status(errorEnum[message].status).send({ message: errorEnum[message].message });
  }
};

export default {
  registerTeachersToStudents,
};
