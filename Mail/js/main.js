const userEmail = prompt("Inserisci la tua email");

const emailArray = [ "tonycannavacciuolo@gmail.com", "brunobarbie@hotmail.com", "quellaltrononmiricordoilnome@libero.it" ];

for (let i = 0; i < emailArray.length; i++) {
    if (userEmail === emailArray[i]) {
        alert("Benvenuto " + userEmail + "!");
    }
    else {
        alert("Ci dispiace, Non hai i permessi per accedere a questa pagina :( ");
    }
}













