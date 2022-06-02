document.addEventListener("DOMContentLoaded", () => {
    const creerListe = document.querySelector("#creerListe")
    const faire = document.querySelector("#afaire")
    const encours = document.querySelector("#encours")
    const termine = document.querySelector("#terminer")
    const supprimer = document.querySelector("#delete")
    let adTache = document.querySelector("#ajoutTache")
    let formData = new FormData
    var dragged;
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    var select = document.querySelector("#selectOptions")
    let cacher = document.querySelector('#hide')

    function hidden() {
        cacher.style.display = "none"
        select.addEventListener("change", () => {
            cacher.style.display = ""
            let valid = document.querySelector("#validation")
            let testing = document.querySelector("#formulairecreation")
            valid.innerHTML=""
            testing.remove(testing)
        })
    }

    function ajoutTache() {
        adTache.addEventListener("click", () => {

            let valeurTitre = document.querySelector("#testtache").value
            let id = document.querySelector("#testid").value
            let descr = document.querySelector("#testdesc").value
            let form = new FormData
            form.append("id_liste", id)
            form.append("titre", valeurTitre)
            form.append("description", descr)
            fetch("Class/Tache.php?complete=1", {
                method: "POST",
                body: form,
            }).then(response => response.json)

        })

    }

    function affiche2() {
        let div = document.getElementById("afaire")
        let div2 = document.getElementById("encours")
        let div3 = document.getElementById("terminer")
        let selected = document.getElementById("selectOptions")
        selected.addEventListener("change", () => {
            div.innerHTML = ""
            div2.innerHTML = ""
            div3.innerHTML = ""
            hidden = document.getElementById("testid")

            let value = select.value
            hidden.value = value
            let datas = hidden.value
            let formated = new FormData

            formated.append("selectListe", encodeURIComponent(datas))
            //genere les divs dans les div catégories
            fetch("Class/Tache.php?complete=2", {
                method: "POST",
                body: formated
            }).then(response => response.json())

                .then(respons => respons.forEach(element => {
                    // console.table(respons)

                    if (element.etat_tache == 11) {
                        // console.log("ligne 39 ")
                        // div.remove(drag)

                        div.innerHTML += `<div id ="draggable" draggable = true class="card"><input type="hidden" id="idCarte" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><input type="hidden" value="${element.etat_tache}><input type="text" value="${element.id_liste}"></div>`
                    }

                    if (element.etat_tache == 22) {
                        // div2.remove(drag)
                        div2.innerHTML += `<div id ="draggable" draggable = true class="card"><input type="hidden"  id="idCarte" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><input type="hidden"  value="${element.etat_tache}<input type="text" value="${element.id_liste}"></div>`
                    }
                    if (element.etat_tache == 33) {
                        // div3.remove(drag)
                        div3.innerHTML += `<div id ="draggable" draggable = true class="card"><input type="hidden"  id="idCarte33" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><p>${element.date_fin}</p><input type="hidden"  value="${element.etat_tache}<input type="text" value="${element.id_liste}"></div>`
                    }


                }))
        })

    }

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
    function addTache() {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
            document.getElementById("selectOptions").value

        })
    }
    function spantest() {
        let essaie = document.getElementById('ajoutTache')
        span.addEventListener("click", () => {
            modal.style.display = "none";
        })
        essaie.addEventListener("click", () => {
            modal.style.display = "none";
            let div = document.getElementById("afaire")
            let div2 = document.getElementById("encours")
            let div3 = document.getElementById("terminer")
            let selected = document.getElementById("selectOptions").value
            div.innerHTML = ""
            div2.innerHTML = ""
            div3.innerHTML = ""
            hidden = document.getElementById("testid")
            let value = selected
            hidden.value = value
            let datas = hidden.value
            let formated = new FormData
            formated.append("selectListe", encodeURIComponent(datas))
            fetch("Class/Tache.php?complete=2", {
                method: "POST",
                body: formated
            }).then(response => response.json())

                .then(respons => respons.forEach(element => {

                    if (element.etat_tache == 11) {
                        // console.log("ligne 39 ")
                        // div.remove(drag)

                        div.innerHTML += `<div id ="draggable" draggable = true class="card"><input type="hidden" id="idCarte" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><input type="hidden" value="${element.etat_tache}><input type="text" value="${element.id_liste}"></div>`
                    }

                    if (element.etat_tache == 22) {
                        // div2.remove(drag)
                        div2.innerHTML += `<div id ="draggable" draggable = true class="card"><input type="hidden"  id="idCarte" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><input type="hidden"  value="${element.etat_tache}<input type="text" value="${element.id_liste}"></div>`
                    }
                    if (element.etat_tache == 33) {
                        // div3.remove(drag)
                        div3.innerHTML += `<div id ="draggable" draggable = true class="card"><input type="hidden"  id="idCarte33" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><p>${element.date_fin}</p><input type="hidden"  value="${element.etat_tache}<input type="text" value="${element.id_liste}"></div>`
                    }


                }))
        })

    }
    function closeModal() {
        window.addEventListener("click", () => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
    }

    function draganddrop() {
        document.addEventListener("drag", function (event) {
        }, false);
        document.addEventListener("dragstart", function (event) {
            dragged = event.target;
            event.target.style.opacity = .5;
        }, false);
        document.addEventListener("dragend", function (event) {
          
            event.target.style.opacity = "";
        }, false);
        document.addEventListener("dragover", function (event) {
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
            let idcarte = document.getElementById("idCarte")
            // prevent default action (open as link for some elements)
            event.preventDefault();
            // move dragged elem to the selected drop target
            if (event.target.className == "dropzone") {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                console.log(dragged.childNodes[0].value)



                if (dragged.parentNode.id == encours.id) {
                    let encours = 22
                    console.log()
                    formData.append("idCarte", encodeURIComponent(dragged.childNodes[0].value))
                    formData.append("idSection", encodeURIComponent(encours))
                    fetch('Class/Tache.php?complete=3', {
                        method: 'POST',
                        body: formData
                    }).then((response) => response.json())
                        .then((result) => console.log(result))
                }
                if (dragged.parentNode.id == termine.id) {
                    let finTache = 33
                    formData.append("idCarte", encodeURIComponent(dragged.childNodes[0].value))
                    formData.append("idSection", encodeURIComponent(finTache))
                    fetch('Class/Tache.php?complete=3', {
                        method: 'POST',
                        body: formData
                    }).then((response) => response.json())
                        .then((result) => console.log(result))
                }
                if (dragged.parentNode.id == supprimer.id) {
                    formData.append("id", encodeURIComponent(dragged.childNodes[0].value))
                    fetch('Class/Tache.php?complete=4', {
                        method: 'POST',
                        body: formData
                    }).then((response) => response.json())
                        .then((result) => console.log(result))
                    supprimer.innerHTML = "<img src=assets/image/delete.png alt=supprimer tache damien verschaere >"
                }
            }

        }, false);


    }
    function getselect() {
        let user = document.querySelector("#idUser").value
        // console.log(user)
        formData.append("idUser", encodeURIComponent(user))
        fetch("Class/Liste.php?complete=5", {
            method: "POST",
            body: formData
        }).then(reponse => reponse.json()).then(rep =>
            rep.forEach(element => {
                select.innerHTML += `<option id=essaieTest value=${element.id}>${element.titre}</option>`
            }))
    }


    affiche2()
    hidden()
    getselect()
    ajoutTache()
    draganddrop()
    affichageForm()
    addTache()
    spantest()
    closeModal()

})