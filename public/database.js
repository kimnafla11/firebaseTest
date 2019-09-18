//데이터베이스 참조 가져오기
var database = firebase.database();

//데이터베이스 메세지 쓰기
firebase.database().ref('/취미').set('게임');
firebase.database().ref('/전공').set('it경영');