let sareaElement = document.getElementById("sarea");

function reqListener() {
    let youbikedata = JSON.parse(this.responseText);
    let sarea_array = []
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

const windowload = (event) => {
    console.log('page loaded')
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();
}

//
window.addEventListener('load', windowload)