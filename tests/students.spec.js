import * as studentService from "../src/services/studentService";

describe("students service test", () => {  
  it("should be able to retrieve students for one teacher", async () => {
    const studentsList = await studentService.findCommonStudents(['teacher1@gmail.com'])
    expect(studentsList).toEqual(['student1@gmail.com', 'student2@gmail.com']);
  })

  it("should be able to retrieve students for two teachers", async () => {
    var studentsList = await studentService.findCommonStudents(['teacher1@gmail.com', 'teacher2@gmail.com'])
    expect(studentsList).toEqual(['student2@gmail.com']);
  })
})
