document.addEventListener("DOMContentLoaded", () => {

    const creerListe = document.querySelector("#creerListe")
    const faire = document.querySelector("#afaire")
    const encours = document.querySelector("#encours")
    const termine = document.querySelector("#terminer")
    const etatcours = document.querySelector("#etatEnCours")
    let formData = new FormData
    var dragged;


    // console.log(etatcours.value)
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
                if (dragged.parentNode.id == encours.id) {
                    

                    let carteId = dragged.childNodes[1].value
                    let sectionID = etatcours.value
                    let insertData= {
                         "carteId": dragged.childNodes[1].value,
                         "sectionID": etatcours.value
                    }
                    // console.log(" je passe ligne 95")
                    // formData.append(carteId, encodeURIComponent(carteId))
                    // console.log(dragged.childNodes[1].value)
                    // formData2.append(sectionID,encodeURIComponent(sectionID))
                    formData.append("test",insertData)
                    console.table(insertData)
                    fetch('controller/Controller.php', {
                        method: 'post',
                        body: formData
                    }).then(response => response.json)
                        .then(res => console.log(res))
                //     fetch('model/Todo.php',{
                //         method: 'POST',
                //         header:'Content-Type: application/json',
                //         body:JSON.stringify({
                //             carteId : dragged.childNodes[1].value,
                //             sectionID : etatcours.value
                //         })
                // }).then(response => response.json).then(json => console.log(json))
                }
            }

        }, false);


    }
    draganddrop()
    affichageForm()


})