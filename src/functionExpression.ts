/**
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
