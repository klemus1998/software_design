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

var gallons = document.getElementById('gallons');
var date = document.getElementById('date');
var addy = document.getElementById('d_address');
var ppg = document.getElementById('ppg');
var total = document.getElementById('total');

var ref=firebase.database().ref('users');
ref.on('value',gotData);

function gotData(data)
{
    var users = data.val();
    var keys = Object.keys(users);
    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];
        var address = users[k].addie;
    }
    
    addy.innerText=address;
    var newRef=firebase.database().ref('users/'+ k);
    newRef.on('value',gotMoreData);
}

function gotMoreData(data)
{
    var users = data.val();
    var keys = Object.keys(users);
    var k=keys[3];
    gallons.innerText=users[k].gallons_requested;
    date.innerText=users[k].delivery_date;
    ppg.innerText=users[k].price_per_gallon;
    total.innerText=users[k].total;

}