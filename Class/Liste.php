<?php 


class Liste  {


    private $id ;
    public $id_user;
    public  $titre;
    public  $date ;
    
function __construct(){
    $this->id;
    $this->id_user;
    $this->titre;
    $this->date;
}


public function bdd(){
    $con='root';
    $pass='';
    try {
        $bdd = new PDO('mysql:host=localhost;dbname=tdl',$con , $pass);
        return $bdd;
    }
    catch (PDOException $e ) {
        print "Erreur ! : " . $e-> getMessage()."<br>";
    die();
    }
}

public function creerListe($id_user,$titre){
    $insertTitreListe = $this->bdd()->prepare("INSERT INTO liste (id_user,titre,date) VALUES ($id_user,:titreListe,NOW())");
    $insertTitreListe->execute(array(
    ":titreListe"  => $titre,
        ));
}

public  function insertListe(){
    if (isset($_POST['creer'])) {
        if (empty($_POST['titreListe'])) {
            echo "veuillez remplir le champ titre ";
        }
        else {
            $titre =htmlspecialchars($_POST['titreListe']); 
            $id_user = $_SESSION['user']['id']; 
    }
        $liste = new Liste;
        $liste ->creerListe($id_user,$titre);
    }

}

public function getListe(){
    $id_utilisateur = $_SESSION['user']['id'];
    $selectListe = $this->bdd()->prepare("SELECT * FROM liste WHERE id_user=$id_utilisateur");
    $selectListe->execute();
    $result = $selectListe->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}
public  function afficherListe(){
    $id_user=$_SESSION['user']['id'];
    $choixListe = new Liste;
    $tabListe= $choixListe->getListe($id_user);
    $_SESSION['liste']=$tabListe;
    foreach ($tabListe as $liste) {?>
       <option value=<?= $liste['id'] ?>><?= $liste['titre'] ?></option><?php
    }
}







}