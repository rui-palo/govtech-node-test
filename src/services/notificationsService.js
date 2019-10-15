import Sequelize from 'sequelize';
import Teachers from '../models/Teachers';
import Students from '../models/Students';
import TeachersToStudents from '../models/Teachers_Students';
import { getAdditionalEmailsFromMessage } from '../utils/utils';
import { errorType } from '../constants/error';

const teachersIdByEmail = (email) => Teachers.findOne({
  where: {
    email,
  },
}).then(
  (teacher) => teacher.dataValues.id,
);

const studentsIdsByTeachersId = (teacherId) => TeachersToStudents.findAll({
  where: {
    teacher_id: teacherId,
  },
}).then((students) => students.map((x) => x.dataValues.student_id));

const studentEmailsByIds = (studentIds) => Students.findAll({
  where: {
    id: {
      [Sequelize.Op.in]: studentIds,
    },
    suspended: 0,
  },
}).then((students) => students.map((x) => x.dataValues.email));

const verifyStudentEmails = (additionalEmails) => Students.findAll({
  where: {
    email: {
      [Sequelize.Op.in]: additionalEmails,
    },
  },
}).then((students) => students.map((x) => x.dataValues.email));

const retrieveForNotifications = async (teachersEmail, message) => {
  const teacherId = await teachersIdByEmail(teachersEmail)
    .catch((err) => {
      switch (err.message) {
        case 'Cannot read property \'dataValues\' of null':
          throw new Error(errorType.TEACHER_NOT_FOUND);
        case 'WHERE parameter "email" has invalid "undefined" value':
          throw new Error(errorType.PARAM_NOT_FOUND);
        default:
          throw new Error(errorType.GENERIC_ERROR);
      }
    });
  const studentIds = await studentsIdsByTeachersId(teacherId)
    .catch((err) => {
      switch (err.message) {
        case 'Cannot read property \'dataValues\' of null':
          throw new Error(errorType.STUDENTS_NOT_FOUND);
        case 'WHERE parameter "teacher_id" has invalid "undefined" value':
          throw new Error(errorType.PARAM_NOT_FOUND);
        default:
          throw new Error(errorType.GENERIC_ERROR);
      }
    });
  const studentEmails = await studentEmailsByIds(studentIds)
    .catch((err) => {
      switch (err.message) {
        case 'Cannot read property \'dataValues\' of null':
          throw new Error(errorType.STUDENTS_NOT_FOUND);
        case 'WHERE parameter "email" has invalid "undefined" value':
          throw new Error(errorType.PARAM_NOT_FOUND);
        default:
          throw new Error(errorType.GENERIC_ERROR);
      }
    });

  const additionalEmails = getAdditionalEmailsFromMessage(message);
  const atStudentEmails = await verifyStudentEmails(additionalEmails)
    .catch((err) => {
      switch (err.message) {
        case 'Cannot read property \'dataValues\' of null':
          throw new Error(errorType.STUDENTS_NOT_FOUND);
        case 'WHERE parameter "email" has invalid "undefined" value':
          throw new Error(errorType.PARAM_NOT_FOUND);
        default:
          throw new Error(errorType.GENERIC_ERROR);
      }
    });
  const studentsToBeNotified = studentEmails.concat(atStudentEmails);
  return studentsToBeNotified;
};

export default {
  retrieveForNotifications,
};
