document.addEventListener('DOMContentLoaded', function() {

    const mygtukas = document.querySelector('#mygtukas');
    const output = document.querySelector('#output');
    
    mygtukas.addEventListener('click', function() {
    gautiDuomenisIsServerio();
    });
    
    function gautiDuomenisIsServerio() {
    fetch('galerija_fetch')
    .then(response => response.json())
    .then(data => {
    for (let galleryElementData of data) {
    output.innerHTML += galleryElementData.title ;

    const imgElementas = document.createElement('img');
    imgElementas.src = galleryElementData.img_url;
    imgElementas.alt = galleryElementData.title;
    imgElementas.classList.add('galerija_fetch');

    const divElementas = document.createElement('div');
    divElementas.appendChild(imgElementas);

    output.appendChild(divElementas);
    }
    });
    }
    
    });
