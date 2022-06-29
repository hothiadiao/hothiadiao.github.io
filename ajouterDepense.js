window.addEventListener('load', () => {
	depenses = JSON.parse(localStorage.getItem('depenses')) || [];
	const ajouterDepense = document.querySelector('#ajouterDepense');

	ajouterDepense.addEventListener('submit', e => {
		e.preventDefault();

		const depense = {
		    titre1: e.target.elements.titre1.value,
			montant1: e.target.elements.montant1.value,
		}

		depenses.push(depense);

		localStorage.setItem('depenses', JSON.stringify(depenses));
		

		// Reset the form
	e.target.reset();
       
	Displaydepenses()
		
	})

	Displaydepenses()


})

function Displaydepenses () {
	const depenseList = document.querySelector('#listeDepense');
	depenseList.innerHTML = "";

	 depenses.forEach(depense => {
		const depenseItem = document.createElement('div');
		depenseItem.classList.add('depense-item');

		//const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const titre1 = document.createElement('div');
		const montant1 = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		titre1.classList.add('depense-content');
		montant1.classList.add('depense-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		titre1.innerHTML = `<input  type="text" value="${depense.titre1}" readonly>`;
		montant1.innerHTML = `<input  type="text" value="${depense.montant1}"  readonly>`;

		edit.innerHTML = 'Modifier';
		deleteButton.innerHTML = 'Supprimer';

		/*label.appendChild(input);
		label.appendChild(span);*/
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		/*budgetItem.appendChild(label);*/
		depenseItem.appendChild(titre1);
		depenseItem.appendChild(montant1);
		depenseItem.appendChild(actions);
		depenseList.appendChild(depenseItem);


		edit.addEventListener('click', (e) => {
			const inputTitre1 = titre1.querySelector('input');
			const inputMontant1 = montant1.querySelector('input');
			inputTitre1.removeAttribute('readonly');
			inputMontant1.removeAttribute('readonly');
			inputTitre1.focus();
			inputMontant1.focus();
			inputTitre1.addEventListener('blur', (e) => {
				inputTitre1.setAttribute('readonly', true);
				depense.titre1 = e.target.value;
				localStorage.setItem('depenses', JSON.stringify(depenses));
				Displaydepenses()
			})
			
			inputMontant1.addEventListener('blure', (e) => {
				inputMontant1.setAttribute('readonly', true);
				depense.montant1 = e.target.value;
				localStorage.setItem('depenses', JSON.stringify(depenses));
				Displaydpenses()
			})
		})

		deleteButton.addEventListener('click', (e) => {
			depenses = depenses.filter(t => t != depense);
			localStorage.setItem('depenses', JSON.stringify(depenses));
			Displaydepenses()
		})

	})
	


}
const btnDepense = document.getElementById("valider1");
btnDepense.addEventListener("click", depense); // Note qu'on passe la fonction add en paramètre, on ne l'appelle pas, i.e. on écrit "add" et pas "add()".
function depense(){
var montantDepense = parseInt(document.getElementById("montant1").value); // On récupère la valeur de l'élément html. Comme c'est une chaine de caractères on la transforme en entier.
var depense1 = parseInt(document.getElementById("dep").value);// On récupère la valeur du span "solde" qu'on transforme aussi en entier.	
var depe = depense1 + montantDepense;
document.getElementById("dep").value = depe;
//console.log(d)
	}
	