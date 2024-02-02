let a = true;
let b = false;
let res = a || b;
console.log(res);
res = a && b;
console.log(res);
console.log("================");
a = null;
// let nickName = (a !== null && a !== undefined) ? a : 'Anonymus'; //Java
let nickName = a || 'Anonymus';
console.log(nickName);
console.log('--------------');
greeting('mar');

function greeting(name = 'Anonimus') {
    // name = name || `Anonimus`;
    // name = name ?? 'Anonimus'
console.log(`Hello ${name}`);
}