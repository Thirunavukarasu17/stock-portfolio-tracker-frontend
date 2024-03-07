import { useState, useEffect } from "react";
import * as stocksService from "../utilities/stocks-service";
import * as portfolioListService from "../utilities/portfolioList-service";
import StockSearchPage from "./StockSearchPage";
import StockList from "../components/StockList";
import { Col, Container, Row } from "react-bootstrap";

const MainPage = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    async function getPortfolioList() {
      try {
        let portfolioList = await portfolioListService.getPortfolioList();
        if (!portfolioList) {
          portfolioList = await portfolioListService.createPortfolioList();
        }
        setStocks(portfolioList.stocks);
      } catch (e) {
        console.error(e.message);
      }
    }

    getPortfolioList();
  }, []);

  async function handleNewStock(stockSearch) {
    try {
      let stock = await stocksService.getStock(stockSearch.symbol);
      if (!stock) {
        stock = await stocksService.create(stockSearch);
      }
      var newStockPortfolioList = await portfolioListService.addStock(stock);
      let newStocks = newStockPortfolioList.stocks;
      setStocks(newStocks);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function handleDeleteStock(stock) {
    try {
      await portfolioListService.delStock(stock);
      const newStocks = stocks.filter((s) => s !== stock);
      setStocks(newStocks);
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <Container className="bg-body-tertiary">
      <Row>
        <Col sm={12} lg={6} className="mt-3">
          <StockSearchPage handleNewStock={handleNewStock} />
        </Col>

        <Col sm={12} lg={6} className="mt-3">
          <h3>Portfolio</h3>
          <StockList stocks={stocks} handleDeleteStock={handleDeleteStock} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
