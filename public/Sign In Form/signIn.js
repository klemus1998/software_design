function register()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
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