import * as portfolioListAPI from './portfolioList-api';

export const getPortfolioList = async () => await portfolioListAPI.getPortfolioList();
export const createPortfolioList = async () => await portfolioListAPI.createPortfolioList();
export const addStock = async stock => await portfolioListAPI.addStock(stock);
export const delStock = async stock => await portfolioListAPI.delStock(stock);
