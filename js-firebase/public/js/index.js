// import { initializeApp } from "firebase/app";
// import { initializeApp } from "../node_modules/firebase/app";

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'
// import { initializeApp } from '/js-firebase/node_modules/firebase/firebase-app.js'

import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ_OmmFd7rpNiP3h-9hbJg4OCmtRfI4PM",
    authDomain: "js-firebase-da216.firebaseapp.com",
    projectId: "js-firebase-da216",
    storageBucket: "js-firebase-da216.appspot.com",
    messagingSenderId: "618826833406",
    appId: "1:618826833406:web:b2821fada03fb390bb34af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let formElement = document.querySelector('#form')
let allOfDataObject = {};

//Name校驗
const validateName = () => {
    let inputNameElement = document.querySelector('#inputName')
    let nameAlertElement = document.querySelector('#nameAlert')
    let productName = inputNameElement.value
    if (productName.length == 0) {
        console.log('沒有填資料')
        nameAlertElement.classList.remove("close")
        return
    }
    console.log(productName)
    // allOfDataArray.push({ 'productName': productName })
    allOfDataObject['productName'] = productName
}


//驗證code校驗
const validateCodeFormat = () => {
    let inputCodeElement = document.querySelector('#inputCode')
    let codeAlertElement = document.querySelector('#codeAlert')
    let inputCodeValue = inputCodeElement.value
    console.log(inputCodeValue)
    const codePatternReg = /\w\w\w-\w\w\w-\w\w\w/g//建立正規表達式
    if (inputCodeValue.length == 0 || codePatternReg.test(inputCodeValue) == false) {
        //判斷式 資料如果為0 或者 正規表達式是否為錯誤
        //console.log('沒有填資料')
        codeAlertElement.classList.remove("close")
        return
    }
    // allOfDataArray.push({ 'code': inputCodeValue })
    allOfDataObject['code'] = inputCodeValue

}


//radio表單check
const checkRadionValue = () => {
    let radionElement = document.querySelectorAll('.form-check-input')
    console.log(radionElement)
    radionElement.forEach(element => {
        if (element.checked) {
            console.log(element)
            console.log(element.value)
            // allOfDataArray.push({ 'catgory': element.value })
            allOfDataObject['category'] = element.value
        }
    })
}

//保固checkbox
const warrantyCheck = () => {
    let checkboxElement = document.querySelector('#warrantyCheck1')
    if (checkboxElement.checked) {
        // allOfDataArray.push({ 'warranty': true })
        allOfDataObject['warranty'] = true
    } else {
        // allOfDataArray.push({ 'warranty': false })
        allOfDataObject['warranty'] = false
    }
}

// const warrantyDateInput=()=>{
//     let warrantyDateInput = document.getElementById('warrantyDate');
//     let currentDate = new Date();
//     let currentDateISO = currentDate.toISOString().split('T')[0];
//     warrantyDateInput.value = currentDateISO;
//     let warrantyDateValue = warrantyDateInput.value;    
//     console.log('選取的日期:', warrantyDateValue);
//     allOfDataArray.push({'選取的日期:': warrantyDateValue})
// }
// warrantyDateInput()

const warrantyDateInputv2 = () => {

    let current = new Date();
    console.log(current)
    let year = current.getFullYear()
    let month = current.getMonth() + 1
    let day = current.getDate()

    let month_string = String(month).padStart(2, "0")
    let day_string = String(day).padStart(2, "0")
    let currentDateISO = `${year}-${month_string}-${day_string}`
    console.log(currentDateISO)
    let dateElement = document.querySelector('#warrantyDate')
    dateElement.value = currentDateISO
    dateElement.min = currentDateISO
}
warrantyDateInputv2()

const getwarrantyDate = () => {
    let dateElement = document.querySelector('#warrantyDate')
    // allOfDataArray.push({ 'warrantyDate': dateElement.value })
    allOfDataObject['warrantyDate'] = dateElement.value
}

// const getwarrantyDategpt = () => {
//     let warrantyDateInput = document.getElementById('warrantyDate');
//     allOfDataArray.push({ 'warrantyDate': warrantyDateInput.value })
// }

const clearAllAlertAndData = () => {
    //清除產品警告
    let nameAlertElement = document.querySelector('#nameAlert')
    nameAlertElement.classList.add("close")
    //清除code警告
    let codeAlertElement = document.querySelector('#codeAlert')
    codeAlertElement.classList.add("close")
    //清除收集的資料
    // allOfDataArray = []
    allOfDataObject = {}

}

const setEmpty = () => {
    let inputNameElement = document.querySelector('#inputName')
    inputNameElement.value = ''
    let inputCodeElement = document.querySelector('#inputCode')
    inputCodeElement.value = ''
    let radio1Element = document.querySelectorAll('#inlineRadio1')
    radio1Element.checked = true
    let checkboxElement = document.querySelector('#warrantyCheck1')
    checkboxElement.checked = false
    warrantyDateInputv2()
}


formElement.addEventListener('submit', async(event) => {
    clearAllAlertAndData()
    event.preventDefault()
    validateName()
    validateCodeFormat()
    checkRadionValue()
    warrantyCheck()
    // warrantyDateInput()
    // warrantyDateInputv2()
    getwarrantyDate()

    // getwarrantyDategpt()
    // console.log(allOfDataArray)
    console.log(allOfDataObject)
    try {
        const docRef = await addDoc(collection(db, "products"),allOfDataObject) 

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    setEmpty()
})