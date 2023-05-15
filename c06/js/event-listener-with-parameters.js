//應用addEventListener(type, listener, useCapture)
document.getElementById('username').addEventListener('blur', function (event) {
    let feedbackElement = document.getElementById('feedback')
    let username_string = event.target.value
    // console.log(username)
    if (username_string.length < 5) {
        feedbackElement.textContent = "使用者的名綱必需大新5個字元"
    } else {
        feedbackElement.textContent = ""
    }
}, false);

//chatgpt 
// const feedbackElement = document.getElementById('feedback');
// const usernameInput = document.getElementById('username');

// usernameInput.addEventListener('blur', () => {
//   const username = usernameInput.value;
//   feedbackElement.textContent = username.length < 5 ? "使用者的名稱必須大於5個字元" : "";
// });
