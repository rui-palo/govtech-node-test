import Teachers from "../models/Teachers";
import Students from "../models/Students";
import TeachersToStudents from "../models/Teachers_Students";
import Sequelize from "sequelize";
import { getAdditionalEmailsFromMessage } from "../utils/utils";

const teachersIdByEmail = email => 
  Teachers.findOne({
    where: {
      email
    }
  }).then(teacher => teacher.dataValues.id)

const studentsIdsByTeachersId = teacherId => 
  TeachersToStudents.findAll({
    where: {
      teacherId
    }
  }).then(students => 
    students.map(x => x.dataValues.studentId))

const studentEmailsByIds = studentIds =>
  Students.findAll({
    where: {
      id: {
        [Sequelize.Op.in]: studentIds
      },
      suspended: 0
    }
  }).then(students => 
    students.map(x => x.dataValues.email))

const verifyStudentEmails = additionalEmails => 
  Students.findAll({
    where: {
      email: {
        [Sequelize.Op.in]: additionalEmails
      }
    }
  }).then(students => 
    students.map(x => x.dataValues.email))
  
export const retrieveForNotifications = async (teachersEmail, message) => {
  const teacherId = await teachersIdByEmail(teachersEmail)
  const studentIds = await studentsIdsByTeachersId(teacherId)
  const studentEmails = await studentEmailsByIds(studentIds)

  const additionalEmails = getAdditionalEmailsFromMessage(message)
  const atStudentEmails = await verifyStudentEmails(additionalEmails)
  const studentsToBeNotified = studentEmails.concat(atStudentEmails)
  return studentsToBeNotified
}
