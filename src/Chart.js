import React, { useEffect, useState } from "react";
import { getDailyValue } from "./Api";
import { CanvasJSChart } from "canvasjs-react-charts";

export default function Chart({ query }) {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchValue = async () => {
      console.log(query);
      const result = await getDailyValue(query);
      console.log(result.data);
      setStockData(formatStockData(result.data["Time Series (Daily)"]));
    };
    fetchValue();
  }, [query]);

  // useEffect(() => {
  //   const result = fetch("https://randomuser.me/api/").then((response) =>
  //     response.json().then((data) => console.log(data))
  //   );
  // }, []);

  //console.log(stockData);
  return (
    <>
      <CanvasJSChart
        options={{
          title: {
            text: query,
          },
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
