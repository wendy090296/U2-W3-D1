// creo la classe PET

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  SameOwnerName(OtherPet) {
    // metodo che ritorna true se this.ownerName é uguale a otherPet.ownerName
    if (this.ownerName === OtherPet.ownerName) {
      return true;
    }
  }
}
// seleziono tutti i valori degli elementi tramite il loro id
const addPet = () => {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  // creo l'oggetto newPet
  const newPet = new Pet("petName", "ownerName", "species", "breed");
  displayPet(newPet);

  // svuoto il form dopo aver raccolto i dati e averli inseriti nella lista
  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";

  // raccolgo i dati al momento dell'invio bloccando il refresh della pagina
  const emptyForm = document.getElementsByTagName("form")[0];
  emptyForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  const displayPet = (pet) => {
    const petList = document.getElementById("petList");
    const listItem = document.createElement("li");
    listItem.textContent = `Pet: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petList.appendChild(listItem);
  };
};
