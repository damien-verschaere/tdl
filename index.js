document.addEventListener("DOMContentLoaded", () => {
    const creerListe = document.querySelector("#creerListe")
    const faire = document.querySelector("#afaire")
    const encours = document.querySelector("#encours")
    const termine = document.querySelector("#terminer")
    var select = document.querySelector("#selectOptions")
    let formData = new FormData
    var dragged;
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    var inputami = document.querySelector("#addfriend")

    function getselectoption(){
        
        select.addEventListener("click",()=>{
            let value= select.selectIndex
            let data = new FormData
            data.append("idListe",encodeURIComponent(value))
            fetch("Class/Liste.php",{
                method:"POST",
                body:data
            }).then(response =>response.json).then(resp => console.log(resp))
        })  
    }
    getselectoption()
    function creationListe() {

        let formulaire = document.getElementById("creationFormulaire")
        let newForm = document.createElement("form")
        formulaire.after(newForm)
        newForm.id = "formulairecreation"
        newForm.method = "POST"
        let inputTitre = document.createElement("input")
        inputTitre.setAttribute("type", "text")
        inputTitre.name = "titreListe"
        inputTitre.placeholder = "Titre Liste"
        let creationvalide = document.createElement("input")
        creationvalide.setAttribute("type", "submit")
        creationvalide.id = "creationListe"
        creationvalide.name = "creer"
        creationvalide.value = "creer"
        newForm.appendChild(inputTitre)
        newForm.appendChild(creationvalide)

    }
    function affichageForm() {
        creerListe.addEventListener("click", () => {
            creationListe()
            console.log("je pass dans affichageform")
        })
    }
    function addTache(){
        btn.addEventListener("click",()=>{
            modal.style.display = "block";
        })
    }
    function spantest(){
        span.addEventListener("click",()=>{
            modal.style.display = "none";
        })
    }
    function closeModal(){
        window.addEventListener("click",()=>{
            if (event.target == modal) {
                modal.style.display = "none";
              }
        })
    }

    function draganddrop() {

        document.addEventListener("drag", function (event) {

        }, false);

        document.addEventListener("dragstart", function (event) {
            // store a ref. on the dragged elem
            dragged = event.target;
            // make it half transparent
            event.target.style.opacity = .5;
        }, false);

        document.addEventListener("dragend", function (event) {
            // reset the transparency
            event.target.style.opacity = "";
        }, false);

        /* events fired on the drop targets */
        document.addEventListener("dragover", function (event) {
            // prevent default to allow drop
            event.preventDefault();
        }, false);

        document.addEventListener("dragenter", function (event) {
            // highlight potential drop target when the draggable element enters it
            if (event.target.className == "dropzone") {
                event.target.style.background = "purple";
            }

        }, false);

        document.addEventListener("dragleave", function (event) {
            // reset background of potential drop target when the draggable element leaves it
            if (event.target.className == "dropzone") {
                event.target.style.background = "";
            }

        }, false);

        document.addEventListener("drop", function (event) {
            // prevent default action (open as link for some elements)
            event.preventDefault();
            // move dragged elem to the selected drop target
            if (event.target.className == "dropzone") {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                //   console.log(dragged.parentNode.id)


                // console.log(dragged.childNodes[1].value)
                if(dragged.parentNode.id == encours.id){
                    let encours = 22
                    formData.append("idCarte",encodeURIComponent(dragged.childNodes[1].value))
                    formData.append("idSection",encodeURIComponent(encours))
                    fetch('Class/Tache.php',{
                        method:'POST',
                        body:formData
                    }).then((response)=>response.json)
                    .then((result)=>console.log(result))
                }
                else if (dragged.parentNode.id == termine.id) {
                    let finTache = 33
                    formData.append("idCarte",encodeURIComponent(dragged.childNodes[1].value))
                    formData.append("idSection",encodeURIComponent(finTache))
                    fetch('Class/Tache.php',{
                        method:'POST',
                        body:formData
                    }).then((response)=>response.json)
                    .then((result)=>console.log(result))
                }
              }
            
          }, false);


    }

    draganddrop()
    affichageForm()
    addTache()
    spantest()
    closeModal()

})