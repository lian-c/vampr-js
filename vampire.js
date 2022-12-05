class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberToOriginal = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberToOriginal++;
    }
    return numberToOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let currentVampire = this; //this is first vampire being compared
    let secondVampire = vampire;

    if (currentVampire.creator === null) { //root
      return currentVampire;
    }
    if (secondVampire.creator === null) {
      return secondVampire;
    }

    if (currentVampire === secondVampire) { //same vampire
      return vampire;
    }
    if (currentVampire.name === secondVampire.creator.name) {
      return currentVampire;
    }
    if (secondVampire.name === currentVampire.creator.name) {
      return secondVampire;
    }
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
    }
    while (secondVampire.creator) {
      secondVampire = secondVampire.creator;
    }
    return currentVampire;
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    for (const childNode of this.offspring) {
      const loop = childNode.vampireWithName(name);
      // console.log(loop)
      if (loop !== null){
        return loop;
      }
    }
      return null;
  }


  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }


}





module.exports = Vampire;

