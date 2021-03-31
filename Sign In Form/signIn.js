function validate()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email == "admin@gmail.com" && password == "pass")
    {
        alert("login successful");
        true;
    }
    else
    {
        alert("login failed");
        return false;
    }
}