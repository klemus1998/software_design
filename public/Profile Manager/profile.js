var database = firebase.database();

function handleSubmit() {
    const address = document.getElementById('address').value;

    localStorage.setItem("ADDRESS", address);

    return;
}

var adddie

function Ready() {
    addie = getElementById('address').value;
}

document.getElementById('submitBtn').onclick = function(){
    Ready();
    firebase.database().ref('test/').set({
        AddressOfClient: addie
    });
}