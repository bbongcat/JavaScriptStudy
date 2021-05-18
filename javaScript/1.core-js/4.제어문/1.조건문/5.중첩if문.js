// 로그인 폼 만들때도 중첩 if문을 활용함. id를 먼저 체크하고 id가 있을 경우 pw 체크

var height = +prompt('당신의 키는?');

if (height >= 140) {
    var age = +prompt('당신의 나이는?');

    if (age >= 8) {
        alert('놀이기구에 탑승할 수 있습니다.');
    } else {
        alert('8세 미만은 놀이기구에 탑승할 수 없습니다.');
    }
} else {
    alert('키 140 미만은 놀이기구에 탑승할 수 없습니다.');
}