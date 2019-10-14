import Teachers from "../models/Teachers";
import Students from "../models/Students";
import TeachersToStudents from "../models/Teachers_Students";
import Sequelize from "sequelize";

import { countOccurance } from "../utils/utils";

export const retrieveTeacherIdsByEmails = (emails) => 
  Teachers.findAll({
    where: {
      email: {
        [Sequelize.Op.in]: emails
      }
    }
  }).then(teachers => 
    teachers.map(x => x.dataValues.id)
  )

export const retreiveStudentsEmails = (ids) => 
  Students.findAll({
    where: {
      id: {
        [Sequelize.Op.in]: ids
      }
    }
  }).then(students => 
    students.map(x => x.dataValues.email)
  );

const retrieveCommonStudentsIdsByTeachersIds = (ids) =>
  TeachersToStudents.findAll({
    where: {
      teacherId: {
        [Sequelize.Op.or]: ids
      }
    }
  }).then(teacherStudentMapping => 
    teacherStudentMapping.map(x => x.dataValues.studentId)
  )

const suspendStudentByEmail = email => 
    Students.update({
      suspended: 1
    }, {
      where: {
        email
      }
    }).then(student => {
      console.log(`student ${student.dataValues.id} suspended.`);
    })

export const findCommonStudents = async (teacherEmails) => {
  const teacherIds = await retrieveTeacherIdsByEmails(teacherEmails);
  const studentIds = await retrieveCommonStudentsIdsByTeachersIds(teacherIds)

  const commonStudentIds = countOccurance(studentIds, teacherEmails.length)
  return await retreiveStudentsEmails(commonStudentIds);
}

export const suspendStudent = async (email) => 
  await suspendStudentByEmail(email)
