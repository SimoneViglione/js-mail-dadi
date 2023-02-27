const emailArray = [ "tonycannavacciuolo@gmail.com", "brunobarbie@hotmail.com", "quellaltrononmiricordoilnome@libero.it" ];

/*const userEmail = prompt("Inserisci la tua email");

let emailVerificata = false;

for (let i = 0; i < emailArray.length; i++) {
    if (userEmail === emailArray[i]) {
        emailVerificata = true;
    }
}

if  (emailVerificata) {
    alert("Benvenuto " + userEmail + "!");
} else {
    alert("Ci dispiace, Non hai i permessi per accedere a questa pagina :( ");
}
*/



//Bonus 

const verify = document.querySelector('#verify');

verify.addEventListener('click', verify_email); 
    function verify_email() {
        const userEmail = document.querySelector('#email').value;

        let emailVerificata = false;

        for (let i = 0; i < emailArray.length; i++) {
            if (userEmail === emailArray[i]) {
                emailVerificata = true;
            }
        }

        if  (emailVerificata) {
            alert("Benvenuto " + userEmail + "!");
        } else {
            alert("Ci dispiace, Non hai i permessi per accedere a questa pagina :( ");
        }
}










