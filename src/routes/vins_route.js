const express = require("express");
const router = express.Router();
const pathToVins = require("../controller/vins_controller")


// Route methode post
router.post("/vins", pathToVins.createData)

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/vins', pathToVins.getData_vins);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/vins/:id", pathToVins.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/vins/:id", pathToVins.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/vins/:id", pathToVins.deleteData);


module.exports = router;