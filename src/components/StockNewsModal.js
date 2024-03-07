import React, { useState, useEffect } from "react";
import { Modal, Table, Form,Row,Col,Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "../pages/App.css";
const API_KEY = process.env.API_KEY;

const StockNewsModal = ({ modalShow, setModalShow, stockNews }) => {
  const [latestNews, setLatestNews] = useState([]);


  
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${stockNews.symbol}&apikey=${API_KEY}`
        );
        const data = await response.json();
        setLatestNews(data.feed || data);
      } catch (error) {
        console.error("Error fetching latest news:", error);
      }
    };

    if (modalShow) {
      fetchLatestNews();
    }
  }, [modalShow, stockNews.symbol]);

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
      className="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {stockNews.symbol} - {stockNews.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table>
        <thead style={{ fontSize: '1.5rem', fontWeight: 'bold' }}> Latest News</thead>
          <tbody> {latestNews.length > 0 ? (
            <li>
              {latestNews.map((article, index) => (
                <ListGroup key={index}>
                  <ListGroup.Item className="mb-4">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <strong>{article.title}</strong>
                    </a>
                    <div>{article.summary}</div>
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </li>
          ) : (
            <span>No news available</span>
          )}</tbody>
         
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Button onClick={() => setModalShow(false)}>
              Close
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default StockNewsModal;