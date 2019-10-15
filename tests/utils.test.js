import { turnIntoArray, countOccurance, getAdditionalEmailsFromMessage } from '../src/utils/utils';

describe('turnIntoArray test', () => {
  it("should return imputs as array even though it's not", async () => {
    const payload = {
      teacher: 'teacher1@gmail.com',
    };
    const result = await turnIntoArray(payload.teacher);
    expect(result).toEqual(['teacher1@gmail.com']);
  });

  it("should return imputs as array if it's an array", async () => {
    const payload = {
      teacher: ['teacher1@gmail.com', 'teacher2@gmail.com'],
    };
    const result = await turnIntoArray(payload.teacher);
    expect(result).toEqual(['teacher1@gmail.com', 'teacher2@gmail.com']);
  });
});

describe('countOccurance test', () => {
  it('should return an array of IDs that has occured certain number of times', async () => {
    const arr = [1, 1, 2, 2, 3, 4, 5];
    const limit = 2;

    const result = await countOccurance(arr, limit);
    expect(result).toEqual(['1', '2']);
  });
});

describe('getAdditionalEmailsFromMessage test', () => {
  it('should find all @mentions of email addresses within a string', async () => {
    const str = 'Hello students! @student3@gmail.com. @studentmiche@gmail.com';

    const result = await getAdditionalEmailsFromMessage(str);
    expect(result).toEqual(['student3@gmail.com', 'studentmiche@gmail.com']);
  });
});
