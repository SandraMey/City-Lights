
Structure du projet:


-- project_folder  => City-Light
 -- css                           
    -- style.css                
    --src
        img.jpg
 -- html
    -- about.ejs
    -- contact.ejs
    -- index.ejs
    -- visiting-Blaye.ejs
    -- visiting-Libourne.ejs
    -- visiting-Lyon.ejs
    -- visiting-Marseille.ejs
    -- visiting-Nantes.ejs
    -- Activites
        baseAquatique.ejs
        croisiere.ejs
        musee.ejs
        saintemilion.ejs
        veloRail.ejs
    -- include
        -- footer.ejs
        -- head.ejs
        -- nav.ejs
        -- scripts.ejs
 -- routes
    -- index.js
 -- app.js
 -- package.json
 -- package-lock.json
 -- node_modules

 Description structure:

 4 PARTIES :

 - css/src => Dans le fichier css, il y a le fichier src ou on peut    mettre toutes nos images
 - html
 - routes => logique routeur pour parcourir les pages sans chargements
 - Module/packages


Info syntaxe:
Les pages avec l'extention .ejs sont des pages html liées avec le routeur codé avec Express.js un module de node.js.Un peu à l'image de ce que fait php avec les includes templates.

Normalement La logique routeur (dossiers: app.js, routes/index.js) on a plus besoin d'y toucher.On a juste besoin de s'occuper du css et du html(logique du site web)
 
Utilisation dans le Repository:

Une fois avoir pull request le projet sur le github de Paul:

- Initialiser les packages node.js avec la commande : npm init
NB : Passez les étapes demandées par le terminal en appuyant sur "entré"

- Installez express.js pour que le routeur fonctionne avec la commande : 
npm install express

- Pour lancer la page vous avez juste à lancer le routeur comme avec php avec la command : node app.js 
Le fichier app.js c'est <LE FICHIER> qui détient la logique routeur
Le document routes c'est <Le document> qui détient toutes les link href des pages HTML

NB : Votre page s'affichera dans le localhost: 3000
Si il faut je peux changer l'adresse si besoin..



