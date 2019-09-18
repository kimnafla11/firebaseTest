  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDKdyj4qG0UqbG1QBc101C54ORTvMqJPLA",
    authDomain: "webtermproj-5dec2.firebaseapp.com",
    databaseURL: "https://webtermproj-5dec2.firebaseio.com",
    projectId: "webtermproj-5dec2",
    storageBucket: "webtermproj-5dec2.appspot.com",
    messagingSenderId: "613537312259",
    appId: "1:613537312259:web:d6c8df52313d61db2ae836"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  /*
  //데이터베이스 참조 가져오기
  var database = firebase.database();

  //데이터베이스 메세지 쓰기
  firebase.database().ref('/메세지').set('하이염!');
  firebase.database().ref('/나이').set(25);
*/

  //console.log(database);

  /*
  //참조위치에서 DB쓰기
  function writeUserData(userId, name, email, imageUrl){
      firebase.database().ref('users/'+userId).set({
          username : name,
          email: email,
          profile_picture : imageUrl
      });
  }

  //특정 필드 업데이트
  function writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }*/