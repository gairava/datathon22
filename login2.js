function validate() {
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    if (username && password){
        alert("login successful");
        window.open("website.html");
    }
    else {
        alert("login failed");
    }
}