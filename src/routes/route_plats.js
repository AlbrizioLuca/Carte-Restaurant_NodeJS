// Déclarer constante qui contiendra l'export du module express
const express = require("express");
// Déclarer constante qui définit quelle route doit emprunter express
const router = express.Router();
// Déclarer constante qui définit le chemin vers le fichier où se trouve les fonctions / tableau
const pathToMainCourse = require("../controller/ctrl_plats");


// Route methode post
router.post("/plats", pathToMainCourse.createData);

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/plats', pathToMainCourse.getData_plats);

// Route que doit récuperer la méthode GET et récupérer la donnée via son nom
router.get("/plats/search/:name", pathToMainCourse.getDataByName);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/plats/:id", pathToMainCourse.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/plats/:id", pathToMainCourse.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/plats/:id", pathToMainCourse.deleteData);


module.exports = router;