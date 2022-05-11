<header>
        <nav>
            <ul>
                <a href="./"><li><h1>THE TODOLIST</h1></li></a>
            <?php  if (empty($_SESSION['user'])) {?>
                <a href="inscription"><li>INSCRIPTION</li></a> 
                <a href="connexion"><li>CONNEXION</li></a><?php
            } ?>                                   
            <?php if (isset($_SESSION['user'])) {?>
                <a href="mestodos"><li>MES TODOS</li></a>
                <a href=""><li>ADMIN</li></a><?php
            }?>
                
                
            </ul>
        </nav>
    </header>