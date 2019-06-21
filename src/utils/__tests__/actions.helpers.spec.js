import { createAsyncFnRequest, createAsyncFnFailure } from '../actions.helpers';

describe('Action helpers work correctly', () => {
  it('createAsyncFnRequest works correctly', () => {
    expect(createAsyncFnRequest('GET_DATA')).toEqual({ type: 'GET_DATA' });
  });
  it('createAsyncFnFailure works correctly', () => {
    expect(createAsyncFnFailure('GET_DATA_FAILURE', { message: 'error' })).toEqual({ type: 'GET_DATA_FAILURE', error: 'error' });
  });
});
