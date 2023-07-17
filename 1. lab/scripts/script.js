createDiv = ( img, name, redni, brojUkosari) => {      
    return `
    <div class="grid-item" id="item-${redni}">
      <div class="imageBox">
        <div class="imageInn">
          <img src="images/${img}" alt="${name}">
        </div>
        <div class="hoverImg">
        <button id="slika-carta" onclick="dodajKosarici('${name}')"><img src="images/cart-icon.svg" alt="Cart icon"></button>
        <p id="${name}" class="cart-number">${brojUkosari}</p>
        </div>
      </div>
      <h6>${name}</h6>
    </div>
    `;
  }

function postaviProizvode(kategorija){
    const proizvodi = document.getElementById("proizvodi");
    proizvodi.innerHTML = "";
    const kategorijaNaslov = document.getElementById("trenutna");
    let redni= 1;
    switch(kategorija){
        case 1:
            kategorijaNaslov.innerHTML = "Piletina";
            const piletinaCategory = data.categories.find(category => category.name === "Piletina");
            const piletinaProducts = piletinaCategory.products;
            for (const item of piletinaProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 2:
            kategorijaNaslov.innerHTML = "Puretina";
            const puretinaCategory = data.categories.find(category => category.name === "Puretina");
            const puretinaProducts = puretinaCategory.products;
            for (const item of puretinaProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 3:
            kategorijaNaslov.innerHTML = "Svinjetina";
            const svinjetinaCategory = data.categories.find(category => category.name === "Svinjetina");
            const svinjetinaProducts = svinjetinaCategory.products;
            for (const item of svinjetinaProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 4:
            kategorijaNaslov.innerHTML = "Junetina";
            const junetinaCategory = data.categories.find(category => category.name === "Junetina");
            const junetinaProducts = junetinaCategory.products;
            for (const item of junetinaProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = this.createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 5:
            kategorijaNaslov.innerHTML = "Oslić";
            const oslicCategory = data.categories.find(category => category.name === "Oslić");
            const oslicProducts = oslicCategory.products;
            for (const item of oslicProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = this.createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 6:
            kategorijaNaslov.innerHTML = "Lignja";
            const lignjaCategory = data.categories.find(category => category.name === "Lignja");
            const lignjaProducts = lignjaCategory.products;
            for (const item of lignjaProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = this.createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 7:
            kategorijaNaslov.innerHTML = "Riblji štapići";
            const ribljistapiciCategory = data.categories.find(category => category.name === "Riblji štapići");
            const ribljistapiciProducts = ribljistapiciCategory.products;
            for (const item of ribljistapiciProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = this.createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 8:
            kategorijaNaslov.innerHTML = "Roštilj";
            const rostiljCategory = data.categories.find(category => category.name === "Roštilj");
            const rostiljProducts = rostiljCategory.products;
            for (const item of rostiljProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = this.createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 9:
            kategorijaNaslov.innerHTML = "Sirevi";
            const sireviCategory = data.categories.find(category => category.name === "Sirevi");
            const sireviProducts = sireviCategory.products;
            for (const item of sireviProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = this.createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;
        case 10:
            kategorijaNaslov.innerHTML = "Povrće";
            const povrceCategory = data.categories.find(category => category.name === "Povrće");
            const povrceProducts = povrceCategory.products;
            for (const item of povrceProducts){
                let brojKosari = localStorage.getItem(item.name) ? localStorage.getItem(item.name) : 0;
                const div = document.createElement("div");
                div.innerHTML = this.createDiv(item.image, item.name, redni, brojKosari)
                proizvodi.appendChild(div);
                redni += 1;
            }
            break;  
    }

}
function promijeniKategoriju(kategorija){
    trenutnaKategorija = kategorija;
    postaviProizvode(kategorija);
}

function dolazakNaStranicu(){
    let prosla = localStorage.getItem("kategorija");
    promijeniKategoriju(prosla);
}
function azurirajBrojKosarice(){
    if (!localStorage.getItem("Kosarica")) {
        console.log("dodavanje kosarice");
        localStorage.setItem("Kosarica", 1);
        const kosarica = document.getElementById("cart-items");
        kosarica.innerHTML = "1";
    } else {
        let broj = parseInt(localStorage.getItem("Kosarica"));
        broj += 1;
        localStorage.setItem("Kosarica", broj);
        const kosarica = document.getElementById("cart-items");
        kosarica.innerHTML = broj;

    }


}
function dodajKosarici(proizvod){
    console.log("dodaje u kosaricu");
      if (!localStorage.getItem(proizvod)) {
        console.log("dodaje varijablu kosarici");
        localStorage.setItem(proizvod, 1);
        azurirajBrojKosarice();
        const brojKupljenih = document.getElementById(proizvod);
      brojKupljenih.innerHTML = "1";
      } else {
        let broj = parseInt(localStorage.getItem(proizvod));
        broj = broj + 1;
        localStorage.setItem(proizvod, broj);
        azurirajBrojKosarice();
        const brojKupljenih = document.getElementById(proizvod);
        brojKupljenih.innerHTML = broj;
      }

}

let refresh = async function (){
    if(localStorage.getItem("Kosarica")){
        let broj = parseInt(localStorage.getItem("Kosarica"));
        const kosarica = document.getElementById("cart-items");
        kosarica.innerHTML = broj;
    }

}


promijeniKategoriju(1);
refresh();



