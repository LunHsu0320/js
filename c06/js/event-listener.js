function checkUsername() {
    let feedbackElement = document.getElementById('feedback')
    // let usernameElenment = document.getElementById('username')
    let username = this.value
    if (username.length < 5) {
        feedbackElement.textContent = "使用者的名稱必須大於5個字元"
    } else {
        feedbackElement.textContent = ""
    }
}

document.getElementById('username').addEventListener('blur',checkUsername,false);
