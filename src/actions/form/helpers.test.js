import {
  checkAllFields,
  unchecked,
  validCount,
  allValid,
  fieldNames
} from './helpers';

describe('checkAllFields', () => {
  it('should trigger input change for all fields', () => {
    const dispatch = jest.fn();
    const getState = () => {
      return {
        form: {
          values: {
            field1: 1,
            field2: 2
          }
        }
      }
    };
    checkAllFields()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'INPUT_CHANGED',
      name: 'field1',
      value: 1
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: 'INPUT_CHANGED',
      name: 'field2',
      value: 2
    });
  });
});

describe('unchecked', () => {
  it('should return true if there is any form element that hasnt been checked', () => {
    expect(unchecked({
      values: {
        field1: '',
        field2: ''
      },
      errors: {
        field1: '',
        field2: false
      }
    })).toBe(true);
  });
  it('should return false if there isnt any form element that hasnt been checked', () => {
    expect(unchecked({
      values: {
        field1: '',
        field2: ''
      },
      errors: {
        field1: '',
        field2: ''
      }
    })).toBe(false);
  });
});

describe('validCount', () => {
  it('should get back the count of the valid fields', () => {
    expect(validCount({
      values: {
        field1: '',
        field2: ''
      },
      errors: {
        field1: '',
        field2: false
      }
    })).toBe(1);
    expect(validCount({
      values: {
        field1: '',
        field2: ''
      },
      errors: {
        field1: '',
        field2: ''
      }
    })).toBe(2);
  });
});

describe('allValid', () => {
  it('should get back with true if all the fields are valid', () => {
    expect(allValid({
      values: {
        field1: '',
        field2: ''
      },
      errors: {
        field1: '',
        field2: ''
      }
    })).toBe(true);
  });
  it('should get back with false if there is any field with error', () => {
    expect(allValid({
      values: {
        field1: '',
        field2: ''
      },
      errors: {
        field1: 'error',
        field2: ''
      }
    })).toBe(false);
  });
});

describe('fieldNames', () => {
  it('should get back with the name of fields', () => {
    expect(fieldNames({
      values: {
        field1: '',
        field2: ''
      }
    })).toEqual(['field1', 'field2']);
  });
});