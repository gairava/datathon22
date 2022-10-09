function validateSignIn() {
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    const phoneNum=document.getElementById("phoneNum");

    if (username && password && phoneNum){
        alert("registration successful");
        window.open("website.html");
    }
    else {
        alert("registration failed");
    }
}