import { useState } from "react";
import * as stocksService from "../utilities/stocks-service";
import StockNewsModal from "./StockNewsModal";
import StockPerfomanceModal from "./StockPerfomanceModal";
import { Button, Card } from "react-bootstrap";
import "../pages/App.css"

export default function StockListItem({ stock, handleDeleteStock }) {
  const [modalShow, setModalShow] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const [stockNews, setStockNews] = useState({});
  const [stockPerfomance, setStockPerfomance] = useState({});


  async function handleStockQuote(symbol) {
    try {
      setStockNews({...stock, ...await stocksService.getStockNews(symbol)});
      setModalShow(true);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handleStock2Quote(symbol) {
    try {
      setStockPerfomance({...stock, ...await stocksService.getStockNews(symbol)});
      setModal2Show(true);
    } catch (err) {
      console.error(err.message);
    }
  }


  return (

    <>
      <Card className="my-2 border-primary custom-shadow rounded-lg"> 
        <Card.Body>
          <Card.Text><strong className="font-weight-bold text-muted">Name:</strong> {stock.name}</Card.Text>
          <Card.Title className="text-info">Symbol: {stock.symbol}</Card.Title>
          <Button 
            className="mx-1"
            variant="danger"
            size="sm"
            onClick={() => handleDeleteStock(stock)}
          >
            Remove From Portfolio
          </Button>
          <Button 
            className="my-2"
            variant="primary" 
            size="sm"
            onClick={() => handleStock2Quote(stock.symbol)}
          >
            Stock Performance
          </Button>
          <Button 
            className="m-2"
            variant="primary" 
            size="sm"
            onClick={() => handleStockQuote(stock.symbol)}
          >
            Latest News
          </Button>
        </Card.Body>
      </Card>

      { stockNews && 
        <StockNewsModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          stockNews={stockNews}
        />
      }

      { stockPerfomance && 
        <StockPerfomanceModal
          modal2Show={modal2Show}
          setModal2Show={setModal2Show}
          stockNews={stockNews}
        />
      }
    </>
  );
}
