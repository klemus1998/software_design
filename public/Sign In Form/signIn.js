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

function register()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Registered
        var user = userCredential.user;
        // ...
        window.location.href = "../Profile Manager/ProfileManager.html";
    })
    .catch(e => alert(e.message));
    console.log("Hello");
    alert("Registered");
}

function signIn()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        window.location.href = "../Fuel_Quote_Form/fuel_quote.html";
      })
    .catch(e => alert(e.message)); 

    //promise.catch(e => alert(e.message));
    alert("Signed In " + email);
    
    
}