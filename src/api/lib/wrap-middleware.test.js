import wrapMiddleware from './wrap-middleware';

const expectedParams = {
  p1: 1,
  p2: 2
};

const req = {
  body: expectedParams
};

const expectedResult = {
  v1: 1
};

const expectedErrorMessage = 'throwed an error';

it('should wrap a getter and then call next', () => {
  const res = {};

  const next = jest.fn(function(err) {
    expect(err).toBeUndefined();
  });

  const getter = jest.fn(function(params) {
    expect(params).toBe(expectedParams);
    return expectedResult;
  });

  return wrapMiddleware(getter)(req, res, next)
    .then(() => {
      expect(getter).toHaveBeenCalledTimes(1);
      expect(res.locals).toBe(expectedResult);
      expect(next).toHaveBeenCalledTimes(1);
    });
});

it('should wrap a getter and call next with error if getter rejected', () => {
  const res = {};

  const next = jest.fn(function(err) {
    expect(err.message).toBe(expectedErrorMessage);
  });

  const getter = jest.fn(function(params) {
    expect(params).toBe(expectedParams);
    return Promise.reject(expectedErrorMessage);
  });

  return wrapMiddleware(getter)(req, res, next)
    .then(() => {
      expect(getter).toHaveBeenCalledTimes(1);
      expect(res.locals).toBeUndefined();
      expect(next).toHaveBeenCalledTimes(1);
    });
});

it('should wrap a getter and call next with error if getter throws', () => {
  const res = {};

  const next = jest.fn(function(err) {
    expect(err.message).toBe(expectedErrorMessage);
  });

  const getter = jest.fn(function(params) {
    expect(params).toBe(expectedParams);
    throw new Error(expectedErrorMessage);
  });

  return wrapMiddleware(getter)(req, res, next)
    .then(() => {
      expect(getter).toHaveBeenCalledTimes(1);
      expect(res.locals).toBeUndefined();
      expect(next).toHaveBeenCalledTimes(1);
    });
});