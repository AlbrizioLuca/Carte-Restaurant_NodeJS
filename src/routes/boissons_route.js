const express = require("express");
const router = express.Router();
const pathToBoissons = require("../controller/boissons_controller")


// Route methode post
router.post("/boissons", pathToBoissons.createData)

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/boissons', pathToBoissons.getData_boissons);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/boissons/:id", pathToBoissons.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/boissons/:id", pathToBoissons.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/boissons/:id", pathToBoissons.deleteData);


module.exports = router;