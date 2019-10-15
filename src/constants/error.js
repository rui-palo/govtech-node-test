export const errorType = {
  PARAM_NOT_FOUND: 'PARAM_NOT_FOUND',
  TEACHER_NOT_FOUND: 'TEACHER_NOT_FOUND',
  STUDENT_NOT_FOUND: 'STUDENT_NOT_FOUND',
  GENERIC_ERROR: 'GENERIC_ERROR',
};

export const errorEnum = Object.freeze({
  [errorType.PARAM_NOT_FOUND]: {
    status: 400,
    message: 'One of your parameters is not found, please double check request.',
  },
  [errorType.TEACHER_NOT_FOUND]: {
    status: 400,
    message: "Teacher doesn't exist",
  },
  [errorType.STUDENT_NOT_FOUND]: {
    status: 400,
    message: "Student doesn't exist",
  },
  [errorType.GENERIC_ERROR]: {
    status: 500,
    message: 'Oops, something went wrong',
  },
});
