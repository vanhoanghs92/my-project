// let square = (a, b, h) => (a+b)*h/2;

// console.log('Dt:' + square(2, 3, 2));

var add = (a, b, cb) => {
  setTimeout(() => {
    let err, result;
    if(typeof a != 'number' || typeof b != 'number') {
      err = 'Tham so phai co kieu number';
      return cb(err, result);
    }
    return result = a + b;
  }, 1000);
}

add(4, 5, (err, result) => {
  if(err) return console.log(err);
  console.log(result);
});
