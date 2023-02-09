const express = require("express");
const router = express.Router();
const pathToDessert = require("../controller/desserts_controller")

// Route methode post
router.post("/desserts", pathToDessert.createData)

// Route que doit récupérer la méthode GET vers le fichier carte.json
router.get('/desserts', pathToDessert.getData_desserts);

// Route que doit récuperer la méthode GET et récupérer la donnée via son id
router.get("/desserts/:id", pathToDessert.getDataById);

// Route que va récupérer la méthode PUT et mettre à jour le fichier
router.put("/desserts/:id", pathToDessert.updateData);

// Route que va recuperer la méthode DELETE pour écraaser et supprimer la donnée
router.delete("/desserts/:id", pathToDessert.deleteData);



module.exports = router;
