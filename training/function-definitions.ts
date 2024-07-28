function add1(v1: number, v2: number): number {
  return v1 + v2;
}

const result11 = add1(1, 2);
console.log(result11);

const add2 = function (v1: number, v2: number): number {
  return v1 + v2;
};

console.log(add2);

const result22 = add2(1, 2);
console.log(result22);

const add3 = (v1: number, v2: number) => {
  return v1 + v2;
};

const result33 = add3(1, 2);
console.log(result33);
