// 함수 리터럴, 함수 표현식
let add = function (num1, num2) {
    return num1 + num2;
};

console.log(typeof add);
console.log(add(4, 7));

console.log('============================');

// 즉시 실행 함수
let result = (function (x, y) {
    console.log(`x + y = ${x + y}`);
    return x + y;
}(30, 50));

console.log(result);


(function (name) {
    console.log(`${name}님 안녕하세요!`);
}('고길동'));

console.log('============================');

// 재귀 함수
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}

countdown(5);

console.log('============================');

// 재귀 함수를 이용한 팩토리얼 계산
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
/*
    1회차 : 5 * factorial(4)      = 120 ( 5 * 24 )
    2회차 : 4 * factorial(3)      = 24  ( 4 * 6 )
    3회차 : 3 * factorial(2)      = 6   ( 3 * 2 )
    4회차 : 2 * factorial(1)      = 2   ( 2 * 1 )
    5회차 : if문에 걸려 return 1 반환
 */

console.log('============================');

// 중첩 함수
function outer() {
    let x = 1;

    function inner() {
        let y = 2;
        console.log(x + y);
    }

    inner();
}

outer();