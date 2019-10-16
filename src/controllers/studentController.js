import * as studentService from '../services/studentService';
import { turnIntoArray } from '../utils/utils';
import { errorEnum } from '../constants/error';

const suspendStudent = async (req, res) => {
  try {
    await studentService.suspendStudent(req.body.student);
    res.sendStatus(204);
  } catch ({ message }) {
    res.status(errorEnum[message].status).send({ message: errorEnum[message].message });
  }
};

const findCommonStudents = async (req, res) => {
  try {
    const students = await studentService.findCommonStudents(turnIntoArray(req.query.teacher));
    res.status(200).send({ students });
  } catch ({ message }) {
    res.status(errorEnum[message].status).send({ message: errorEnum[message].message });
  }
};

export default {
  suspendStudent,
  findCommonStudents,
};
