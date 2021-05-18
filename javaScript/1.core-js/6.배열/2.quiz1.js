/*
    # scores라는 이름을 가진 배열 변수가 있습니다.
      여기에는 학생들의 수학점수가 8개 저장됩니다.
      점수는 임의로 설정하세요.
    - 요구사항:
    1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
       콘솔에 출력하세요.
    2. 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로
       총점, 평균이 갱신되어야 합니다.
*/

scores = [87, 33, 67, 70, 98, 100, 64, 92, 43, 98, 59];

let total = 0;

for (let score of scores) {
    total += score;
}

const avg = total / scores.length;
const prettierAvg = Math.floor(avg * 100) / 100;

console.log(`학생들 수학 총점: ${total}점, 평균: ${prettierAvg}점`);
