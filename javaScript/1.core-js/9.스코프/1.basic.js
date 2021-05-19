let x = 10;

function foo() {
    let y = 20;
    console.log(x);
    console.log(y);
}

foo();
console.log(x);
// console.log(y); // 함수 레벨 스코프이므로 참조 불가능

console.log('============================');

let v1 = 'global';

function bar(v2) {
    let v1 = 'local';
    console.log(`v1: ${v1}`);
}

console.log(`v1: ${v1}`);
bar();
console.log(`v1: ${v1}`);
// console.log(v2);