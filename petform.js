// 1) seleziono tutti i valori degli elementi tramite il loro id
const petName = document.getElementById("petName").value;
const ownerName = document.getElementById("ownerName").value;
const species = document.getElementById("species").value;
const breed = document.getElementById("breed").value;
const button = document.getElementsByTagName("button").value;

// 2) creo array dapprima vuoto per il salvataggio dei dati

const pets = [];

// 3) Inizializzazione classe per creazione oggetto contenente dati del form

class Pets {
  constructor(_petName, _ownerName, _age, _location) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.age = _age;
    this.location = _location;
  }
  // 4)  metodo che ritorna true se this.ownerName é uguale a otherPet.ownerName

  SameOwnerName(OtherPet) {
    if (this.ownerName === OtherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}
//  5) creazione card
const petCard = function () {
  const row = document.getElementById("pet-card"); // riferimento alla row
  row.innerHTML = ""; // svuoto lista prima di creare cols
};
// 6) per ogni elemento pet dell'array, creo una col, una card e appendo

pets.forEach((pet) => {
  const newCol = document.createElement("div"); // creazione della col dentor un div
  newCol.classList.add("col"); // do la classe col al div

  newCol.innerHTML = `<div class="card"> 
      <div class="card-body">
        <h5 class="card-title">Pet Name</h5>
        <p class="card-text" id="pet-name">${pet.petName}</p>
        <h5 class="card-title">Owner Name</h5>
        <p class="card-text" id="owner-name">${pet.ownerName}</p>
        <h5 class="card-title">Species</h5>
        <p class="card-text" id="pet-species">${pet.species}</p>
        <h5 class="card-title">Breed</h5>
        <p class="card-text" id="pet-breed">${pet.breed}</p>
      </div>
    </div>`;
  row.appendChild(newCol); // appendo la col alla row
});

//7) svuoto il form dopo aver raccolto i dati e averli inseriti nelle cards
petNameInput.value = "";
ownerNameInput.value = "";
speciesInput.value = "";
breedInput.value = "";

// 9) assegno evento al click del bottone nel form, bloccando il refresh della pagina

const emptyForm = document.getElementsByTagName("form")[0];
emptyForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

//10) Verifico se esiste già un animale con lo stesso padrone
const SameOwnerName = petData.some((pet) => newPet.SameOwnerName(pet));

if (!SameOwnerName) {
  pets.push(newPet);
  petCard();
} else {
  alert("Il nome di questo padrone é già presente!");
}

pets.push(newPet);
petCard();
