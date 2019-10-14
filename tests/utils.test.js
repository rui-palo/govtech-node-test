import { turnIntoArray } from "../src/utils/utils";

describe("utils test", () => {
  it("should return imputs as array even though it's not", async () => {
    const payload = {
      teacher: "teacher1@gmail.com"
    }
    const result = await turnIntoArray(payload.teacher);
    expect(result).toEqual(['teacher1@gmail.com']);
  })

  it("should return imputs as array if it's an array", async () => {
    const payload = {
      teacher: ["teacher1@gmail.com", "teacher2@gmail.com"]
    }
    const result = await turnIntoArray(payload.teacher);
    expect(result).toEqual(["teacher1@gmail.com", "teacher2@gmail.com"]);
  })
})
