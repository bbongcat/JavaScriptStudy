// 2개의 정수의 합을 구하는 함수
function addTwo(num1, num2) {
    return num1 + num2;
}

// 3개의 정수의 합을 구하는 함수
function addThree(num1, num2, num3) {
    return num1 + num2 + num3;
}


// n개의 정수의 합을 구하는 함수 (배열을 사용)
// 방법 1
function addAll(numbers = []) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

// 방법 2
function addAll2(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

let result = addAll([10, 20, 5634, 78, 3367, 84, 452, 657]);
console.log(result);

let result2 = addAll2(10, 20, 453, 4353, 526, 3, 589, 86, 68763);
console.log(result2);