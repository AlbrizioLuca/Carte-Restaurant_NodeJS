// Constante app qui provient du fichier 'app.js'
const app = require('./app')
// Constante qui définit sur quel port on est
const port = 3000

app.listen(port, ()=> {
    // On lancera une chaine de caractères en terminal pour avoir un retour pour être sur que tout fonctionne
    console.log("l'application tourne sur le port" + port);
});