//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAa_F_XPoUgs3fDSJLswTZhQrxv7rZj6_0",
      authDomain: "kwitter-project-69bb1.firebaseapp.com",
      databaseURL: "https://kwitter-project-69bb1-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-69bb1",
      storageBucket: "kwitter-project-69bb1.appspot.com",
      messagingSenderId: "836414661057",
      appId: "1:836414661057:web:ba5388ac217767dca20f40"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
       });
       document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
