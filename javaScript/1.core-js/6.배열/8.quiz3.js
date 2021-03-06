/*
- Quiz.
아래 요구사항에 맞는 코드를 작성하고
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후,
   입력받은 값들을 배열에 순차적으로 저장합니다.

2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

// 사용자가 입력한 숫자들을 저장할 배열
let numbers = [];

while (true) {
    let inputValue = prompt(`숫자를 입력하세요.\n(중단하고 싶을 경우 '그만'을 입력하세요.)`);

    if (inputValue === '그만') break;

    numbers.push(+inputValue);

}
console.log(numbers);

let total = 0;

for (let number of numbers) {
    total += number;
}

alert(`입력한 숫자의 총합: ${total}`);


/* 내가 한 것

let numbers = [];
let total = 0;

while (true) {
    let input = prompt('숫자를 입력하세요.\n(중단하고 싶을 경우 "그만"을 입력하세요)');

    if (input !== '그만') {
        numbers.push(+input);
    } else {
        for (number of numbers) {
            total += number;
        }
        alert(`입력한 숫자의 합계: ${total}`);
        break;
    }
}*/
