// Déclarer constante qui contiendra l'export du module express
const express = require("express");
// Déclarer constante qui définit quelle route doit emprunter express
const router = express.Router();
// Déclarer constante qui définit le chemin vers le fichier où se trouve les fonctions / tableau
const pathToWines = require("../controller/ctrl_vins");


// Route methode post
router.post("/vins", pathToWines.createData);

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/vins', pathToWines.getData_vins);

// Route que doit récuperer la méthode GET et récupérer la donnée via son nom
router.get("/vins/search/:name", pathToWines.getDataByName);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/vins/:id", pathToWines.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/vins/:id", pathToWines.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/vins/:id", pathToWines.deleteData);


module.exports = router;