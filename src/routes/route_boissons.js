// Déclarer constante qui contiendra l'export du module express
const express = require("express");
// Déclarer constante qui définit quelle route doit emprunter express
const router = express.Router();
// Déclarer constante qui définit le chemin vers le fichier où se trouve les fonctions / tableau
const pathToDrinks = require("../controller/ctrl_boissons");


// Route methode post
router.post("/boissons", pathToDrinks.createData);

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/boissons', pathToDrinks.getData_boissons);

// Route que doit récuperer la méthode GET et récupérer la donnée via son nom
router.get("/boissons/search/:name", pathToDrinks.getDataByName);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/boissons/:id", pathToDrinks.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/boissons/:id", pathToDrinks.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/boissons/:id", pathToDrinks.deleteData);


module.exports = router;