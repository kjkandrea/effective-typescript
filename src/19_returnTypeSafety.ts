import * as Process from 'process';

const cache: {[ticker: string]: number} = {};
function getQuote(ticker: string): Promise<number> {
  if (ticker in cache) {
    return cache[ticker];
  }
  return fetch(`https://quotes.example.com/q=${ticker}`)
    .then(response => response.json())
    .then(quote => {
      cache[ticker] = quote;
      return quote;
    });
}

// 문제. getQuote 가 4열에 의해 Promise<number> 를 반환하지 않으므로 에러
getQuote('MSFT').then(console.log);
