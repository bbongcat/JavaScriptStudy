let x = 'global x';

function outer(x) {
    let y = 'outer local y';
    console.log(x);
    console.log(y);
    // console.log(z); 자식의 데이터 참조 불가

    function inner() {
        let x = 'inner local x';
        let z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
}

outer('outer local x');