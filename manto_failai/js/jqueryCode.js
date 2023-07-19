$(() => {
    console.log('Failas uzkrautas');
    $("button.continue").click(function() {
        console.log('paspaudimas yra');
        $(this).html('Next Step...');
    });

    let laukelioNr = 1;
    // su eilutesNr prisidedam kiekvieno pridedamo laukelio pavadinime numeri
    $("button.add").click(function () {
        console.log('paspaudimas aktyvus')
        let naujasInputas = $("<input>")
            .attr("type", "text")
            .attr("name", "elementas" + laukelioNr++)
            .attr("placeholder", "Kliento vardas ?");
            console.log("sukurtas");
        $("#testas").append(naujasInputas)
    });
});