export const formatResponse = <T>(data: T) => {
  return {
    success: true,
    data,
  };
};

export const formatErrorResponse = (message: string) => {
  return {
    success: false,
    error: message,
  };
};
