const cache: {[ticker: string]: number} = {};

// 리턴 타입을 명시함으로 구현상의 오류 파악
function getQuote(ticker: string): Promise<number> {
  if (ticker in cache) {
    // 구현상의 오류 해결
    return Promise.resolve(cache[ticker]);
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
