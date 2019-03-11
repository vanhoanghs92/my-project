let pr = new Promise((rv, rj) => {
   rv(new Error('Tham số bị lỗi'));
rj(new Error('Tham so khong dung'));
 })

 pr.then(ms => console.log(ms + ''),
 errms => console.log(errms + ''));