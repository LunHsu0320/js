let formElement = document.getElementById('formSignup')
let packageElement = document.getElementById('package')
let packageHintElement = document.getElementById('packageHint')
let termsElement = document.getElementById('terms')
let termsHintElement = document.getElementById('termsHint')

formElement.addEventListener('submit', (event) => {
    console.log('submit')
    if (!termsElement.checked) {
        termsHintElement.innerText = '必須打勾同意'
        event.preventDefault()
    }
})

packageElement.addEventListener('change', (event) => {
    console.log('change')
    // for(const option of packageElement.options){
    //     console.log(option.label)
    //     console.log(option.value)
    // }
    let selectedIndex = packageElement.selectedIndex
    if (packageElement.options[selectedIndex].value == 'monthly') {
        packageHintElement.innerHTML = '如果選擇1年可以省10元美金'
    } else {
        packageHintElement.innerHTML = '正確選擇'
    }

}
)