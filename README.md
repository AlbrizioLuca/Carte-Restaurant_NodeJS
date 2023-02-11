Evaluation NodeJS
=========

Dans ce repository on retrouve du code servant à gérer des opérations de CRUD sur une carte de restaurant qui se trouve dans:
````
src/model/carte.json
````
Pour générer les réponses les codes sont spécifiques à chaque tableau, et ils se trouvent dans le dossier suivant (le nom du fichier est diffèrent pour chaque tableau):
````
src/controller/ctrl_arrayName
````
La liste des routers se trouve dans le dossier suivant ( tout comme pour les controller le nom du fichier change en fonction du tableau ciblé):
````
src/routes/route_arrayName
````
Pour pouvoir executer l'ensemble de ces fonctions, les librairies utilisées sont:

| Librairie | Version | Raison |
| :-------- | :------ | -----: |
| Express|| Manipulation des requetes et réponses|
|BodyParser|| Afficher en bonne et due forme les données renseignées dans le body lors de la phase de requete |
|fs|| Manipulation et lecture des fichiers json|
|nodemonn|| Créer un LiveReload afin de relancer le serveur automatiquement à chaque manipulation |

Les routes utilisées sont:

## Liste des routes:
| Routes | Verbe | Exemple | Explication | 
| :----- | :---- | ------- | ----------: |
| /:arrayName | GET | http://localhost:3000/entrees| Cette route permet de récupérer les données du tableau 'entrees' présent dans le fichier carte.json|
| /:arrayName/:id | GET | http://localhost:3000/entrees/1| Cette route permet de récupérer une donnée dans le tableau 'entrees' via son 'id'|
| /:arrayName/search/:name | GET | http://localhost:3000/entrees/search/carpaccio| Cette route permet de récupérer une donnée du tableau 'entrees' via son 'nom'|
| /:arrayName | POST | http://localhost:3000/entrees| Cette route permet de créer des données dans le tableau 'entrees' en précisant le nom et le prix, l'id est incrémenté automatiquement par rapport à la donnée précente présente dans le tableau. N.B: si le tableau est vide l'id attribué sera '1'|
| /:arrayName/:id | PUT | http://localhost:3000/entrees/1| Cette route permet de mettre à jour une donnée du tableau 'entrees' en récupérant son 'id'|
| /:arrayName/:id | DELETE | http://localhost:3000/entrees/1| Cette route permet d'écraser et donc de supprimer une donnée du tableau 'entrees' via son 'id'|

## Installation du projet
* Se positionner à la racine du projet
* Ouvrir un terminal
* Verifier si node est intallé avec la commande bash: 
````
node -v
````
* Installer les dépendances avec le commande bash:
````
npm install
````