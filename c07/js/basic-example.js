let liElements = document.querySelectorAll('li')
//hide show
// liElements.forEach((element) => {
//     element.addEventListener('click', (event) => {
//         let liElement = event.currentTarget
//         $(liElement).hide(1000, () => {
//             console.log("hide load")
//         }).show(1000, () => {
//             console.log("show load")
//         })
//     })
// })

//remove
liElements.forEach((element) => {
    element.addEventListener('click', (event) => {
        let liElement = event.currentTarget
        $(liElement).hide(1000, () => {
            liElement.remove()
        })
    })
})
        
    
