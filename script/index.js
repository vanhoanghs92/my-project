
// let mang = [4, 3, 5, 2];

// var nhan2 = e => e*2;
// var mang2 = mang.map(nhan2);
// console.log(mang2);

let getFunction = (num) => {
  if(num >= 0) return () => console.log('SD');
  return () => console.log('SA');
}

let a = () => {};

console.log(a());
