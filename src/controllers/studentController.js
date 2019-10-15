import * as studentService from '../services/studentService';
import { turnIntoArray } from '../utils/utils';

const suspendStudent = (req, res) => {
  studentService.suspendStudent(req.body.student);
  res.sendStatus(204);
};

const findCommonStudents = async (req, res) => {
  const students = await studentService.findCommonStudents(turnIntoArray(req.query.teacher));
  res.status(200).send({ students });
};

export default {
  suspendStudent,
  findCommonStudents,
};
