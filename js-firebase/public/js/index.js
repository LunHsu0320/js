let formElement = document.querySelector('#form')
let allOfDataArray= [];


//Name校驗
const validateName = ()=>{
    let inputNameElement = document.querySelector('#inputName')
    let nameAlertElement = document.querySelector('#nameAlert')
    let productName = inputNameElement.value
    if(productName.length == 0){
        console.log('沒有填資料')
        nameAlertElement.classList.remove("close")
        return
    }
    console.log(productName)
    allOfDataArray.push({'productName':productName})
}


//驗證code校驗
const validateCodeFormat=()=>{
    let inputCodeElement = document.querySelector('#inputCode')
    let codeAlertElement = document.querySelector('#codeAlert')
    let inputCodeValue = inputCodeElement.value
    console.log(inputCodeValue)
    const codePatternReg = /\w\w\w-\w\w\w-\w\w\w/g//建立正規表達式
    if(inputCodeValue.length == 0||codePatternReg.test(inputCodeValue)==false){
        //判斷式 資料如果為0 或者 正規表達式是否為錯誤
        //console.log('沒有填資料')
        codeAlertElement.classList.remove("close")
        return
    }
    allOfDataArray.push({'code':inputCodeValue})
    
} 


//radio表單check
const checkRadionValue = ()=>{
    let radionElement = document.querySelectorAll('.form-check-input')
    console.log(radionElement)
    radionElement.forEach(element=>{
        if(element.checked){
            console.log(element)
            console.log(element.value)
            allOfDataArray.push({'catgory':element.value})
        }
    })
}

//保固checkbox
const warrantyCheck = ()=>{
    let checkboxElement = document.querySelector('#warrantyCheck1')
    if (checkboxElement.checked){
        allOfDataArray.push({'warranty':true})
    }else{
        allOfDataArray.push({'warranty':false})    
    }
}

const warrantyDateInput=()=>{
    let warrantyDateInput = document.getElementById('warrantyDate');
    let warrantyDateValue = warrantyDateInput.value;    
    console.log('選取的日期:', warrantyDateValue);
    allOfDataArray.push({'選取的日期:': warrantyDateValue})
}




const clearAllAlertAndData = ()=>{
    //清除產品警告
    let nameAlertElement = document.querySelector('#nameAlert')
    nameAlertElement.classList.add("close")
    //清除code警告
    let codeAlertElement = document.querySelector('#codeAlert')
    codeAlertElement.classList.add("close")
    //清除收集的資料
    allOfDataArray=[]

}






formElement.addEventListener('submit', (event) => {
    clearAllAlertAndData()
    event.preventDefault()
    validateName()
    validateCodeFormat()
    checkRadionValue()
    warrantyCheck()
    warrantyDateInput()
    
    console.log(allOfDataArray)
})