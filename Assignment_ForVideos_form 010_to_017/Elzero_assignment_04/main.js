let a = 21;
let b = 20;
let c = `${--a}${++b}_`.repeat(3);

console.log(`_${a}_${c}${b}_`); // _21_2021_2021_2021_20_
