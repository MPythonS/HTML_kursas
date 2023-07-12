document.addEventListener("DOMContentLoaded", function(){

// Pasirinkti visus img elementus su klase "galerijos_foto"
const imgElementai = document.querySelectorAll("img");

// Suskaičiuoti img elementų skaičių
const imgElementuSkaicius = imgElementai.length;

// Atspausdinti rezultatą
console.log("Paveiksleliu skaicius:", imgElementuSkaicius);

// apsirašome kaip atrodys naujas id 
let uuid = ("Siame puslapyje yra " +  imgElementuSkaicius + " " +' img elementu');

// pasiimam reikiamą id iš html
let new_uuid = document.getElementById("uuid");

// id iš html suteikiame naują reikšmę
new_uuid.innerHTML = uuid;

function mygtukas () {
alert(imgElementuSkaicius)
};
//su querySelector
document.querySelector("button").addEventListener("click", mygtukas);


// Iteruoti per img elementus su žingsniu i+=2
for (let i = 1; i < imgElementai.length; i += 2) {
    imgElementai[i].alt = "Testas"; 
    // Pakeičiame kas antro elemento alt atributo reikšmę į "Testas"
  }


const elementas = document.getElementById('uuid');

// 5] Elementui su "uuid" id reikšme, pakeisti css į 

// elementas.style.fontSize = '24px';
// elementas.style.backgroundColor = 'green';
// elementas.style.width = '200px';
// elementas.style.height = '200px';

// ARBA
elementas.style = 'font-size: 24px; background-color: green;  width: 200px; height:200px;'

});