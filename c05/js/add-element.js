let newLiElement = document.createElement('li')
let newTextNode = document.createTextNode("新項目")
newLiElement.appendChild(newTextNode)
let ulElment = document.getElementsByTagName('ul')[0]
ulElment.appendChild(newLiElement)