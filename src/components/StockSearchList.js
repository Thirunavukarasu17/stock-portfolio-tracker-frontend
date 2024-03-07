import StockSearchListItem from "./StockSearchListItem";
import { Accordion } from "react-bootstrap";

const StockSearchList = ({ searchStocks, handleNewStock }) => {
  const stockSearchList = searchStocks.map((stock, id) => (
    <StockSearchListItem
      stock={stock}
      handleNewStock={handleNewStock}
      id={id}
      key={id}
    />
  ));

  return (
    <>
      <Accordion alwaysOpen>
        {searchStocks ? stockSearchList : <h2>Fetching Data...</h2>}
      </Accordion>
    </>
  );
};

export default StockSearchList;
