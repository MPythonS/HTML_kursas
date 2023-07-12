

const manoForma = document.querySelector('form');
manoForma.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log('Forma pateikta');

    console.debug(event);
    // vietoje log galime naudoti debug
    
});
