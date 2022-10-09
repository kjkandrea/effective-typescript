function range(start: number, limit: number) {
  const out = []; // 타입이 any[]
  for (let i = start; i < limit; i++) {
    out.push(i); // 타입이 any[]
  }
  return out; // 타입이 number[]
}
