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

