/*
    콘솔 실행 테스트
    - 요구사항
    1. 프로그램 실행 시 2 ~ 9단 중 무작위로 구구단이 등장하게 하세요.
    2. for 문과 while 문으로 각각 구현하세요.

    힌트) 먼저 2단을 구현해 본 뒤, 성공하면 랜덤 구구단으로 바꿔 보기
 */

let table = Math.floor(Math.random() * 8) + 2;

console.log('==================================');
console.log(`-=-=-=-=-=>[구구단 ${table}단]<=-=-=-=-=-`);
console.log('==================================');

for (let i = 1; i < 10; i++) {
    console.log(`${table} X ${i} = ${table * i}`);
};


console.log('===========while===========');
let line = 1;
while (line < 10) {
    console.log(`${table} X ${line} = ${table * line}`);
    line++;
}