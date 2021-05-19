/*
function showNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

showNumbers(5);


function showOddNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

showOddNumbers(11);


function showEvenNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

showEvenNumbers(11);
*/


// 콜백 함수
function showNumbers(n, callback) {
    for (let i = 1; i <= n; i++) {
        callback(i);
    }
}

function logOdd(i) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

function logEven(i) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// showNumbers(20, logEven);
// showNumbers(20, logOdd);
showNumbers(20, function (i) {
    if (i % 3 === 0) console.log(i);
});

console.log('============================');

// 숫자 배열을 전달하면 해당 배열을 조건부로 필터링하여 복사 배열을 만들어주는 함수

function filter(array, callback) {
    let filteredArray = [];
    for (let i of array) {
        if (callback(i)) {
            filteredArray.push(i);
        }
    }
    return filteredArray;
}

let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
/*
let result = filter(numbers, function (n) {
    return n % 3 === 0;
});
console.log(result);
*/


// ES6 화살표 함수
let result = filter(numbers, n => n % 3 === 0);
console.log(result);