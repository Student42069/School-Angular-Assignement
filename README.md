# TP2 pour INF3190 - Introduction à la programmation web été 2022

## Testé et developé sur Mozilla Firefox

## Le site est déployé en ligne au : https://stunning-rabanadas-84162e.netlify.app/ (Mais n'utilise pas de POST/GET)

## Tester sur sa mahine :

Dans un terminal :

> ```csh
> git clone git@gitlab.info.uqam.ca:glazyrin.leonid/inf3190-e22-tp.git
> cd inf3190-e22-tp
> git checkout TP2_E2022
> npm install npm-install-all -g
> npm-install-all
> ng serve
> ```

### Allumer le serveur test pour les requetes GET/POST

Aller dans le repertoire /tpapp :

> - Pour installer les modules node.js requis

> ```csh
> npm-install-all
> ```

> - Pour démarrer l'application

> ```csh
> node tpapp.js
> ```

## Note : Tres important de partir le tpapp.js qui est dans le dossier tpapp qui est au meme diveau que le dossier /src. Comme fourni.

## Note2 : Pour qu'un utilisateur puisse etre ajouter tout les champs doivent etre rempli et le username unique. L'affichage des photos des usagers rajoute n'est pas implemente.

## Note3 : La creation/modification des usagers utilisent la fonction postdata.

## Note4 : Si celui qui se connecte a le role admin, il sera dirige vers la page admin et un lien admin sera rajouter dans la barre. Si cest un client, il sera dirige vers le panier.

## Note5 : Lorsque on utilise le site dont le lien est en haut deploye la table des employe n'est pas correct a cause que l'appel getEmploye() est altere, car il n'y a pas de GET
