function validateSignUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phoneNum = document.getElementById("phoneNum").value;

    if (username && password && phoneNum){
        alert('register successful');
        window.open("website.html");

        if (username == null) { // check if login page is open
            window.location = "login.html";
        } else {
            // register page is open
            submitBtn.addEventListener('click', () => {
                fetch('/register-user', {
                    method: 'POST',
                    headers: new Headers({'Content-Type': 'application/json'}),
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        number: phoneNum
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.name) {
                            alert('register successful')
                            window.location = "website.html";
                        } else {
                            alert(data)
                            window.location = "login.html";
                        }
                    })
                })
            })
        }
    }
    else {
        window.location("failed.html");
    }
}