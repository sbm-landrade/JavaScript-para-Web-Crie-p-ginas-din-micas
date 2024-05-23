function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; selecionar somente um elemento

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//lista de repetição (enquanto)
while (contador < listaDeTeclas.length) {

    const tecla  = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
   
   console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}