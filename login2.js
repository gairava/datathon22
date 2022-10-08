function validate() {
    var username=document.getElementById("username").ariaValueMax;
    var password=document.getElementById("password").ariaValueMax;
}
if (username == "admin" && password=="1234"){
    alert("login successful");
    return false;
}
else {
    alert("login failed");
}