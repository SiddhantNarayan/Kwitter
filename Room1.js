
var firebaseConfig = {
      apiKey: "AIzaSyAI_IdJTdi_252WVF_TAtisjF-_EGymtdw",
      authDomain: "kwitter-d4489.firebaseapp.com",
      databaseURL: "https://kwitter-d4489-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4489",
      storageBucket: "kwitter-d4489.appspot.com",
      messagingSenderId: "864451961352",
      appId: "1:864451961352:web:e57a798c59d1a5913827bd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  User = localStorage.getItem("Username");
  document.getElementById("username").innerHTML = "Welcome "+User+"!";
  function rooming()
  {
        Roomname = document.getElementById("Roomname").value;
        firebase.database().ref("/").child(Roomname).update({
              purpose: "adding room in kwitter"
        });

        localStorage.setItem("room", RoomName);
        window.location = "Page.html";

        
  }

  function getData() {firebase.database().ref("/").on('value',
      function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(
            function(childSnapshot) {childKey =
  childSnapshot.key;
   Rooms = childKey;
   //Start code
   console.log("roomname - "+Rooms);
   Row = "<div class='Roomname' id="+Rooms+" onclick='redirect(this.id)'#"+Rooms+"</div>"
   document.getElementById("output").innerHTML += Row;
   //End code
                  });
            });
      }
  getData();

  function redirect(PS)
  {
      console.log(PS);
      localStorage.setItem("Room", PS);

      window.location = "Page.html";
  }

  function logout()
  {
        localStorage.removeItem("Username");
        localStorage.removeItem("Username");

        window.location.replace("index.html");
  }
  