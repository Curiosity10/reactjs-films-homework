export const createAsyncFnRequest = requestName => ({
  type: requestName,
});

export const createAsyncFnFailure = (requestName, error) => ({
  type: requestName,
  error: error.message,
});
