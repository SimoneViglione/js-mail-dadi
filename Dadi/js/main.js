alert("Il sistema tirerà un dado per te ed uno per sé stesso, chi ottiene il risultato più alto vince, quando ti senti pronto premi OK");

const win = document.getElementById("win");
const lose = document.getElementById("lose");

const dadoSistema = Math.floor(Math.random() * 6) + 1;
console.log("Risultato del sistema: " + dadoSistema);
document.getElementById("dadosis").innerHTML = dadoSistema;

const dadoUser = Math.floor(Math.random() * 6) + 1;
console.log("Risultato del tuo dado: " + dadoUser);
document.getElementById("dadous").innerHTML = dadoUser;

if (dadoUser > dadoSistema) {
    alert("Congratulazioni hai vinto!");
    win.classList.remove("d-none");
} 
else if (dadoUser < dadoSistema) {
    alert("Il sistema ha vinto, ritenta sarai più fortunato!");
    lose.classList.remove("d-none");
} 
else if (dadoUser == dadoSistema) {
    alert("Pareggio!");
}
else {
    alert("Ops, qualcosa è andato storto...")
}
