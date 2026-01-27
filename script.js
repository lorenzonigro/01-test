let button = document.getElementById("pulsante");
let quadrato = document.getElementById("quadrato");

button.onclick = function() {
    if (quadrato.classList.contains("bgVerde")) {
        quadrato.classList.remove("bgVerde");
        quadrato.classList.add("bgArancione");
    } else {
        quadrato.classList.remove("bgArancione");
        quadrato.classList.add("bgVerde");
    }
}

let emanuele = {
    nome: "Emanuele",
    cognome: "Matta",
    eta: 16,
    casa: "Sesto San Giovanni (MI)",
}

let campoNome = document.getElementById("nome");
let campoCognome = document.getElementById("cognome");
let campoEta = document.getElementById("eta");
let campoCasa = document.getElementById("casa");

function aggiornaDati(dati) {
    campoNome.innerText = dati.nome;
    campoCognome.innerText = dati.cognome;
    campoEta.innerText = dati.eta;
    campoCasa.innerText = dati.casa;
}

let buttonDati = document.getElementById("pulsanteDati");

let inputNome = document.getElementById("inputNome");
let inputCognome = document.getElementById("inputCognome");
let inputEta = document.getElementById("inputEta");
let inputCasa = document.getElementById("inputCasa");

buttonDati.onclick = function() {
    aggiornaDati({
        nome: inputNome.value || campoNome.innerText,
        cognome: inputCognome.value || campoCognome.innerText,
        eta: inputEta.value || campoEta.innerText,
        casa: inputCasa.value || campoCasa.innerText,
    });

    inputNome.value = "";
    inputCognome.value = "";
    inputEta.value = "";
    inputCasa.value = "";
}

aggiornaDati(emanuele);