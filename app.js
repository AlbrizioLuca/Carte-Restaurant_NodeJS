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
const entreesRoutes = require("./src/routes/entrees_route");

// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'plats'
const platsRoutes = require("./src/routes/plats_route");

// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'desserts'
const dessertsRoutes = require("./src/routes/desserts_route");

// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'boissons'
const boissonsRoutes = require("./src/routes/boissons_route");

// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'tapas'
const tapasRoutes = require("./src/routes/tapas_route");

// Déclarer constante dans laquelle on va rassembler les routes liées au tableau 'vins'
const vinsRoutes = require("./src/routes/vins_route");



// Utiliser les routes liées au tableau 'entrees' du fichier carte.json
app.use(entreesRoutes)

// Utiliser les routes liées au tableau 'plats' du fichier carte.json
app.use(platsRoutes)

// Utiliser les routes liées au tableau 'desserts' du fichier carte.json
app.use(dessertsRoutes)

// Utiliser les routes liées au tableau 'boissons' du fichier carte.json
app.use(boissonsRoutes)

// Utiliser les routes liées au tableau 'tapas' du fichier carte.json
app.use(tapasRoutes)

// Utiliser les routes liées au tableau 'vins' du fichier carte.json
app.use(vinsRoutes)


// On exporte la constante du port choisi
module.exports = app;