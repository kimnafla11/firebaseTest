
(function() {

    const config = {
        apiKey: "AIzaSyDKdyj4qG0UqbG1QBc101C54ORTvMqJPLA",
        authDomain: "webtermproj-5dec2.firebaseapp.com",
        databaseURL: "https://webtermproj-5dec2.firebaseio.com",
        projectId: "webtermproj-5dec2",
        storageBucket: "webtermproj-5dec2.appspot.com",
        messagingSenderId: "613537312259",
        appId: "1:613537312259:web:d6c8df52313d61db2ae836"
    };
    firebase.initializeApp(config);
  
  
    const preObject = document.getElementById('object');
    
    const dbRefObject = firebase.database().ref().child('object');
    
    dbRefObject.on('value', snap => { 
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });
  }());
  
