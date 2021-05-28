import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.alphavantage.co/query",
});

export const getDailyValue = (symbol) => {
  return instance.get("", {
    params: {
      function: "TIME_SERIES_DAILY",
      symbol,
      apikey: "LXG3KFSHHFEET085",
    },
  });
};
