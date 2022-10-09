// 함수 타입 오버로딩
function double<T extends number | string>(
  x: T
): T extends string ? string : number;
function double(x: any) {
  return x + x;
}

const str = double('str');
const num = double(1);
const strNum = double('asd' as string | number);
