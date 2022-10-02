/**
 * 동일한 타입 시그니처를 가지는 여러개의 함수를 작성할 때는
 * 매개변수의 타입과 반환 타입을 반복해서 작성하지 말고 함수 전체에 타입 선언을 적용하라.
 *
 * typeof fetch 를 통해 함수내에 타입 선언을 하지않고 간결하게 작성하였다.
 * 함수 선언식으로 작성하였다면 훨씬 길게 작성했어야 했을 것.
 *
 * 이와 같은 재사용성의 이점 때문에 타입스크립트에서는 함수를 표현식으로 작성하는게 좋다.
 *
 * @param input
 * @param init
 */
export const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error('Request failed: ' + response.status);
  }
  return response;
};
