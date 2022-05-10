<?php
session_start();
require_once("Class/Liste.php");
require_once("Class/Tache.php");
$liste = new Liste;
$liste->insertListe();
$tache = new Tache;
$tache->enregistrementTache()
// var_dump($_SESSION['liste'][0]['id'])

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="index.js"></script>
    <link rel="stylesheet" href="./index.css">
    <title>Mestodos</title>
</head>

<body>
    <?php require("./assets/template/header.php") ?>
    <form method="POST" class="listeForm" id="creationFormulaire">
        <input type="button" id="creerListe" value="creer liste">
        <select name="selectListe" id="">
            <?php $liste->afficherListe() ?>
        </select>
        <input type="submit" name="choixListe">
    </form>
    <main id="todo">

        <section id="test" class="dropzone">
            <!-- <button id="myBtn">ajout Tache</button>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span> -->
                    <h2>AJOUT TACHE</h2>
                    <form class="formTache" method="POST"  >
                        <input type="text" class="titreTache" name="titre">
                        <input type="text" class="description" name="description">
                        <input type="submit" name="ajoutTache">
                       
                    </form>
                </div>

            </div>
            <div id="afaire">
                <?php $tache->afficheTodoListe() ?>
            </div>


        </section>
        <section id="encours" class="dropzone">
            <input id="etatEnCours" type="hidden" value="22">
        </section>
        <section id="terminer" class="dropzone">

        </section>
    </main>
    <footer>

    </footer>
</body>

</html>