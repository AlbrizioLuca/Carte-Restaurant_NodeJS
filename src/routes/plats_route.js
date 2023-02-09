const express = require("express");
const router = express.Router();
const pathToPlats = require("../controller/plats_controller");


// Route methode post
router.post("/plats", pathToPlats.createData)

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/plats', pathToPlats.getData_plats);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/plats/:id", pathToPlats.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/plats/:id", pathToPlats.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/plats/:id", pathToPlats.deleteData);


module.exports = router;