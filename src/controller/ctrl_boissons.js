// Déclarer constante qui contiendra l'export du module fs
const fs = require("fs");

// Définir la fonction qui utilisera la méthode GET pour récupérer les éléments du tableau boisson
exports.getData_boissons = (request,response) =>{
    // Utiliser méthode readfile du module fs pour lire le fichier
    fs.readFile("./src/model/carte.json", (err,data) =>{
        // Condition si erreur
        if (err){
            // Renvoi l'erreur status 500 et le message 
            response.status(500).json({
                message: "Erreur: Erreur de lecture !",
                error: err
            });
            // Sinon renvoi status 200, et les données en format json
            } else {
            response.status(200).json(JSON.parse(data).boissons)
        }
    })
}

// Définir la fonction qui utilisera la méthode GET pour récupérer les éléments via leur nom
exports.getDataByName = (request, response) => {
    // Lecture du fichier carte.json
    fs.readFile("./src/model/carte.json" , (err, data) => {
        // Condition si erreur 500
        if (err) {
            // Renvoi l'erreur 500 avec un message
            response.status(500).json({
                message: "Erreur de lecture !",
                error: err
            })
            // Sinon 
        } else {
            // Transforme la data en json manipulable
            const manip_data = JSON.parse(data)
            // Recherche dans le fichier si le nom passée en parametre est présent dans le tableau
            const data_name = manip_data.boissons.find(
                (obj) =>obj.name === request.params.name
            )
            // Si on trouve l'ojbet avec ce meme nom
            if (data_name) {
                // Renvoi la reponse avec un status 200 et l'objet
                response.status(200).json(data_name)
                // sinon
            } else {
                // Renvoi la réponse avec un statut 404 et message d'erreur
                response.status(404).json({
                    message: "Je n'ai pas trouvé d'objet avec le nom que vous avez renseigné !",
                    error: err
                })
            }
        }
    })
}

// Définir la fonction qui utilisera la méthode GET pour récupérer les éléments via leur id
exports.getDataById = (request, response) =>{
    // Lecture du fichier carte.json
    fs.readFile("./src/model/carte.json", (err, data) =>{
        // Condition si erreur 500
        if (err) {
            // Renvoi l'erreur 500 avec un message
            response.status(500).json({
                message: "Erreur lecture !",
                error: err
            });
            // Sinon 
        } else {
            // Transforme la data en json manipulable
            const manip_data = JSON.parse(data)
            // Recherche dans le fichier si l'id passée en parametre est présente dans le tableau
            const data_id = manip_data.boissons.find(
            (obj) => obj.id === parseInt(request.params.id)
            )
            // Si on trouve cet id
            if (data_id) {
                // Renvoi la reponse avec un status 200 et l'objet
                response.status(200).json(data_id)
                // sinon
            } else {
                // Renvoi la réponse avec un statut 404 et message d'erreur
                response.status(404).json({
                    message: "Je n'ai pas trouvé d'objet avec cette id !",
                    error: err
                })
            }
        }
    })
}

// Définir la fonction qui utilisera la méthode POST pour récupérer les éléments
exports.createData = (request, response) =>{
    // Lecture du fichier 
    fs.readFile("./src/model/carte.json", (err,data) =>{
    // Condition erreur 500
        if (err) {
        // Réponse status 500 avec un message et l'erreur
        response.status(500).json({
        message: "Erreur lecture !",
        error: err
        })
        // sinon pas d'erreur
        } else {
            // Transforme la data en json manipulable
            const existing_data = JSON.parse(data);
            // Définir la longueur du tableau boissons
            let arrayLength = existing_data.boissons.length;
                // Si le tableau n'est pas vide
                if (arrayLength > 1) {
                    // Récupère le dernier objet du tableau boissons
                    let lastObject = existing_data.boissons[arrayLength - 1];
                    // Créer et insérer la new data avec l'id = à celle du dernier objet +1
                    existing_data.boissons.push({
                        "id": lastObject.id + 1, 
                        "name": request.body.name,
                        "price": request.body.price
                    });
                    // Sinon vu que le tableau est vide 
                } else {
                    // Créer et insérer la new data avec l'id = 1
                    existing_data.boissons.push({
                        "id": 1, 
                        "name": request.body.name,
                        "price": request.body.price
                    });
                }
            // Réécrit le fichier stringify
            fs.writeFile("./src/model/carte.json", JSON.stringify(existing_data),(writeErr) => {
                // si erreur 500
                if (writeErr) {
                // renvoi erreur et message
                response.status(500).json({
                message: "Erreur lors de l'écriture !",
                error: err   
                })            
                // sinon
                } else {
                    // status 200 avec un ti message
                    response.status(200).json({
                    message: "La data a été rajouté avec succès."
                    })
                }
            })
        }
    })
}

// Définir la fonction qui utilisera la méthode PUT pour réecrire et du coup modifier des éléments
exports.updateData = (request, response) =>{
    // Lecture du fichier 
    fs.readFile("./src/model/carte.json", (err,data)=>{
        // Condition erreur de lecture (500)
        if (err) {
            // Afficher message et erreur
            response.status(500).json({
                message : "Erreur de lecture !",
                error: err,
            })
            // Sinon
        } else {
            // Stocker les données existantes
            const existing_data = JSON.parse(data);
            // Rechercher via l'id si parametre existant
            const data_id = existing_data.boissons.find(
            (obj) => obj.id === parseInt(request.params.id)
            );
            // condition si on trouve pas l'objet avec l'id
            if (!data_id) {
            // Reponse si on ne le trouve pas 404
            response.status(404).json({
            // Message erreur recherche 
                message: "Aucun objet avec cet id !",
                error: err,
            })
            // 'Sinon' on trouve l'objet donc ->
            } else {
                // La nouvelle donnée sera la requete executée dans le body thunder 
                data_id.name=request.body.name;
                // Réécriture de la donnée et sauvegarde
                fs.writeFile("./src/model/carte.json", JSON.stringify   (existing_data),(writeErr) => {
                // Si érreur reponse 500 avec message
                    if (writeErr) {
                        response.status(500).json({
                            message: "Erreur lors de la réecriture !",
                            error: err
                    })
                    // sinon status 200 succes message 
                    } else {
                        response.status(200).json({
                            message: "Réecriture accomplie avec succès !",
                        })
                    }
                })
            }
        }
    })
}

// Définir la fonction qui utilisera la méthode DELETE pour écraser et du coup supprimer des éléments
exports.deleteData = (request,response)  =>{
    // Lecture du fichier
    fs.readFile("./src/model/carte.json", (err, data)=>{
    // Si erreur de lecture
    if (err) {
        // Erreur 500 + message
        response.status(500).json({
            message: "Erreur lors de la lecture !",
            error: err 
        })
        // Sinon
        } else {
        // Stocker la donnée existante
            const existing_data = JSON.parse(data);
            // Chercher dans le fichier l'id correspondante 
            const data_id = existing_data.boissons.find(
            (obj) => obj.id === parseInt(request.params.id)    
            );
            // Si on ne trouve pas l'objet avec id 
        if (!data_id) {
            // Erreur 404 + message
            response.status(404).json({
                message: "Aucun objet trouvé avec cet id !",
                error: err
            })
            // Sinon 
        } else {
            // Reassigne la donnée existante avec le parametre nul pour écraser
            existing_data.boissons = existing_data.boissons.filter(
                (obj) => obj.id != parseInt(request.params.id));
                // Filtre la donnée et réecrit la variable sans celle ci
                fs.writeFile("./src/model/carte.json", JSON.stringify(existing_data), (writeErr)=>{
                    if (writeErr) {
                        // Si erreur renvoi message 500 + error
                        response.status(500).json ({
                            message: "Erreur lors de la suppression !",
                            error: err
                        })
                    } else {
                        // Sinon status 200 + message
                        response.status(200).json ({
                            message: "Suppression réussie !"
                        })
                    }
                })
            }
        }
    })
}