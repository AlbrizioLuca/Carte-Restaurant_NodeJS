const express = require("express");
const router = express.Router();
const pathToEntrees = require("../controller/entrees_controller");


// Route que doit récupérer la méthode POST pour créer du contenu dans le fichier carte.json
router.post("/entrees", pathToEntrees.createData);

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/entrees', pathToEntrees.getData_entrees);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/entrees/:id", pathToEntrees.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/entrees/:id", pathToEntrees.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/entrees/:id", pathToEntrees.deleteData);


module.exports = router;