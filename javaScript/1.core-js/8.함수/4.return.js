function add(n1, n2) {
    return n1 + n2;
}

function addFor3(n1, n2, n3) {
    return add(n1, n2) + n3;
}

let result = add(10, 20);
console.log(result);
console.log(add(30, 50));

let x = add(add(add(5, 5), 100), 200);
console.log(`x: ${x}`);

let y = addFor3(3, 4, 5);
console.log(y);

console.log('=================================');

// void 함수 (return이 없는 함수)
// return이 없는 void 함수는 변수에 저장이 안됨. undefined가 저장됨.
function greetings(nickname) {
    if (nickname === '바보') {
        console.log('그런 나쁜 말은 쓰지 마세요.');
        return;
    }
    console.log(`${nickname}님 안녕하세요!`);
}

greetings('김개똥');
greetings('박쥐똥');
greetings('바보');

console.log('=================================');

function showMultiply(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

showMultiply(30, 40);

console.log('=================================');

function infLooping() {
    let n = 1;
    while (true) {
        console.log(n);
        if (n === 10) {
            return;
        }
        n++;
    }
}

infLooping();
console.log('=================================');


// 함수가 리턴할 수 있는 데이터는 '단 하나'이다.
// 2개의 정수를 전달 받아서 덧셈, 뺄셈, 곱셈, 나눗셈 결과를 다 리턴하고 싶다면
// 객체라는 데이터 하나에 덧셈, 뺄셈, 곱셈, 나눗셈을 넣으면 가능
function operateAll(n1, n2) {
    return {
        plus: n1 + n2,
        minus: n1 - n2,
        multiply: n1 * n2,
        divide: n1 / n2
    };
}

let results = operateAll(10, 5);
console.log(`덧셈 결과: ${results.plus}`);
console.log(`곱셈 결과: ${results.multiply}`);
console.log(operateAll(20, 3).minus);
console.log(operateAll(77, 99).divide);
