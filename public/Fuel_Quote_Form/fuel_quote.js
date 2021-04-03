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

var addy = document.getElementById('d_address');

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
}



document.getElementById('fuelquote').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    ref.on('value',saveData);

   window.location.href = "../Quote History/fuel_history.html";
}

function saveData(data) {
    var users = data.val();
    var keys = Object.keys(users);
    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];
    }

    var gallons = document.getElementById('gallons_id').value;
    var date = document.getElementById('date').value;
    var ppg = document.getElementById('ppg').value;
    var total = document.getElementById('total').value;
    console.log(ppg,total);
    var newRef=firebase.database().ref('users/'+k+'/fuelquote');
    newRef.update({
        gallons_requested: gallons,
        delivery_date: date,
        price_per_gallon: ppg,
        total: total
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