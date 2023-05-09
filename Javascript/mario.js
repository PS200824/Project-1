function afdrukken() {
    window.print();
}
function Inloggen(){
    var geb = document.getElementById("gebruikersnaam").value;
    var pas = document.getElementById("wachtwoord").value;

    if (geb == "mario" && pas == "bressanone"){
        window.location.href="personeelspagina.html";
    }
    else
    {
        alert("Verkeerde gebruikersnaam of wachtwoord")
    }
}
function BerekenPrijs(){
    var totaal = 0;
    for(var counter = 1; counter <=8; counter++){
        var inge = document.getElementById("ing_"+counter).value;
        //var getal1 = parseInt(document.getElementById("ing_"+counter));
        var getal1 = parseFloat(document.getElementById("prk_"+counter).value);
        var getal2 = parseFloat(document.getElementById("nd_"+counter).value);

        if(!isNaN(getal1) && !isNaN(getal2)){
            var result25 = getal1 / 1000 * getal2;
            var result35 = getal1 / 1000 * getal2 * 1.96;
            
            totaal += result25;

            document.getElementById("p2_" + counter).value = result25.toFixed(2);
            document.getElementById("p3_" + counter).value = result35.toFixed(2);
            document.getElementById("total25").value = totaal.toFixed(2);
            document.getElementById("total35").value = totaal * 1.96.toFixed(2);
        }
        if(!isNaN(getal1) && !isNaN(getal2) && (inge) == ""){
            alert ("Voer een ingredient in")
            break;

        }

    }





}

function Remove(){
    if (confirm("Are you sure, You want to Refresh?"))
    {
        location.reload();
    }
}