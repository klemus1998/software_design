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

  
var userRef = firebase.database().ref('users');

document.getElementById('profileSubmit').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = document.getElementById('thisname').value;
    var addie = document.getElementById('address').value;
    var addie2 = document.getElementById('address2').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;

    saveData(name, addie, addie2, city, state, zip);

    window.location.href = "../Fuel_Quote_Form/fuel_quote.html";
}


function saveData(name, addie, addie2, city, state, zip) {
    userRef.push().set({
        name: name,
        addie: addie,
        addie2: addie2,
        city: city,
        state: state,
        zipcode: zip
    });
}