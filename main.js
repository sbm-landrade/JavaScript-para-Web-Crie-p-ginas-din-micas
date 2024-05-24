function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
    }  

//document.querySelector('.tecla_pom').onclick = tocaSomPom; selecionar somente um elemento

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // Cria uma string que representa o ID do elemento de áudio correspondente ao instrumento
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    // Define uma função para o evento de pressionar uma tecla enquanto o elemento tecla está focado
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}