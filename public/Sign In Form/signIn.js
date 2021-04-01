var firebaseConfig = {
    apiKey: "AIzaSyALuDn_Og_wckAe6JclRKlDzzk2Rim-4Pw",
    authDomain: "software-design-8ea1b.firebaseapp.com",
    databaseURL: "https://software-design-8ea1b-default-rtdb.firebaseio.com",
    projectId: "software-design-8ea1b",
    storageBucket: "software-design-8ea1b.appspot.com",
    messagingSenderId: "357419323251",
    appId: "1:357419323251:web:707639ce6ca1dc738aff06",
    measurementId: "G-MWFFLG1JZE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();
  
  auth.onAuthStateChanged(function(user)
  {
      if(user)
      {
          var email = user.email;
          alert("Active user " + email);
  
          //is signed in
      }
      else{
          alert("No Active User");
      }
  })
function register()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));
    console.log("Hello");
    alert("Registered");
}

function signIn()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In " + email);
}