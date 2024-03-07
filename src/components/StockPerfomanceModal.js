import React, { useState, useEffect } from "react";
import { Modal, Table, Form,Row,Col,Button } from "react-bootstrap";
import "../pages/App.css";

const StockPerfomanceModal = ({ modal2Show, setModal2Show, stockNews }) => {
  const [quantity, setQuantity] = useState(1); 
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };
  
  useEffect(() => {
    if (stockNews.price) {
      const totalPrice = quantity * stockNews.price;
      setTotalPrice(totalPrice);
    }
  }, [quantity, stockNews.price]);
  


  return (
    <Modal
      show={modal2Show}
      onHide={() => setModal2Show(false)}
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
          <tbody>
            <tr>
              <th style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Performance</th>
            </tr>
            <tr>
              <th>Price</th>
              <td><strong>{stockNews.price} {stockNews.currency}</strong></td>
            </tr>
            <tr>
              <th>Change</th>
              <td><strong style={{ color: stockNews.change > 0 ? 'green' : 'red' }}>{stockNews.change}</strong></td>
            </tr>
            <tr>
              <th>Change Percent</th>
              <td><strong style={{ color: stockNews.changePercent > 0 ? 'green' : 'red' }}>{stockNews.changePercent}</strong></td>
            </tr>
            <tr><th>Symbol</th><td>{stockNews.symbol}</td></tr>
            <tr><th >Open</th><td style={{color:"blue"}}>{stockNews.open} {stockNews.currency}</td></tr>
            <tr><th>High</th><td style={{color:"green"}}>{stockNews.high} {stockNews.currency}</td></tr>
            <tr><th>Low</th><td style={{color:"red"}}>{stockNews.low} {stockNews.currency}</td></tr>
            <tr><th>Volume</th><td style={{color:"brown"}}><b>{stockNews.volume} </b></td></tr>
            <tr><th>Previous Close</th><td>{stockNews.previousClose} {stockNews.currency}</td></tr>
            <tr><th>Latest Trading Day</th><td>{stockNews.latestTradingDay}</td></tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <th>Enter Quantity :</th>
              <td>
                <Form.Control 
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  min={1} 
                />
              </td>
            </tr>
            <tr>
            <th>Total Price of {quantity} {quantity === 1 ? 'share' : 'shares'} of {stockNews.name} is:</th>
              <td><strong>{totalPrice} {stockNews.currency}</strong></td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Button onClick={() => setModal2Show(false)}>
              Close
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default StockPerfomanceModal;