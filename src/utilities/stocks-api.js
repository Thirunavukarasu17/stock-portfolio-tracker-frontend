import sendRequest from './send-request';

const BASE_API_URL = 'https://www.alphavantage.co/query?';
const BASE_URL = '/api/stocks';
const API_KEY = process.env.API_KEY;

export const getStockNews = symbol =>
  sendRequest(`${BASE_API_URL}function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);

export const search = searchTerm =>
  sendRequest(`${BASE_API_URL}function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${API_KEY}`);

export const create = stock =>
  sendRequest(`https://stock-portfolio-tracker-backend.onrender.com${BASE_URL}`, 'POST', stock);

export const getStock = symbol =>
  sendRequest(`https://stock-portfolio-tracker-backend.onrender.com${BASE_URL}/${symbol}`, 'GET');

export const getStockTimeSeriesDaily = symbol =>
  sendRequest(`${BASE_API_URL}function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`);


