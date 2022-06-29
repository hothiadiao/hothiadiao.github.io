//fonction qui calcule le solde aprés revenu
const soldeajout = document.getElementById("valider2");
soldeajout.addEventListener("click", solder); // Note qu'on passe la fonction add en paramètre, on ne l'appelle pas, i.e. on écrit "add" et pas "add()".
function solder(){
var montantantRevenu = parseInt(document.getElementById("bud").value); // On récupère la valeur de l'élément html. Comme c'est une chaine de caractères on la transforme en entier.
var  montantDepense= parseInt(document.getElementById("dep").value);// On récupère la valeur du span "solde" qu'on transforme aussi en entier.	
var s = montantantRevenu - montantDepense;
document.getElementById("sold").value = s;
//console.log(d)
//depense();
//document.getElementById("sold").value = d-depe;

	}
	
    //fonction qui calcule le solde aprés dépense

const soldeDepense = document.getElementById("valider1");
soldeDepense.addEventListener("click", solderDepense); // Note qu'on passe la fonction add en paramètre, on ne l'appelle pas, i.e. on écrit "add" et pas "add()".
function solderDepense(){
var montantantRevenu1 = parseInt(document.getElementById("bud").value); // On récupère la valeur de l'élément html. Comme c'est une chaine de caractères on la transforme en entier.
var  montantDepense1= parseInt(document.getElementById("dep").value);// On récupère la valeur du span "solde" qu'on transforme aussi en entier.	
var sd = montantantRevenu1 - montantDepense1;
document.getElementById("sold").value = sd;
//console.log(d)
//depense();
//document.getElementById("sold").value = d-depe;

	}