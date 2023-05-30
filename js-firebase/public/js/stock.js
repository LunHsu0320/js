
let selectedElement = document.querySelector('#stockSelect')
fetch(new Request('codeSearch.json'))
    .then((response) => {
        return response.json()
    }).then((r) => {
        r.forEach(element => {
            let code = element.code
            let name = element.name
            let stockName = `${code}-${name}`
            let optionElement = document.createElement("option")
            //option 加上value
            optionElement.value = code                    
            //option 裡面文字使用stockName帶的值
            optionElement.innerText = stockName
            selectedElement.appendChild(optionElement)
        });

    })
let fromElement = document.querySelector('form')
fromElement.addEventListener('submit',(event) => {
event.preventDefault()

})