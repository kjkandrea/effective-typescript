const v1 = {
  x: 1,
  y: 2,
};

const v2 = {
  x: 1 as const,
  y: 2,
};

const v3 = {
  x: 1,
  y: 2,
} as const;

const a1 = [1, 2, 3];

const a2 = [1, 2, 3] as const;
