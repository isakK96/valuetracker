import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.alphavantage.co/query",
});

export const getDailyValue = (symbol) => {
  try {
    return instance.get("", {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol,
        apikey: "LXG3KFSHHFEET085",
      },
    });
  } catch (error) {
    return error;
  }
};
