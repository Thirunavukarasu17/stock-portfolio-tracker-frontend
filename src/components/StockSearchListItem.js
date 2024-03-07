import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

const StockSearchListItem = ({ stock, handleNewStock, id }) => {
  return (
    <Accordion.Item className="mb-2" eventKey={`${id}`}>
      <Accordion.Header>
        <span>
          <div><strong>Symbol:</strong> {stock.symbol} {stock.currency}</div>
          <div><strong>Name:</strong> {stock.name}</div>
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <div><strong>Type:</strong> {stock.type}</div>
        <div><strong>Region:</strong> {stock.region}</div>
        <div><strong>Market Open:</strong> {stock.marketOpen}</div>
        <div><strong>Market Close:</strong> {stock.marketClose}</div>
        <div><strong>currency:</strong> {stock.currency}</div>
        <Button 
          size="sm"
          variant="primary"
          onClick={() => handleNewStock(stock)}
        >
          Add to Portfolio
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default StockSearchListItem;
