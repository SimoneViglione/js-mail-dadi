alert("Il sistema tirerà un dado per te ed uno per sé stesso, chi ottiene il risultato più alto vince, quando ti senti pronto premi OK");

const dadoSistema = Math.floor(Math.random() * 6) + 1;
console.log("Risultato del sistema: " + dadoSistema);

const dadoUser = Math.floor(Math.random() * 6) + 1;
console.log("Risultato del tuo dado: " + dadoUser);

if (dadoUser > dadoSistema) {
    alert("Congratulazioni hai vinto!");
} 
else if (dadoUser < dadoSistema) {
    alert("Il sistema ha vinto, ritenta sarai più fortunato!");
} 
else if (dadoUser == dadoSistema) {
    alert("Pareggio!");
}
else {
    alert("Ops, qualcosa è andato storto...")
}
