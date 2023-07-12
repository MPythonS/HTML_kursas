//Math.floor - apvalinimas iki sveikos dalies 3.6 = 3
//Math.ceil - grazinama sveika dalis jei teifiamas iki 
//sekancio sveiko 3.6 = 4, -2 = -1
//Math.round - 
//Math.random - grazina skaiciu tarp 0 ir 1
Math.random()
console.log(Math.random())
//Math.max - grazina didziausia ir maziausia
let skaiciu_sarasas = [1, 3, 5];
console.log('Didziausias skaicius : ', Math.max(...skaiciu_sarasas))


let atsitik = Math.random() * 10;
console.log(atsitik);
let skai = Math.floor(atsitik);
console.log(skai);
let skai_iki_10 = skai + 1
console.log('ilgas budas: generuotas atsitiktinis skaicius nuo 1 iki 10: '
, skai_iki_10);

let randomSkaicius = Math.floor(Math.random() * 10) + 1;
console.log('trumpas budas: generuotas atsitiktinis skaicius nuo 1 iki 10: ',
 randomSkaicius);

 let randomSkaicius2 = Math.ceil(Math.random() * 10) + 1;
console.log('trumpas budas: generuotas atsitiktinis skaicius nuo 1 iki 10: ',
 randomSkaicius);

 let randomSkaicius3 = Math.round(Math.random() * 10) + 1;
 console.log('trumpas budas: generuotas atsitiktinis skaicius nuo 1 iki 10: ',
  randomSkaicius);

  let randomSkaicius4 = Math.trunc(Math.random() * 10) + 1;
 console.log('trumpas budas: generuotas atsitiktinis skaicius nuo 1 iki 10: ',
  randomSkaicius);

let i = 0;
while (i <=16){
    console.log(i);
    i += 4;
}

for(let i= 0 ; i<= 16; i+= 4) {
    console.log (i);
}
 