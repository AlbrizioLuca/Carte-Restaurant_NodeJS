// Déclarer constante qui contiendra l'export du module express
const express = require("express");
// Déclarer constante qui contiendra la fonction express qui crée l'appli
const app = express();
// Déclarer constante qui contiendra l'export du module fs
const fs = require("fs");
// Déclarer constante qui continedra l'export du module body parser
const bodyParser = require("body-parser");
// Pour faire l'appli express devra utiliser bodyParser
app.use(bodyParser.json());


// TEST ROUTE PAR DEFAULT
app.get('/', (request,response) =>{
    response.send("Hello tout va bien!")
})

// Définir la fonction qui utilisera la méthode GET pour récupérer les éléments de
app.get('/carte', (request,response) =>{
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
            response.status(200).json(JSON.parse(data))
        }
    })
})


// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'entrees'
const roadToStarters = require("./src/routes/route_entrees");
// Utiliser les routes liées au tableau 'entrees' du fichier carte.json
app.use(roadToStarters)


// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'plats'
const roadToMainCourses = require("./src/routes/route_plats");
// Utiliser les routes liées au tableau 'plats' du fichier carte.json
app.use(roadToMainCourses)


// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'desserts'
const roadToDesserts = require("./src/routes/route_desserts");
// Utiliser les routes liées au tableau 'desserts' du fichier carte.json
app.use(roadToDesserts)

// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'boissons'
const roadToDrinks = require("./src/routes/route_boissons");
// Utiliser les routes liées au tableau 'boissons' du fichier carte.json
app.use(roadToDrinks)

// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'tapas'
const roadToTapas = require("./src/routes/route_tapas");
// Utiliser les routes liées au tableau 'tapas' du fichier carte.json
app.use(roadToTapas)

// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'vins'
const roadToWines = require("./src/routes/route_vins");
// Utiliser les routes liées au tableau 'vins' du fichier carte.json
app.use(roadToWines)


// On exporte la constante du port choisi
module.exports = app;