"use strict";
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
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.toString = function () {
        return this._nom + " - " + this._prix + "\u20AC";
    };
    Sejour.prototype.getNom = function () {
        return "nom $(this._nom)";
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._Sejour = [
            new Sejour("Brest", 10),
            new Sejour("Collioure", 200),
            new Sejour("Moorea", 2000),
        ];
    }
    // méthode findByName()
    SejourService.prototype.findByName = function (sejourName) {
        for (var _i = 0, _a = this._Sejour; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.getNom() === sejourName) {
                console.log("Voici le séjour ");
                return sejour;
            }
            else {
                console.log("Aucun séjour correspondant, try again ...");
            }
        }
    };
    return SejourService;
}());
var test = new SejourService();
test.findByName("Marseille");
