let sarea_array = []
let sareaElement = document.getElementById("sarea");
let areaNameElement = document.getElementById('areaName')
let tbodyElement = document.getElementById('tbody')
let youbikedata
let dialogElement =document.getElementById("dialog")

//select裡面的option被運用 當區域被選擇的時候 
//顯示資料有沒有在列表裡 如果有顯示"有這個區域"
sareaElement.addEventListener("change", (event) => {
    let selectedIndex = sareaElement.selectedIndex;
    selectedValue = sareaElement.options[selectedIndex].value;
    if (sarea_array.includes(selectedValue)) {
        console.log('有這個區域')
        console.log(`行政區:${selectedValue}`)
        areaNameElement.innerText = selectedValue
        let trHTML = "" //行政區內的html資訊
        youbikedata.forEach(element => {

            if (element.sarea == selectedValue) {
                //站點狀態判斷
                if (element.act == "1") {
                    var status = "營業中"
                } else { var status = "維護中" }
                trHTML += "<tr>"
                trHTML += "<td>" + element.sna.slice(11) + "</td>"
                //slice()可以複製開始與結束點（結束點不算）中的內容
                trHTML += "<td>" + element.ar + "</td>"
                trHTML += "<td>" + element.tot + "</td>"                
                trHTML += "<td>" + element.sbi + "</td>"
                trHTML += "<td>" + element.bemp + "</td>"
                trHTML += "<td>" + element.updateTime + "</td>"
                trHTML += "<td>" + status + "</td>"
                trHTML += `<td><a href='#' data-sno=${element.sno}>更多</a></td>`
                trHTML += "</tr>"
            }

        });
        tbodyElement.innerHTML = trHTML
    }
})

//把讀取的資料整理並存入到html select裡
function reqListener() {
    youbikedata = JSON.parse(this.responseText);

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
        optionElement.setAttribute('value', area)
        sareaElement.appendChild(optionElement);
    }
}

function reqreadstate(){
    if(this.readyState== 4){
        if(this.status!=200){
            dialogElement.show()
        }
    }

    
}

//建立XMLHttpRequest 下載資料load後執行reqListener
const windowload = (event) => {
    console.log('page loaded')
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.addEventListener("readystatechange",reqreadstate);//當偵測到錯誤執行後面的程式
    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();
}

//網頁load後執行windowload
window.addEventListener('load', windowload)
// window.addEventListener("error",reqError);