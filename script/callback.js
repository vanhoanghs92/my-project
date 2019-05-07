

let add = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' || typeof b != 'number') cb(new Error('Tham so truyen vao phai la number, và b phải khác 0'));
    if(b == 0) return cb(new Error('b phải khác 0'));
    cb(undefined, a + b);
  }, 1000);
}

let mul = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' || typeof b != 'number') cb(new Error('Tham so truyen vao phai la number, và b phải khác 0'));
    cb(undefined, a * b);
  }, 1000);
}

let div = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' || typeof b != 'number' && b != 0) cb(new Error('Tham so truyen vao phai la number, và b phải khác 0'));
    cb(undefined, a / b);
  }, 1000);
}

let tinhDTHT = (a, b, h, cb) => {
  add(a, b, (er, rs) => {
      if(er) return cb(er + '');
      mul(rs, h, (er, rs) => {
        if(er) return cb(er);
        div(rs, 2, (er, square) => {
         if(er) return cb(er);
         cb(undefined, square)
        })
      })
  })
}

tinhDTHT(2, 2, 2, (er, rs) => {
  if(er) console.log(er);
  console.log(rs);
})