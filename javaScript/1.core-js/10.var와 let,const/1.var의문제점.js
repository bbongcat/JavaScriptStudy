// 1. 변수 중복선언 허용
var x = 1;
var x = 100;
console.log(x);


// 2. 블록 레벨 스코프를 지원하지 않음
var y = 1;
for (var y = 1; y < 3; y++) {}
console.log(y);

let yy = 1;
for (let yy = 1; yy < 3; yy++) {}
console.log(yy);


// 3. 변수 호이스팅
z = 100;
console.log(z);
var z;