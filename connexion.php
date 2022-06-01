<?php 
session_start();
require_once("Class/User.php");
$user = new User;

// var_dump($_SESSION['user']);
?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <title>Connexion</title>
</head>

<body>
    <?php require "./assets/template/header.php" ?>
    <main class="signIn">
        <div class="carre">

            <form class="formInscription" method="POST">
                <p>Connexion</p>
                <input type="text" placeholder="login" name="login">
                <input type="password" placeholder="password" name="password">
                <input type="submit" value="connexion" name="connexion">
               <?php $user->connexionUser();?>
            </form>
        </div>
    </main>
    <?php require("assets/template/footer.php"); ?>