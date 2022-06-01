<?php 
session_start();

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <script src="./index.js"></script>
    <title>THE TODOLIST</title>
</head>
<body>
   <?php require "assets/template/header.php"  ?>
    <main class="mainHome">
        <?php if (!empty($_SESSION['user'])) {?>
           <h2>BIENVENUE</h2> <?= "<h2>".$_SESSION['user']['login']."</h2>" ?><?php
        }
        else {?>
            <h3>VEUILLEZ VOUS CONNECTEZ OU VOUS INSCRIRE</h3>
       <?php }?>
        

    </main>
   
    <?php require("assets/template/footer.php"); ?>