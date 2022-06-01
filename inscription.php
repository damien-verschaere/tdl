<?php
require_once("Class/User.php");
$inscription = new User;

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <title>Inscription</title>
</head>

<body>
    <?php require "./assets/template/header.php"  ?>
    <main class="signIn">
        <div class="carre">
            <form class="formInscription" method="POST">
                <p>S'inscrire</p>
                <input type="text" placeholder="login" name="login">
                <input type="password" placeholder="password" name="password">
                <input type="text" placeholder="nom" name="nom">
                <input type="text" placeholder="prenom" name="prenom">
                <input type="password" placeholder="verify password" name="Vpassword">
                <input type="submit" value="s'inscrire" name="inscription">
				<?php $inscription->inscriptionUser()?>
            </form>
        </div>
    </main>
    <?php require("assets/template/footer.php"); ?>