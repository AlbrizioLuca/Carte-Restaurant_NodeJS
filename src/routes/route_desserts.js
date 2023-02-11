// Déclarer constante qui contiendra l'export du module express
const express = require("express");
// Déclarer constante qui définit quelle route doit emprunter express
const router = express.Router();
// Déclarer constante qui définit le chemin vers le fichier où se trouve les fonctions / tableau
const pathToDesserts = require("../controller/ctrl_desserts");

// Route methode post
router.post("/desserts", pathToDesserts.createData);

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/desserts', pathToDesserts.getData_desserts);

// Route que doit récuperer la méthode GET et récupérer la donnée via son nom
router.get("/desserts/search/:name", pathToDesserts.getDataByName);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/desserts/:id", pathToDesserts.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/desserts/:id", pathToDesserts.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/desserts/:id", pathToDesserts.deleteData);



module.exports = router;