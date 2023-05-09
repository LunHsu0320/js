function updateMessage(message){
    let message_element= document.getElementById('message')
    message_element.innerText = message;
}
let msg = "加入會員可以獲得10%優待券";
updateMessage(msg);