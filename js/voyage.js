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
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
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
    //Ne pas mettre de console.log() dans la méthode
    SejourService.prototype.findByName = function (sejourName) {
        for (var _i = 0, _a = this._Sejour; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.nom === sejourName) {
                return sejour;
            }
        }
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findByName("Moorea"));
console.log(sejourService.findByName("TestNegatif"));
