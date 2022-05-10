<?php 

class Tache {


private $id;
public  $id_liste;
public  $id_etat;
public  $titre;
public  $description;
public  $date;


function __construct(){

$this->id;
$this->id_etat;
$this->id_liste;
$this->titre;
$this->description;
$this->date;

}

public function bdd(){
    $con='root';
    $pass='root';
    try {
        $bdd = new PDO('mysql:host=localhost;dbname=tdl',$con , $pass);
        return $bdd;
    }
    catch (PDOException $e ) {
        print "Erreur ! : " . $e-> getMessage()."<br>";
    die();
    }
}


public function SelectToDo(){

    $select = $this->bdd()->prepare("SELECT * FROM `tache` WHERE id_liste = $_POST[selectListe]");
    $select->execute();
    $result = $select->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}
public static function afficheTodoListe(){
    if (isset($_POST['choixListe'])) {
            
            $choix    = new Tache;
            $tab = $choix->SelectToDo($_POST['selectListe']);
            foreach ($tab as $tache) {?>
            <div class="card" id="draggable" draggable="true" ondragstart="">
            <input type="hidden" name="idtache" value=<?= $tache['id'] ?>>
            <h3><?= $tache['titre'] ?></h3>
            <p><?= $tache['descriptif']?></p>
            <p><?= $tache['date'] ?></p>
            </div>
            <?php
        }
    }
}
public function updateEtatTache($idCarte,$idSection){
    $update = $this->bdd()->prepare("UPDATE `tache` SET `etat_tache`= :id_etat_tache  WHERE `id` =:id ");
    $update->execute(array(
        ":id_etat_tache" => $idSection,
        ":id"            =>$idCarte,
    ));

    // echo json_encode();
}
public function addTache($titre,$description){
    $insertTache = $this->bdd()->prepare("INSERT INTO `tache`(`id_liste`, `titre`, `descriptif`, `etat_tache`, `date`) VALUES (:id_liste,:titre,:description,:etat_tache,NOW())");
    $insertTache->execute(array(
        ':id_liste'=>$_SESSION['liste'][0]['id'],
        ':titre' =>$titre,
        ':description' => $description,
        ':etat_tache'=>11
    ));
}
public function enregistrementTache(){
    // var_dump($_SESSION['liste'][0]['id']);
    if (isset($_POST['ajoutTache'])) {
        var_dump($_SESSION['liste'][0]['id']);
        if (empty($_POST['titre']) && empty($_POST['description'])) {
            echo 'veuillez remplir les champs';
        }
        else{
         
            $titre    = htmlspecialchars($_POST['titre']);
            $description = htmlspecialchars($_POST['description']);
        }
        $tache = new Tache;
        $tache ->addTache($titre,$description);
    }
}
}

$test = new Tache;
@ $test->updateEtatTache($_POST['idCarte'],$_POST['idSection']);