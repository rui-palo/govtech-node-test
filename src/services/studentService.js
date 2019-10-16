import Sequelize from 'sequelize';
import Teachers from '../models/Teachers';
import Students from '../models/Students';
import TeachersToStudents from '../models/Teachers_Students';

import { countOccurance } from '../utils/utils';
import { errorType } from '../constants/error';

export const retrieveTeacherIdsByEmails = (emails) =>
  Teachers.findAll({
    where: {
      email: {
        [Sequelize.Op.in]: emails,
      },
    },
  }).then((teachers) =>
    teachers.map((x) => x.dataValues.id));

export const retreiveStudentsEmails = (ids) =>
  Students.findAll({
    where: {
      id: {
        [Sequelize.Op.in]: ids,
      },
    },
  }).then((students) =>
    students.map((x) => x.dataValues.email));

const retrieveCommonStudentsIdsByTeachersIds = (ids) =>
  TeachersToStudents.findAll({
    where: {
      teacher_id: {
        [Sequelize.Op.or]: ids,
      },
    },
  }).then((teacherStudentMapping) =>
    teacherStudentMapping.map((x) => x.dataValues.student_id));

const suspendStudentByEmail = (email) =>
  Students.update({
    suspended: 1,
  }, {
    where: {
      email,
    },
  }).then(() => {
    /* eslint-disable no-console */
    console.log(`student ${email} suspended.`);
  });

export const findCommonStudents = async (teacherEmails) => {
  const teacherIds = await retrieveTeacherIdsByEmails(teacherEmails)
    .catch((err) => {
      switch (err.message) {
        case 'WHERE parameter "email" has invalid "undefined" value':
          throw new Error(errorType.PARAM_NOT_FOUND);
        default:
          throw new Error(errorType.GENERIC_ERROR);
      }
    });

  const studentIds = await retrieveCommonStudentsIdsByTeachersIds(teacherIds)
    .catch((err) => {
      switch (err.message) {
        case 'Cannot read property \'dataValues\' of null':
          throw new Error(errorType.STUDENTS_NOT_FOUND);
        default:
          throw new Error(errorType.GENERIC_ERROR);
      }
    });

  const commonStudentIds = countOccurance(studentIds, teacherEmails.length);
  
  return await retreiveStudentsEmails(commonStudentIds)
    .catch((err) => {
      switch (err.message) {
        case 'Cannot read property \'dataValues\' of null':
          throw new Error(errorType.STUDENTS_NOT_FOUND);
        default:
          throw new Error(errorType.GENERIC_ERROR);
      }
    });
};

export const suspendStudent = async (email) =>
  await suspendStudentByEmail(email)
    .catch((err) => {
      switch (err.message) {
        case 'WHERE parameter "email" has invalid "undefined" value':
          throw new Error(errorType.PARAM_NOT_FOUND);
        default:
          throw new Error(errorType.GENERIC_ERROR);
      }
    });
