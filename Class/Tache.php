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

private function bdd(){
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


public function SelectToDo($id_liste){

    $select = $this->bdd()->prepare("SELECT * FROM `tache` WHERE id_liste = :selectListe");
    $select->execute(array(
        ':selectListe'=>$id_liste,
    ));
   
    echo json_encode( $select->fetchAll(PDO::FETCH_ASSOC));
}


public function updateEtatTache($idCarte,$idSection){
    $update = $this->bdd()->prepare("UPDATE `tache` SET `etat_tache`= :id_etat_tache  WHERE `id` =:id ");
    $update->execute(array(
        ":id_etat_tache" => $idSection,
        ":id"            =>$idCarte,
    ));

    // echo json_encode();
}
public function addTache($id_liste,$titre,$description){
    $insertTache = $this->bdd()->prepare("INSERT INTO `tache`(`id_liste`, `titre`, `descriptif`, `etat_tache`, `date`) VALUES (:id_liste,:titre,:description,:etat_tache,NOW())");
    $insertTache->execute(array(
        ':id_liste'=>$id_liste,
        ':titre' =>$titre,
        ':description' => $description,
        ':etat_tache'=>11
    ));
}
public function enregistrementTache(){
    // var_dump($_SESSION['liste'][0]['id']);
    if (isset($_POST['ajoutTache'])) {
        if (empty($_POST['titre']) && empty($_POST['descriptionS'])) {
            echo 'veuillez remplir les champs';
        }
        else{
            $id_liste = htmlspecialchars($_POST['id_liste']);
            $titre    = htmlspecialchars($_POST['titre']);
            $description = htmlspecialchars($_POST['descriptionS']);
        }
        $tache = new Tache;
        $tache ->addTache($id_liste,$titre,$description);
    }
}
}

$test = new Tache;
@ $test->updateEtatTache($_POST['idCarte'],$_POST['idSection']);
@ $test-> SelectToDo($_POST['selectListe']);