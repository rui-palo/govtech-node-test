
const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const studentMock = dbMock.define('student', {
  id: 1,
  email: 'student1@gmail.com',
  suspended: 0
},{
  id: 2,
  email: 'student2@gmail.com',
  suspended: 0
},{
  id: 3,
  email: 'student3@gmail.com',
  suspended: 0
},{
  id: 4,
  email: 'student4@gmail.com',
  suspended: 0
})

const teacherMock = dbMock.define('teacher', {
  id: 1,
  email: 'teacher1@gmail.com'
},{
  id: 2,
  email: 'teacher2@gmail.com'
})

const teachersStudentsMock = dbMock.define('teacher', {
  id: 1,
  teacherId: 1,
  studentId: 1
},{
  id: 2,
  teacherId: 1,
  studentId: 2
},{
  id: 3,
  teacherId: 2,
  studentId: 2
},{
  id: 4,
  teacherId: 2,
  studentId: 3
})

export default {
  studentMock,
  teacherMock,
  teachersStudentsMock
}