// Déclarer constante qui contiendra l'export du module express
const express = require("express");
// Déclarer constante qui définit quelle route doit emprunter express
const router = express.Router();
// Déclarer constante qui définit le chemin vers le fichier où se trouve les fonctions / tableau
const pathToStarters = require("../controller/ctrl_entrees");


// Route que doit récupérer la méthode POST pour créer du contenu dans le fichier carte.json
router.post("/entrees", pathToStarters.createData);

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/entrees', pathToStarters.getData_entrees);

// Route que doit récuperer la méthode GET et récupérer la donnée via son nom
router.get("/entrees/search/:name", pathToStarters.getDataByName);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/entrees/:id", pathToStarters.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/entrees/:id", pathToStarters.updateData);

// Route que va recuperer la méthode DELETE pour écraser et supprimer la donnée
router.delete("/entrees/:id", pathToStarters.deleteData);


module.exports = router;