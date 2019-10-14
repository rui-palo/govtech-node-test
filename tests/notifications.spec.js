import * as notificationsService from "../src/services/notificationsService";

describe("notifications service test", () => {  
  it("should be able to send notification to own students, plus additional students that exist", async () => {
    const payload = {
      teacher:  "teacher1@gmail.com",
      notification: "Hello students! @student3@gmail.com @studentmiche@gmail.com"
    }
    const recipientList = await notificationsService.retrieveForNotifications(payload.teacher, payload.notification);
    expect(recipientList).toEqual(['student1@gmail.com', 'student2@gmail.com', 'student3@gmail.com']);
  })
})
