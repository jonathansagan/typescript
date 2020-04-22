/*• Créer une classe Sejour avec les propriétés privées suivantes :
◦ nom (string)
◦ prix (number)
• Ajouter des getters permettant d’accéder aux propriétés privées.
• Créer une classe SejourService qui possède une propriété privée de type Sejour[];
• Dans le constructeur de la classe SejourService, initialiser la propriété Sejour[] avec plusieurs
objets de type Sejour.
• Dans la classe SejourService, ajouter une méthode de recherche de séjour par nom :
◦ le service prend en paramètre un nom de type string
◦ le service a un type retour Sejour.
• Créer une instance de la classe SejourService, invoquer la méthode de recherche créée et
afficher le résultat dans la console*/

class Sejour {
  constructor(private _nom: string, private _prix: number) {}
  toString(): string {
    return `${this._nom} - ${this._prix}€`;
  }
  public getNom(): string {
    return "nom $(this._nom)";
  }
  public getPrix(): number {
    return this._prix;
  }
}

class SejourService {
  private _Sejour: Sejour[]
  constructor() {
    this._Sejour = [
      new Sejour("Brest", 10),
      new Sejour("Collioure", 200),
      new Sejour("Moorea", 2000),
    ];
  }
  // méthode findByName()
  findByName(sejourName: string): Sejour | void {
    for (const sejour of this._Sejour) {
      if (sejour.getNom() == sejourName) {
        console.log("Voici le séjour ");
        return sejour;
      } else {
        console.log("Aucun séjour correspondant, try again ...");
      }
    }
  }
}

var sejourService = new SejourService();
console.log(sejourService.findByName("Moorea"));
