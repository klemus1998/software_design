  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

var userRef = firebase.database().ref("users/fuelquote");

document.getElementById('fuelquote').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var gallons = document.getElementById('gallons_id').value;
    var date = document.getElementById('date').value;

    saveData(gallons, date);

    window.location.href = "../Quote History/fuel_history.html";
}

function saveData(gallons, date) {
    userRef.push().update({
        gallons_requested: gallons,
        delivery_date: date
    });
}


window.addEventListener('load', () =>
{
    
})

function pricing_module() {
    return 2.4;
}

function calc_result() {
    total = 50 * pricing_module();
    return total.toFixed(2);
}