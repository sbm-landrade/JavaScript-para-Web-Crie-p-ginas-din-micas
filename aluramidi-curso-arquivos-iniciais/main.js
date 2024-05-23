// SomPOM-----------------------------
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; selecionar somente um elemento

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom 