const LOGIN = 'LOGIN';
const ADD_REGISTER = 'ADD_REGISTER'

export const addRegister = value => ({ type: ADD_REGISTER, data: value });
export const login = value => ({ type: LOGIN, value });