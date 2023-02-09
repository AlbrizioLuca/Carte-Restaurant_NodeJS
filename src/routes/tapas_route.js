const express = require("express");
const router = express.Router();
const pathToTapas = require("../controller/tapas_controller")


// Route methode post
router.post("/tapas", pathToTapas.createData)

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/tapas', pathToTapas.getData_tapas);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/tapas/:id", pathToTapas.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/tapas/:id", pathToTapas.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/tapas/:id", pathToTapas.deleteData);



module.exports = router;
