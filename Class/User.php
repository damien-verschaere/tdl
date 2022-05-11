<?php 


class User{

private $id;
public $login;
public $password;
public $nom;
public $prenom;

function __construct(){
    $this->id;
    $this->login;
    $this->password ;
    $this->nom;
    $this->prenom;
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
public function verifLogin($login){
    $verificationLogin = $this->bdd()->prepare("SELECT * FROM user where login= :login");
    $verificationLogin->execute(array(
        ':login'=>$login
    ));
    $verification = $verificationLogin->rowCount();
    return $verification;
}

public function inscription($login,$password,$nom,$prenom){
    $inscription = $this->bdd()->prepare("INSERT INTO user (login,password,nom,prenom) VALUES (:login,:password,:nom,:prenom)");
    $inscription->execute(array(
        ":login"      => $login ,
        ":password"  => $password,
        ":nom"        => $nom,
        ":prenom"    => $prenom

    ));
}
public function inscriptionUser(){
    if (isset($_POST["inscription"])) {
        if (empty($_POST['login'])||empty($_POST['nom'])||empty($_POST['prenom'])||empty($_POST['password'])) {
            echo "veuillez remplir tous les champs";
        }
        $u = new User;
        $verif= $u->verifLogin($_POST['login']);
        if ($verif >0) {
            echo "le login est deja utilisé";
        }

        elseif ($_POST['password'] != $_POST['Vpassword']) {
            echo "les MDP ne correspondent pas";
        }
        else {
            $login    = htmlspecialchars($_POST['login']);
            $password = htmlspecialchars(password_hash($_POST['password'],PASSWORD_BCRYPT));
            $nom      = htmlspecialchars($_POST['nom']);
            $prenom   = htmlspecialchars($_POST['prenom']);
            $user     = new User;
            $user->inscription($login,$password,$nom,$prenom);
            header('location: ./connexion.php');
        }
    } 
}
public function connexion($login){
    $connexion = $this->bdd()->prepare("SELECT * FROM user WHERE login = :login ");
    $connexion ->execute(array(
        ":login"     => $login,
     
    ));
    $user = $connexion->fetch(PDO::FETCH_ASSOC);
    return $user;
}
public function connexionUser(){
    if (isset($_POST['connexion'])) {
        if (empty($POST['login']) || empty($_POST['password'])) {
            echo "veuillez remplir tous les champs";
        }
        $model = new User;
        $verif = $model->verifLogin($_POST['login']);
        if ($verif<1) {
            echo "aucun utilisateur avec ce login";
        }
        else {
            $user = new User;
            $connexionUser = $user->connexion($_POST['login']);
            if(password_verify(htmlspecialchars($_POST['password'],ENT_QUOTES,"ISO-8859-1"),$connexionUser['password'])) {
                $_SESSION['user'] = $connexionUser ; 
                header('location: ./index.php');
            }
            else{
                echo "login ou mdp incorrect";
            }
        }
    }
}
public function addFriend($login){
    $login = htmlspecialchars($_POST['addAmis']);
    $friend = $this->bdd()->prepare("SELECT * FROM user WHERE login LIKE '$login%' ");
    $friend->execute();
    $result= $friend->fetchAll(PDO::FETCH_ASSOC);
   
    echo json_encode($result);
    
}

}
$user = new User;
if (isset($_POST['addAmis'])) {
    $user->addFriend($_POST['addAmis']);
}
   