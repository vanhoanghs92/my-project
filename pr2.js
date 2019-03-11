import { promises, fstat } from "fs";

// let add = (a, b) => {
//     return new Promise((rv, rj) => {
//        setTimeout(() => {
//         if( typeof a != 'number' || typeof b != 'number') return rj(new Error('Tham so khong phai la number'));
//         rv(a + b);
//        }, 2000)
//     });
// }

// add(4, '5')
// .then(rv => console.log(rv), rj => console.log(rj + ''))

// let fs = require('fs');


// let promiseRead = new Promise((res, rej) => {
//     fs.readFile('./a.txt', 'utf8', (err, data) => {
//         if (err) rej(err);
//         res(data);
//     });
// })

// promiseRead.then(data => console.log(data), err => console.log(err + '')); 

let read = (fileName) => {
    return new Promise((res, rej) => {
       fs.readFile(fileName, 'utf8', (err, data) => {
           if (err) return rej(err);
           res(data)
       })
    })
}

read('./a.txt')
.then(data => console.log(data), err => console.log(err));