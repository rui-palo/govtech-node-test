import Teachers from "../models/Teachers";
import Students from "../models/Students";
import TeachersToStudents from "../models/Teachers_Students";
import Sequelize from "sequelize";

import sequelize from "../db/db-connect";

export const registerTeacher = (email, transaction) => 
  Teachers.findOrCreate({
    where: {
      email
    },
    defaults: { // set the default properties if it doesn't exist
      email
    },
    transaction
  }).then(([teacher, isCreated]) => 
    teacher.dataValues.id
  );

export const registerStudent = (email, transaction) => 
  Students.findOrCreate({
    where: {
      email
    },
    defaults: { // set the default properties if it doesn't exist
      email
    },
    transaction
  }).then(([student, isCreated]) => 
    student.dataValues.id
  );

export const registerTeacherToStudent = (teacherId, studentId, transaction) =>
  TeachersToStudents.findOrCreate({
    where: {
      studentId,
      teacherId
    },
    defaults: { // set the default properties if it doesn't exist
      studentId,
      teacherId 
    },
    transaction
  }).then(([result, isCreated]) => 
    console.log(result)
  )

export const registerTeachersToStudents = async (teacherEmail, studentEmails) =>
  await sequelize.transaction(async (transaction) =>
    Sequelize.Promise.each(studentEmails, async (studentEmail) => 
      registerTeacherToStudent(
        await registerTeacher(teacherEmail, transaction), // teacher id
        await registerStudent(studentEmail, transaction),  // student id
        transaction) // transaction
    )
  )
