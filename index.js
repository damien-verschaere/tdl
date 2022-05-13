document.addEventListener("DOMContentLoaded", () => {
    const creerListe = document.querySelector("#creerListe")
    const faire = document.querySelector("#afaire")
    const encours = document.querySelector("#encours")
    const termine = document.querySelector("#terminer")
    let formData = new FormData
    var dragged;
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    let test = new FormData




    var select = document.querySelector("#selectOptions")

    
    function affichageListe() {
        let div = document.getElementById("afaire")
        let div2 = document.getElementById("encours")
        let div3 = document.getElementById("terminer")
        var afficheListe = document.getElementById("buttonidListe")
        afficheListe.addEventListener("click", () => {

            div.innerHTML = ""
            div2.innerHTML = ""
            div3.innerHTML = ""
            hidden = document.getElementById("testid")

            let value = select.value
            hidden.value = value
            let datas = hidden.value
            let formated = new FormData

            formated.append("selectListe", encodeURIComponent(datas))
            fetch("Class/Tache.php", {
                method: "POST",
                body: formated
            }).then(response => response.json())
                .then(respons => respons.forEach(element => {
                    let drag = document.getElementById("draggable")
                    if (element.etat_tache == 11) {
                        console.log("ligne 39 ")
                        // div.remove(drag)

                        div.innerHTML += `<div id ="draggable" draggable = true class="card"><input type="hidden" id="idCarte" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><input type="hidden" value="${element.etat_tache}><input type="text" value="${element.id_liste}"><button class="supp">delete</button></div>`
                    }
                    
                    if (element.etat_tache == 22) {
                        // div2.remove(drag)
                        div2.innerHTML = `<div id ="draggable" draggable = true class="card"><input type="hidden"  id="idCarte" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><input type="hidden"  value="${element.etat_tache}<input type="text" value="${element.id_liste}"><button class="supp">delete</button></div>`
                    }
                    if (element.etat_tache == 33) {
                        // div3.remove(drag)
                        div3.innerHTML = `<div id ="draggable" draggable = true class="card"><input type="hidden"  id="idCarte" value=${element.id}><h2>${element.titre}</h2><p>${element.descriptif}</p><p>${element.date}</p><input type="hidden"  value="${element.etat_tache}<input type="text" value="${element.id_liste}"><input type="button" value=delete id="supp"></div>`
                    }
                    ()=>{
                        let suppTache = document.getElementById('supp')
                        suppTache.addEventListener("click",()=>{
                            
                            test.append("idTache",encodeURIComponent(element.id))
                            fetch("class/Tache.php",{
                                method:"POST",
                                body:test
                            }).then(response=>console.log(response.json()))
                     
                        })
                    }
                }))
        })
    }
    affichageListe()
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
        })
    }
    function spantest() {
        span.addEventListener("click", () => {
            modal.style.display = "none";
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
            let idcarte = document.getElementById("idCarte")
            // prevent default action (open as link for some elements)
            event.preventDefault();
            // move dragged elem to the selected drop target
            if (event.target.className == "dropzone") {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                //   console.log(dragged.parentNode.id)


                console.log(idcarte.value)
                if (dragged.parentNode.id == encours.id) {
                    let encours = 22
                    console.log(dragged.childNodes[1].value)
                    formData.append("idCarte", encodeURIComponent(idcarte.value))
                    formData.append("idSection", encodeURIComponent(encours))
                    fetch('Class/Tache.php', {
                        method: 'POST',
                        body: formData
                    }).then((response) => response.json)
                        .then((result) => console.log(result))
                }
                else if (dragged.parentNode.id == termine.id) {
                    let finTache = 33
                    formData.append("idCarte", encodeURIComponent(idcarte.value))
                    formData.append("idSection", encodeURIComponent(finTache))
                    fetch('Class/Tache.php', {
                        method: 'POST',
                        body: formData
                    }).then((response) => response.json)
                        .then((result) => console.log(result))
                }
            }

        }, false);


    }
    
    
    draganddrop()
    affichageForm()
    addTache()
    spantest()
    closeModal()
    // getselectoption()
})