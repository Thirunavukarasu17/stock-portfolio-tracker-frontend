import sendRequest from './send-request';

const BASE_URL = '/api/users';
const API_URL = 'https://stock-portfolio-tracker-backend.onrender.com';

export const signUp = userData =>
  sendRequest(`${API_URL}${BASE_URL}`, 'POST', userData);

export const login = credentials =>
  sendRequest(`${API_URL}${BASE_URL}/login`, 'POST', credentials);

export const checkToken = () =>
  sendRequest(`${API_URL}${BASE_URL}/check-token`);
