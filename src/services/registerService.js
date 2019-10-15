import Sequelize from 'sequelize';
import Teachers from '../models/Teachers';
import Students from '../models/Students';
import TeachersToStudents from '../models/Teachers_Students';

import sequelize from '../db/db-connect';

export const registerTeacher = (email, transaction) => Teachers.findOrCreate({
  where: {
    email,
  },
  defaults: { // set the default properties if it doesn't exist
    email,
  },
  transaction,
}).then((teacher) => teacher[0].dataValues.id);

export const registerStudent = (email, transaction) => Students.findOrCreate({
  where: {
    email,
  },
  defaults: { // set the default properties if it doesn't exist
    email,
  },
  transaction,
}).then((student) => student[0].dataValues.id);

export const registerTeacherToStudent = (teacherId, studentId, transaction) =>
  TeachersToStudents.findOrCreate({
    where: {
      student_id: teacherId,
      teacher_id: studentId,
    },
    defaults: { // set the default properties if it doesn't exist
      student_id: teacherId,
      teacher_id: studentId,
    },
    transaction,
    /* eslint-disable no-console */
  }).then((result) => console.log(result));
/* eslint-enable no-console */

export const registerTeachersToStudents = async (teacherEmail, studentEmails) =>
  await sequelize.transaction(async (transaction) =>
    Sequelize.Promise.each(studentEmails, async (studentEmail) => registerTeacherToStudent(
      await registerTeacher(teacherEmail, transaction), // teacher id
      await registerStudent(studentEmail, transaction), // student id
      transaction, // transaction
    )));
