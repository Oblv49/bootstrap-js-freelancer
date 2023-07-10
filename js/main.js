/*
    Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
    Il prezzo orario per una commissione varia in questo modo:
    - se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
    - se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
    - se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
    L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
    - YHDNU32
    - JANJC63
    - PWKCN25
    - SJDPO96
    - POCIE24
    Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. 
    Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
    Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto
    il bottone send.
    Alcuni consigli
    - Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi
    - Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
    Bonus:
    Quando l’utente clicca sul pulsante “Send”, se il codice promozionale inserito non è valido, facciamo diventare quest’ultimo di colore rosso.
    Se il codice inserito è valido, dopo aver calcolato il prezzo scontato, eliminare quel codice dall’elenco dei codici sconto disponibili, in modo 
    che non sia più utilizzabile.

*/
//creation array whit discount code
let couponsArray = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let usedCoupons = [];

//listener on button for form
function submitForm(event) {

    event.preventDefault();

    //controll function listener event
    console.log("il form funziona");

    //variable cost
    let cost;

    //variable container for form
    let firstUserName = document.getElementById("inputFirstName").value;
    let lastUserName = document.getElementById("inputLastName").value;
    let emailUser = document.getElementById("inputEmail4").value;
    let hoursRequested = parseInt(document.getElementById("inputHoursRequest").value);
    let typeWorkRequest = document.getElementById("workRequest").value;
    let discountCode = document.getElementById("inputDiscountCode").value;
    let messageWork = document.getElementById("floatingTextarea2").value;

    //controll form data imput
    if (typeof firstUserName === 'string' && typeof lastUserName === 'string' && Number.isInteger(hoursRequested) && workRequest.selectedIndex != 0) {

        //make visible the preventive tag
        document.getElementById("preventiveContainer").classList.remove("d-none");

        //operation
        cost = calculateCost(typeWorkRequest, hoursRequested);
        document.getElementById("applicant").innerHTML = "Cara/o Sig.ra/Sig ";
        document.getElementById("greenNameApplicant").innerHTML = firstUserName + " " + lastUserName;
        document.getElementById("thanksYou").innerHTML = "Grazie per avermi contattato. Ecco il suo preventivo:";
        document.getElementById("yourEmail").innerHTML = "Your Email: " + emailUser;
        document.getElementById("yourHoursRequested").innerHTML = "Hours Requested for work: " + hoursRequested + "h " + "total";
        document.getElementById("typeOfWork").innerHTML = "Type Of Work Requested: " + typeWorkRequest;
        document.getElementById("typeRateContainer").innerHTML = typeWorkRequest;
        cost = applyDiscountCode(couponsArray, usedCoupons, discountCode, cost, inputDiscountCode);
        document.getElementById("discoutCode").innerHTML = "Your Discount Code: " + discountCode;
        document.getElementById("priceContainer").innerHTML = cost.toFixed(2) + "€";


    } else {

        //alert error
        alert("Inserisci tutti i dati in modo corretto!");

    }
}