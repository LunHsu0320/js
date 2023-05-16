function reqListener() {
    let youbikedata = JSON.parse(this.responseText);
    for(const youbike of youbikedata){
    console.log(youbike.sna);
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
window.addEventListener('load',windowload)