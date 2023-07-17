function dobaviKosaru() {
    var values = [],
    keys = Object.keys(localStorage);
    let map = new Map();
    for(const key of keys){
        let value = localStorage.getItem(key);
        if(key != 'Kosarica' && key != 'debug'){
            map.set(key, value);
        }

    }
    return map;
}

napraviDiv = ( proizvod, broj) => {      
    return `
    <div class="cart-item">
        <div class="cart-item-title">${proizvod}</div>
        <input type="number" class="cart-item-quantity" id = "${proizvod}" value="${broj}"></input>
    </div>
    `;
  }


let osvjezi = async function (){
    console.log("Da")
    let map = dobaviKosaru();
    console.log(map);
    const proizvodi = document.getElementById("wrapper");
    console.log(map.keys());
    for(const key of map.keys()){
        const div = document.createElement("div");
        div.innerHTML = napraviDiv(key, map.get(key));
        proizvodi.appendChild(div);
    }
    let broj = parseInt(localStorage.getItem("Kosarica"));
    const kosarica = document.getElementById("cart-items");
    kosarica.innerHTML = broj;
}

osvjezi();