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
        echo "la liste a bien été crée";
    }

}

public function getListe($id_user){

    $selectListe = $this->bdd()->prepare("SELECT * FROM liste WHERE id_user=:idUser");
    $selectListe->execute(array(
        "idUser"=>$id_user,
    ));
    $result = $selectListe->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
}
// public  function afficherListe(){
//     $id_user=$_SESSION['user']['id'];
//     $choixListe = new Liste;
//     $tabListe= $choixListe->getListe($id_user);
//     $_SESSION['liste']=$tabListe;
//     foreach ($tabListe as $liste) {

//     }
// }







}
if( @ $_GET['complete']==5){
    $test = new liste;
    @ $test -> getListe($_POST['idUser']);
    }