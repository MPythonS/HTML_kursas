//sumos skaiciavimas
function suma(a, b) {
  let suma = a + b;
  console.log('Suma apskaičiuota su funkcija yra:', suma);
}
suma(2, 3);


//1. studento objektas
let studentas = {
    istaiga: 'KTU',
    kursas: '4',
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    pazymiai: [10, 8, 7, 6, 5],
};
//2. studento objektu masyvas
let studentai = [{
    istaiga: 'KTU',
    kursas: '4',
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    pazymiai: [9, 8, 7, 6, 5],
},
{
    istaiga: 'KTU',
    kursas: '3',
    vardas: 'Petras',
    pavarde: 'Pirmokas',
    pazymiai: [5, 6, 7, 8, 9],
},
{
    istaiga: 'VDU',
    kursas: '3',
    vardas: 'Ona',
    pavarde: 'Penktoke',
    pazymiai: [8, 9, 10, 8, 9],
},
{
    istaiga: 'VGTU',
    kursas: '3',
    vardas: 'Danutė',
    pavarde: 'Brakšt',
    pazymiai: [9, 9, 9, 9, 9],
},
{
    istaiga: 'CA',
    kursas: '1',
    vardas: 'Antanas',
    pavarde: 'Kaimietis',
    pazymiai: [7, 8, 7, 8, 7],
},
];
//3. penkto objekto duomenys su bracket notation.
console.log('Įstaiga: '+ studentai[4]['istaiga'],
            ', Kursas: '+ studentai[4]['kursas'],
            ', Vardas: '+ studentai[4]['vardas'],
            ', Pavardė: '+ studentai[4]['pavarde'],
            ', Pažymiai: '+ studentai[4]['pazymiai']);

//4. penkto objekto duomenys su dot notation.
console.log('Įstaiga: '+ studentai[4].istaiga,
            ', Kursas: '+ studentai[4].kursas,
            ', Vardas: '+ studentai[4].vardas,
            ', Pavardė: '+ studentai[4].pavarde,
            ', Pažymiai: '+ studentai[4].pazymiai );

//5. isvesti studento objekto pazymius su ciklu:
for ( studentas_pazymiai of studentas.pazymiai) {
console.log(studentas_pazymiai);
};

//6. padidinti tris pazymius per vienetą
//ir neleisti kad pazymys būtų daugiau nei 10
for (let i = 0; i < 3; i++) {
if (studentas.pazymiai[i] < 10) {
studentas.pazymiai[i]++;
}}
console.log(studentas.pazymiai);

//7. suskaiciuoti kas antro pažymio sumą pradedant nuo pirmojo
let suma_pzm = 0;
for (let i = 0; i < studentas.pazymiai.length; i += 2) {
suma_pzm += studentas.pazymiai[i];
}
console.log(suma_pzm);

//8. suskaičiuoti ir išvesti 2 ir 4 pažymių sandaugą
let sandauga = studentas.pazymiai[1] * studentas.pazymiai[3];

console.log(sandauga);
//9. patikrinti ar kursas yra numeriai tipo
if (typeof studentas.kursas === 'number') {
console.log('Kursas yra numerio tipo.');
} else {
console.log('Kursas nėra numerio tipo.');
};

//10. patikrinti ar studentas mokosi 4 kurse.

if (studentas.kursas === 4) {
console.log('Studentas mokosi 4 kurse.');

} else {
console.log('Studentas ne mokosi 4 kurse.');
};
//Patikrinti ar ši reikšmė yra numeral
if (typeof studentas.kursas === 'number') {
console.log('Kursas yra numerio tipo.');
} else {
console.log('Kursas nėra numerio tipo.');
};