import React, { useEffect, useState } from "react";
import { getDailyValue } from "../Api";
import { CanvasJSChart } from "canvasjs-react-charts";

export default function Chart({ query, handleStarClick }) {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchValue = async () => {
        const result = await getDailyValue(query);
        setStockData(formatStockData(result.data["Time Series (Daily)"]));
      };
      fetchValue();
    }
  }, [query]);

  if (!query) {
    return null;
  }
  return (
    <>
      <div className="title-container">
        <h2>{query}</h2>
        <button onClick={handleStarClick}>STAR</button>
      </div>
      <CanvasJSChart
        options={{
          data: [
            {
              type: "candlestick",
              dataPoints: stockData.map((stockData) => ({
                x: new Date(stockData.date),
                y: [
                  stockData.open,
                  stockData.high,
                  stockData.low,
                  stockData.close,
                ],
              })),
            },
          ],
        }}
      />
    </>
  );

  function formatStockData(stockData) {
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;

      return {
        date,
        open: Number(priceData["1. open"]),
        high: Number(priceData["2. high"]),
        low: Number(priceData["3. low"]),
        close: Number(priceData["4. close"]),
      };
    });
  }
}