Application pour tester les TP de programmation web. 

Cette application nécessite node.js (https://nodejs.org/)

Utilisation

------------

- Installer [node.js](https://nodejs.org)
- Télécharger  l'application puis la décompresser ou la clonner avec git:

~~~csh
git clone https://gitlab.com/INF3190/tpapp.git
~~~

- Par la suite, en utilisant un terminal, aller  dans le dossier principal de l'application et tapez le commandes suivantes:

>- Pour installer les modules node.js requis

>~~~csh
> npm install express body-parser --save  
>~~~

>- Pour démarrer l'application

>~~~csh
> node tpapp.js
>~~~

- Si tout va bien, un numéro de port s'affichera (ex: 3000)

- Avec un navigateur (fureteur) web, vous pouvez visiter l'url suivant:


~~~csh
http://localhost:3000/tpapp.html
~~~

Si vous voyez une page s'affichez c'est que tout fonctionne bien. Vous pouvez alors commencer à développer votre site dans le dossier public_html. N'oubliez pas que la page visible par défaut est index.html. Vous avez donc besoin d'avoir un fichier index.html dans le dossier public_html.
-----------------------------------------

BOOTSTRAP



Le sous dossier  appdefaut/bs contient déjà bootstrap 5.1  que vous pourriez utiliser. Ces fichiers proviennent du site http://getbootstrap.com

ATTENTION: Le dossier public_html ne doit pas être renomé!

-------------------------------------------

GESTION DE CODE AVEC GIT

Les explications de cette partie s'addressent à ceux qui veulent utiliser git pour la gestion de leur code source.

Prérequis: Installation nodejs (https://nodejs.org/) et git (https://git-scm.com/downloads).

Installer la dernière version LTS de node.js

Pour vous permettre de mettre à jour l'application tpapp de temps en temps et aussi de continuer à gérer le code sur votre propre dépôt git privé, nous vous recommandons de clonner l'application et de développer vos fichiers dans le dossier public_html selons les indications de l'énoncé. Pour cela, condérons que vous voulez héberger votre dépôt sur gitlab (la procédure est aussi valable pour d'autres fournisseurs git). Voici les étapes à suivre.

1. Se créer un compte sur https://gitlab.com si ce n'est pas encore fait

2. Créez un projet (tpapp) git privé et copiez l'url https. Supposons que cet url est le suivant:

 https://gitlab.com/etudiant/tpapp.git

3. Sur votre machine locale ouvrez un terminal (ou in terminal git-bash sous Windows) puis placez-vous dans le dossier où vous voulez mettre votre application tpapp

4. Clonez l'application tpapp avec la commande suivante (Nécessite une connexion Internet au moement de l'exécution de la commande):

git clone -o tpapp https://gitlab.com/INF3190/tpapp.git

Si tout se passe bien, l'application sera téléchargée dans le dossier tpapp

5. Créez un remote (une connexion) vers votre propre dépôt git

 A l'aide d'un terminal, allez dans le dossier tpapp:
 
 cd tpapp
 
 Tapez la commande suivante:
 
 git remote add origin https://gitlab.com/etudiant/tpapp.git
 
 
 Pour vérifier que votre remote s'est bien ajouté, tapez la commande suivante:
 
 git remote -v
 
 6. Poussez l'application vers votre dépôt privé:
 
 git push -u origin master:master
 
 A la demande, entrez le login et le mot de passe. Si tout se passe bien alors vous pouvez vérifier votre dépôt avec un navigateur web et vous verrez les fichiers de l'application
 
 7. Ajoutez/Modifiez vos pages et poussez vers votre dépôt git
 
 Précison tout de suite que certaines de ces manipulations peuvent se faire via l'interface graphique sur eclipse.
 
 Après ajout et/ou modification des fichiers (dans public_html), taper les commandes suivantes:
 
 git add public_html
 
 git commit -m "vos commentaires sur cet enregistrement"
 
 git push origin master
 
 
 8. Metre à jour l'application:
 
 
 git pull tpapp master
 
 (s'il y a desmaj, il faudra les pousser vers votre dépôt git)
 
 git push origin master:master
 
 ==========================
 
 # Quelques librairies
 
 Quelquques librairies gratuites sont insérées dans l'applicaion.
 
