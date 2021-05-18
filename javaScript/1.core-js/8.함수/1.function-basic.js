// 함수 정의
function calculateTotal(x) {
    console.log('함수 실행!');

    let total = 0;
    for (let n = 1; n <= x; n++) {
        total += n;
    }
    return total;
}

// 함수 호출
let result = calculateTotal(100);
console.log(result);
calculateTotal(50);
calculateTotal(100);


// 함수 리터럴 (리터럴은 표현식이라서 ;을 찍음)
// 이름 없이 몸체만 있는 함수를 함수 리터럴이라고 한다.
// 함수 리터럴을 사용하는 방법(함수가 이벤트와 연결되는 방법)이
// 자바스크립트와 HTML 코드를 혼합하는데 있어 HTML 속성을 사용해서 구현하는 것 보다 더 우수하다.
let add = function (x, y) {
    return x + y;
};
/* 위와 같은 식
function add(x, y) {
    return x + y;
} */

console.log(add(10, 20));
console.log(add(100, 200));
console.log(add(-10, -20));

console.log('===========================');

// 함수식 이름이 너무 길 경우 이렇게 변수에 할당하여 호출 가능
let ct = calculateTotal;
console.log(ct(10));
console.log(ct(100));

