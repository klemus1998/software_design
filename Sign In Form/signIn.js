function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "admin" && password == "pass")
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