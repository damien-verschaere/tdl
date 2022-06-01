<?php
session_start();
require_once("Class/Liste.php");
require_once("Class/Tache.php");
$liste = new Liste;
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

	<script src="./index.js"></script>
    <link rel="stylesheet" href="./index.css">
    <title>Mestodos</title>
</head>

<body>
    <?php require("./assets/template/header.php") ?>
    <form method="POST" class="listeForm" id="creationFormulaire">
        <input type="button" id="creerListe" value="creer liste">
        <select name="selectListe" id="selectOptions">
        <option value="">--Please choose a list--</option>
        </select>
    </form>
    <input type="hidden" value =<?= $_SESSION['user']['id'] ?> id="idUser">
    <main id="todo">
    <button id="myBtn" class="ajoutache">ajouter Tache</button>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>AJOUT TACHE</h2>
                    <form class="formTache" id="mafoi" method="POST"  >
                        <input type="hidden" id="testid" name="id_liste">
                        <input type="text" id="testtache"class="titreTache" name="titre" placeholder="Titre Tache">
                        <input type="text" id="testdesc"  class="description" name="descriptionS" placeholder="descritpion tache">
                        <input type="button" name="ajoutTache" id="ajoutTache" value="ajouter">
                        <p id="erreur"></p>
                    </form>
                </div>

            </div>
            <h2><?php $liste->insertListe(); ?></h2>
        <h2>A FAIRE</h2>
        <section id="test" class="dropzone">
            <div id="afaire">
                
            </div>
        </section>
        <h2>EN COURS</h2>
        <section id="encours" class="dropzone">
           
        </section>
        <h2>TERMINER</h2>
        <section id="terminer" class="dropzone">
        </section>
        <h2>SUPPRIMER</h2>
        <section id="delete" class="dropzone">
        <img src="assets/image/delete.png" alt="suprrimer tache verschaere damien">
        </section>
        
    </main>
    <?php require("assets/template/footer.php"); ?>