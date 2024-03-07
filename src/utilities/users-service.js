import * as usersAPI from './users-api';

export const signUp = async userData => {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
};

export const login = async credentials => {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
};

export const logOut = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(window.atob(token.split('.')[1]));
  

  if (payload.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
};

export const getUser = () => {
  const token = getToken();
  return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
};

export const checkToken = () => {
  return usersAPI.checkToken().then(dateStr => new Date(dateStr));
};
