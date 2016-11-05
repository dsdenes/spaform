const handleValidationError = require('./handle-validation-error');

it('should pass error if its not a validation error', () => {
  const end = jest.fn();

  const status = jest.fn(function(statusCode) {
    return {
      end
    };
  });

  const res = {
    status
  };

  const expectedError = { validation: false };

  const next = jest.fn(function(error) {
    expect(error).toBe(expectedError);
  });

  handleValidationError(expectedError, {}, res, next);
  expect(status).toHaveBeenCalledTimes(0);
  expect(end).toHaveBeenCalledTimes(0);
  expect(next).toHaveBeenCalledTimes(1);
});

it('should handle validatione errors and dont pass them forward', () => {
  const end = jest.fn();

  const status = jest.fn(function(statusCode) {
    expect(statusCode).toBe(400);
    return {
      end
    };
  });

  const res = {
    status
  };

  const expectedError = { validation: true };
  const next = jest.fn();

  handleValidationError(expectedError, {}, res, next);
  expect(status).toHaveBeenCalledTimes(1);
  expect(end).toHaveBeenCalledTimes(1);
  expect(next).toHaveBeenCalledTimes(0);
});