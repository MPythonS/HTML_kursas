document.addEventListener("DOMContentLoaded", function(){


//1. variantas
function kadaryti () {
        alert("Alert funkcija ekrane")
}
document.body.addEventListener("click", kadaryti);
//2. variantas(mokymosi tikslais naudoti 1 varianta)
//document.body.addEventListener("click", () => alert("Alert funkcija ekrane"));
 elementas.onclick = kadaryti;
 elementas2.onclick = () => alert("Viskas super neaišku!");
 elementas3.onclick = function() {alert ("Na kad veikia tai 100 %")}

});