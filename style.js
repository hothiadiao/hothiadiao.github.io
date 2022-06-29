/*if (localStorage.getItem("Titre") != null)
t1.textContent = `${localStorage.getItem("Titre")}`;
if (localStorage.getItem("Montant") != null)
m1.textContent = `${localStorage.getItem("Montant")}`;
if(localStorage.getItem("Dépense") != null)
depense.textContent = `${localStorage.getItem("Dépense")}`;


valider1.onclick = () =>{
    localStorage.setItem("Titre",titre1.value);
    localStorage.setItem("Montant",montant1.value);
    localStorage.setItem("Dépense", montant1.value);

}


//Remplir un input depuis local


if (localStorage.getItem("Titre2") != null) 
t2.textContent = `${localStorage.getItem("Titre2")}`;
if (localStorage.getItem("Montant2") != null) 
m2.textContent = `${localStorage.getItem("Montant2")}`;
valider2.onclick = () =>{
    localStorage.setItem("Titre2",titre2.value);
    localStorage.setItem("Montant2",montant2.value);
}
*/

window.addEventListener('load', () => {
	budgets = JSON.parse(localStorage.getItem('budgets')) || [];
	const ajouterRevenu = document.querySelector('#ajouterRevenu');

	ajouterRevenu.addEventListener('submit', e => {
		e.preventDefault();

		const budget = {
		    titre2: e.target.elements.titre2.value,
			montant2: e.target.elements.montant2.value,
		}

		budgets.push(budget);

		localStorage.setItem('budgets', JSON.stringify(budgets));
		

		// Reset the form
	 e.target.reset();
       
		Displaybudgets()
		
		
	})

	Displaybudgets();

   
   

})

function Displaybudgets () {
	const budgetList = document.querySelector('#listeRevenu');
	budgetList.innerHTML = "";

	budgets.forEach(budget => {
		const budgetItem = document.createElement('div');
		budgetItem.classList.add('budget-item');

		//const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const titre2 = document.createElement('div');
		const montant2 = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		titre2.classList.add('budget-content');
		montant2.classList.add('budget-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		titre2.innerHTML = `<input  type="text" value="${budget.titre2}" readonly>`;
		montant2.innerHTML = `<input  type="text" value="${budget.montant2}"  readonly>`;

		edit.innerHTML = 'Modifier';
		deleteButton.innerHTML = 'Supprimer';

		/*label.appendChild(input);
		label.appendChild(span);*/
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		/*budgetItem.appendChild(label);*/
		budgetItem.appendChild(titre2);
		budgetItem.appendChild(montant2);
		budgetItem.appendChild(actions);
		budgetList.appendChild(budgetItem);


		edit.addEventListener('click', (e) => {
			const inputTitre2 = titre2.querySelector('input');
			const inputMontant2 = montant2.querySelector('input');
			inputTitre2.removeAttribute('readonly');
			inputMontant2.removeAttribute('readonly');
			inputTitre2.focus();
			inputMontant2.focus();
			inputTitre2.addEventListener('blur', (e) => {
				inputTitre2.setAttribute('readonly', true);
				budget.titre2 = e.target.value;
				localStorage.setItem('budgets', JSON.stringify(budgets));
				Displaybudgets()
			})
			
			inputMontant2.addEventListener('blure', (e) => {
				inputMontant2.setAttribute('readonly', true);
				budget.montant2 = e.target.value;
				localStorage.setItem('budgets', JSON.stringify(budgets));
				Displaybudgets()
			})
		})

		deleteButton.addEventListener('click', (e) => {
			budgets = budgets.filter(t => t != budget);
			localStorage.setItem('budgets', JSON.stringify(budgets));
			Displaybudgets()
		})

	})
	


}
const btnajout = document.getElementById("valider2");
btnajout.addEventListener("click", addition); // Note qu'on passe la fonction add en paramètre, on ne l'appelle pas, i.e. on écrit "add" et pas "add()".
function addition(){
var montantajout = parseInt(document.getElementById("montant2").value); // On récupère la valeur de l'élément html. Comme c'est une chaine de caractères on la transforme en entier.
var solde = parseInt(document.getElementById("bud").value);// On récupère la valeur du span "solde" qu'on transforme aussi en entier.	
var d = solde + montantajout;
document.getElementById("bud").value = d;
//console.log(d)
//depense();
//document.getElementById("sold").value = d-depe;

	}
	