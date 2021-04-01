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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var nameRef = firebase.database().ref('names');

document.getElementById('profileSubmit').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = document.getElementById('thisname').value;
    var addie = document.getElementById('address').value;

    saveNames(name, addie);

    window.location.href = "../Fuel_Quote_Form/fuel_quote.html";
}


function saveNames(name, addie) {
    nameRef.set({
        name: name,
        addie: addie
    });
}