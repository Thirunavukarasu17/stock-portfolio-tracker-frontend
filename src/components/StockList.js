import React from 'react';
import StockListItem from './StockListItem';

const StockList = ({ stocks, handleDeleteStock }) => (
  <>
    {stocks
      ? stocks.map((stock, id) => (
          <StockListItem
            stock={stock}
            handleDeleteStock={handleDeleteStock}
            key={id}
          />
        )):null
      }
  </>
);


export default StockList;
