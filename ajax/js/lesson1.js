let sarea_array = []
let sareaElement = document.getElementById("sarea");

//select裡面的option被運用 當區域被選擇的時候 
//顯示資料有沒有在列表裡 如果有顯示"有這個區域"
sareaElement.addEventListener("change", (event) => {
    let selectedIndex = sareaElement.selectedIndex;
    selectedValue = sareaElement.options[selectedIndex].value;
    if(sarea_array.includes(selectedValue)){
        console.log('有這個區域')    
    }
})

//把讀取的資料整理並存入到html select裡
function reqListener() {
    let youbikedata = JSON.parse(this.responseText);
    
    for (const youbike of youbikedata) {
        sarea_array.push(youbike.sarea);
    }
    sarea_array = [...new Set(sarea_array)]//Set功能不會重複加入資料
    console.log(sarea_array)//print 資料到主控台 
    let optionElement = document.createElement("option");
    optionElement.textContent = '請選擇行政區'
    sareaElement.appendChild(optionElement);
 
    //將讀取到的區名加入到select中    
    for (const area of sarea_array) {
        let optionElement = document.createElement("option");
        optionElement.textContent = area;
        sareaElement.appendChild(optionElement);
    }
}
//建立XMLHttpRequest 下載資料load後執行reqListener
const windowload = (event) => {
    console.log('page loaded')
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();
}

//網頁load後執行windowload
window.addEventListener('load', windowload)