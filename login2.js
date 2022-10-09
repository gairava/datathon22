function validate() {
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    if (username && password){
        alert("login successful");
        window.open("website.html");
    }
    else {
        alert("login failed");
    }
}