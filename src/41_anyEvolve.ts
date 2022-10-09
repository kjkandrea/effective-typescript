function range(start: number, limit: number) {
  const out = []; // 타입이 any[]
  for (let i = start; i < limit; i++) {
    out.push(i); // 타입이 any[]
  }
  return out; // 타입이 number[]
}

// 이게 더 안전한 설계
function range2(start: number, limit: number) {
  const out: number[] = [];
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out; // 타입이 number[]
}
