for (let table = 2; table <= 9; table++) {
    console.log('==================================');
    console.log(`-=-=-=-=-=>[구구단 ${table}단]<=-=-=-=-=-`);
    console.log('==================================');

    for (var line = 1; line < 10; line++) {
        console.log(`${table} X ${line} = ${table * line}`);
    }
}

console.log('==================================');

for (var i = 0; i < 5; i++) { //5바퀴
    for (var j = 0; j < 3; j++) { //3바퀴
        for (var k = 0; k < 2; k++) { //2바퀴     총 5*3*2 = 30바퀴 도는 중첩반복문
            console.log(`${i} ${j} ${k}: 안녕하세요`);
        }
    }
}