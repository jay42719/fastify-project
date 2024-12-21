export const formatResponse = (data: any) => {
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
