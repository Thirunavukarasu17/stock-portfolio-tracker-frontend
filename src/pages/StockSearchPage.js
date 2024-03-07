import { useState } from "react";
import StockSearchForm from "../components/StockSearchForm"
import StockSearchList from "../components/StockSearchList"

const StockSearchPage=({handleNewStock})=> {
  const [searchStocks, setSearchStocks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <h3>Search Stocks</h3>
      <StockSearchForm
        setSearchStocks={setSearchStocks}
        setIsLoading={setIsLoading}
      />
      {isLoading ? (
        <h2>Fetching Data...</h2>
      ) : (
        searchStocks && 
          <StockSearchList 
          searchStocks={searchStocks} 
          handleNewStock={handleNewStock}
          />
      )}
    </>
  );
}

export default StockSearchPage
