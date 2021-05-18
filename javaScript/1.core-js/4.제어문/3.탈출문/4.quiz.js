/*
- Quiz.
아래 요구사항에 맞는 코드를 작성하고
브라우저에서 실행하여 테스트하세요.
- 요구사항
    1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을
       물어보는 문제가 지속적으로 출제되게 하세요.
    2. 올바른 답을 입력할 시 “정답입니다”를
       틀린 답을 입력할 시 “오답입니다”를 출력하세요.
    3. 사용자가 0을 입력하면 문제 출제를 중단하고
       누적된 정답 횟수와 오답횟수를 출력하세요.
*/


// 정오답 횟수 카운트 변수
var correctCnt = 0, incorrectCnt = 0;

while (true) {

    // 0 이상 101 미만
    var firstNum = Math.floor(Math.random() * 101);
    var secondNum = Math.floor(Math.random() * 101);

    // 랜덤 숫자 0, 1이 등장하도록 변수 선언
    // 0: +, 1: -
    var operatorNum = Math.floor(Math.random() * 2);

    // 랜덤 연산자 기호 만들기
    // var operatorMark = (operatorNum === 0) ? '+' : '-';
    var operatorMark;
    if (operatorNum === 0) {
        operatorMark = '+';
    } else {
        operatorMark = '-';
    }

    // 실제 정답
    var total;
    if (operatorMark === '+') {
        total = firstNum + secondNum;
    } else {
        total = firstNum - secondNum;
    }

    // 일단 사용자가 입력한 답안
    var userAnswer = +prompt(`${firstNum} ${operatorMark} ${secondNum} = ??`);

    if (userAnswer === 0) {
        break;
    }

    // 정답 오답 판별
    if (userAnswer === total) {
        alert('정답입니다!');
        correctCnt++;
    } else {
        alert('오답입니다!');
        incorrectCnt++;
    }
} // 반복문 종료

alert(`프로그램이 종료되었습니다.\n# 정답 횟수: ${correctCnt}회, 오답 횟수: ${incorrectCnt}회`);