let r = 15;
console.log('Apskritimo ilgis =', 2*3.14*r);
console.log('Apskritimo plotas =', 3.14*(r**2));


let money=100.50; let price=105.50;

if(money>price)
{console.log("Duodate per daug , štai jūsų graža");}//A

else if(money===price)
{console.log("Davėte tikslią sumą, geros dienos!");}//B

else
{console.log("Davėte ne pakankamai. Krapštyk taupyklę");}//C

let bėgikoVardas = "Jonas";
let pozicija = 6;
let medalis;

if (pozicija === 1) {
  medalis = "aukso";
} else if (pozicija === 2) {
  medalis = "sidabro";
} else if (pozicija === 3) {
  medalis = "bronzos";
} else if (pozicija < 3) {
  medalis = "užėmė ne prizinę vietą";
} else {
  medalis = "neprizinės vietos";
}

console.log(bėgikoVardas + " gavo " + medalis + " medalį.");

let d = true;
let e = d === true ? true : false;

console.log(e);

for (let i=0; i<=16; i+=4)
// kai i yra 0. iki kol i vis dar bus maziau arba lygu 16. kas kart prie i pridedant 4
{console.log(i)}

let aa = 2 + 2
let skaicius;

switch (aa) {
   case 3:
      skaicius = 'aa maziau uz 4';
      console.log(skaicius);
      break;
   case 5:
      skaicius = 'aa daugiau uz 4';
      console.log(skaicius);
      break;
   case 4:
      skaicius = 'aa yra lygus 4';
      console.log(skaicius);
      break;
   default:
      skaicius = 'nenustatyta reiksme';
      console.log(skaicius);
      break;}
let masyvas = ["namas",
"ratas","tvartas", "2+2"];
console.log(masyvas[0]);
console.log(masyvas[1]);
console.log(masyvas[2]);
console.log(masyvas[3]);
console.log('undefined elementas: ', masyvas[4]);
console.log('masyvo ilgis iki modifikacijos: ', masyvas.length)
masyvas[4] = "zero"
console.log( masyvas[4]);
console.log('masyvo ilgis po modifikacijos: ', masyvas.length)
console.log('isvedam masyvo elementus su paprastu for ciklu')
for(let i=0; i<masyvas.length; i++)
{let elementas = masyvas[i];
console.log(elementas);
}
console.log('isvedam masyvo elementus su  for...of ciklu')
for(let elementas of masyvas)
{console.log(elementas);}