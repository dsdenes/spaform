const restResponse = require('./rest-response');

it('should properly form GET requests', () => {
  const end = jest.fn();
  const expectedBody = 'message';
  const json = jest.fn(function(body) {
    expect(body).toBe(expectedBody);
    return {
      end
    };
  });
  const status = jest.fn(function(statusCode) {
    expect(statusCode).toBe(200);
    return {
      end,
      json
    };
  });

  const res = {
    status,
    locals: expectedBody
  };

  const next = jest.fn(function() {
    expect(Array.from(arguments).length).toBe(0);
  });

  restResponse({ method: 'GET' }, res, next);

  expect(status).toHaveBeenCalledTimes(1);
  expect(json).toHaveBeenCalledTimes(1);
  expect(end).toHaveBeenCalledTimes(1);
  expect(next).toHaveBeenCalledTimes(1);
});

it('should properly form POST requests', () => {
  const end = jest.fn();
  const expectedBody = 'message';
  const json = jest.fn(function(body) {
    expect(body).toBe(expectedBody);
    return {
      end
    };
  });
  const status = jest.fn(function(statusCode) {
    expect(statusCode).toBe(201);
    return {
      end,
      json
    };
  });

  const res = {
    status,
    locals: expectedBody
  };

  const next = jest.fn(function() {
    expect(Array.from(arguments).length).toBe(0);
  });

  restResponse({ method: 'POST' }, res, next);

  expect(status).toHaveBeenCalledTimes(1);
  expect(json).toHaveBeenCalledTimes(0);
  expect(end).toHaveBeenCalledTimes(1);
  expect(next).toHaveBeenCalledTimes(1);
});