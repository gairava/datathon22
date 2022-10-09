function validate() {
    // form validation
    const name = document.querySelector("form.box input[name='username']") || null
    const password = document.querySelector('.password');
    const tel = document.querySelector('.tel');
    const submitBtn = document.querySelector('.submit');

    if (name == null) { // check if login page is open
        window.location = "login.html";
    } else {
        // register page is open
        submitBtn.addEventListener('click', () => {
            fetch('/register-user', {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                    tel: tel.value
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
