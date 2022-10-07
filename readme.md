# run code

[Deno 설치](https://deno.land/#installation) 후

```bash
deno run ./src/{filename}.ts
```

# effective typescript

## 아이템 4. 구조적 타이핑 (Structural-Typing)

구조적 타이핑은 **속성에 해당하는 값이 타입에 존재하는가** 의 개념이다.

```typescript
interface Vertor2D {
  x: number;
  y: number;
}

function calculateLength(v: Vertor2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = {x: 3, y: 4, name: 'zoe'};

console.log(calculateLength(v)); // 5
```

위 코드의 흥미로운 점은 Vector2D 와 NameVector 의 관계를 전혀 선언하지 않았음에도 타입 에러가 나지 않는다는 것이다.
이유는 NameVector 구조가 Vector2D 와 호환되기 때문이다.

구조적 타이핑 때문에 문제가 발생하기도 한다. 가령 Vertor3D 인터페이스가 있을 때 이다.

```typescript
interface Vector3D {
  x: number;
  y: number;
  z: number;
}

const v: Vector3D = {x: 3, y: 4, z: 5};

console.log(calculateLength(v)); // 5
```

z를 연산하지 않았기 때문에 결과는 오류이나,
구조적 타이핑 관점에서는 x 와 y 가 있어서 Vector2D와 호환된다. 

## 아이템 13. 타입과 인터페이스의 차이점 알기

타입스크립트에서 명명된 타입(named type)을 정의하는 방법은 type, interface 두 가지 방법이 존재한다.
타입과 인터페이스에 존재하는 차이를 분명하게 알고, 일관성을 유지할 필요가 있다.

### 1. 유니온 타입은 있지만, 유니온 인터페이스는 없다.

### 2. 인터페이스는 보강이 가능하다.

인터페이스는 동일 이름으로 재선언 함으로 보강이 가능하다.

```typescript
interface State {
  name: string;
  capital: string
}

interface State {
  population: number;
}

const wyoming: State = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000
} // 정상
```

이처럼 속성을 확장하는 것을 '선언 병합(declaration merging)' 이라고 한다.
선언 병합을 지원하기 위해서는 인터페이스를 사용하여야 한다.

es5 이전의 Array 와 es2015 의 Array 는 es2015 가 슈퍼셋이다.
이러한 확장 가능성이 열려있는 타입을 지원하기 위해 선언 병합을 사용한다.

### 결론

타입과 인터페이스 중 어느것을 사용하여야 할까?

두가지 방법으로 모두 표현할 수 있는 객체 타입이라면 일관성과 보강의 관점에서 고려가 필요하다.

* 일관되게 인터페이스를 사용하는 코드베이스에서는 인터페이스를 사용하라
* 일관되게 타입을 사용중이라면 타입을 사용하라.

아직 스타일이 확립되지 않은 프로젝트라면 **향후에 보강의 가능성이 있을지** 생각해보아야 한다.

* 특정 API에 대한 타입이라면 인터페이스가 적절하다. API 가 변경될 때 인터페이스를 통해 새로운 필드를 병합할 수 있어 유용하기 때문이다.
* 프로젝트 내부적으로 사용하는 닫힌 타입이라면 선언 병합이 발생하지 않는 타입이 적절하다.

## 19. 함수의 반환 타입 명시의 이점

함수의 반환 타입을 명시하면, 함수 내부의 구현상의 오류가 호출부로 전파되지 않는다.

이외 함수의 반환타입 명시 이점은 다음과 같다.

* 미리 반환 타입을 명시하는 방법은 TTD와 비슷하다. 전체 타입 시그니처를 먼저 작성하면 구현에 맞추어 주먹구구식으로 시그니처가 작성되는 것을 방지한다.
* 명명된 타입을 반환 할 경우 (ex: Vector2D) 반환 타입을 명시하지 않는다면 { x: number, y: number } 로 추론되어 사용자 입장에서 당황스러울 수 있음. 반환타입을 명명된 타입으로 명시하면 직곽적인 표현이 된다.
