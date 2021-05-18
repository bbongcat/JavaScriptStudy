/*
        Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을
           반환하는 함수 calcNumbersTotalAndAverage를 작성하세요
 */

function calcNumbersTotalAndAverage(...numbers) {
    let total = 0;
    for (number of numbers) {
        total += number;
    }

    let avg = Math.floor((total / numbers.length) * 100) / 100;

    return {
        total: total,
        avg: avg
    };

}

let result = calcNumbersTotalAndAverage(90, 80, 100, 90);
console.log(`입력한 숫자들의 총합: ${result.total}, 평균: ${result.avg}`);
