<?php 
session_start();
// var_dump( $_SESSION['liste']);

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
    <div class="formListe" id="creationListe" >
        <h2>CREER UNE LISTE A TODOS</h2>
        <button id="addListe">+</button>
</div>
    </main>
   
    <footer>

    </footer>
</body>
</html>