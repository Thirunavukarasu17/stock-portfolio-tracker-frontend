import sendRequest from './send-request';

const BASE_URL = '/api/portfolio-list';
const API_URL = `https://stock-portfolio-tracker-backend.onrender.com${BASE_URL}`;

export const getPortfolioList = () => sendRequest(API_URL, 'GET');
export const createPortfolioList = () => sendRequest(API_URL, 'POST');
export const addStock = stock => sendRequest(`${API_URL}/add-stock`, 'POST', stock);
export const delStock = stock => sendRequest(`${API_URL}/del-stock`, 'POST', stock);
