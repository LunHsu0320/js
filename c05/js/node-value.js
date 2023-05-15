let elementTwo  = document.getElementById('two');//選取element by id
let nodeTwo = elementTwo.firstChild
console.log(nodeTwo.nodeValue);
//修改方法一
nodeTwo.nodeValue = nodeTwo.nodeValue.replace('pine nuts','kale')//nodeValue屬性返回或設置當節前的值
//修改方法二
nodeTwo.nodeValue = "內容有問題"
//修改方法三
elementTwo.innerText = "內容有問題!!!"
