let a = 10;
console.log(typeof a);
a = '' + a; //String(a);
console.log(typeof a);
a = '42';
a = +a; //Number(a);
console.log(typeof a);
console.log(a);
a = 42;
a = !!a; //Boolean(a);
console.log(typeof a);
console.log(a);