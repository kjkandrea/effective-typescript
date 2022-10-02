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

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

const v3d: Vector3D = {x: 3, y: 4, z: 5};

console.log(calculateLength(v3d)); // 5
