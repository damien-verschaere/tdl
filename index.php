<?php 
session_start();
var_dump( $_SESSION);

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <title>THE TODOLIST</title>
</head>
<body>
   <?php require "assets/template/header.php"  ?>
    <main class="mainHome">
    <form class="formListe" id="creationListe" method="POST">
        <h2>CREER UNE LISTE A TODOS</h2>
        <button id="creerListe">+</button>
    </form>
    </main>
   
    <footer>

    </footer>
</body>
</html>