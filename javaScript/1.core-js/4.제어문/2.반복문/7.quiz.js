/*
- Quiz.
중첩 for문을 이용하여
방정식 4x + 5y = 60 의 모든 해를 구해서
( x, y ) 형태로 콘솔에 출력하세요.
- 요구사항
1. x와 y는 10이하의 자연수입니다.
- 출력 예시
( 5, 8 )
( 10, 4 )
*/

for (let x = 1; x < 11; x++) {
    for (let y = 1; y < 11; y++) {
        if (4 * x + 5 * y === 60) {
            console.log(`( ${x}, ${y} )`);
        }
    }
}