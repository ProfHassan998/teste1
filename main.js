const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio) {
    const listaDeTeclas = document.querySelectorAll('.tecla');
}
let contador = 0;


while (contador < listaDeTeclas.length) {

    for (let contador = 0; contador < listaDeTeclas.length; contador++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`;

        tecla.onclick = function () {
            tocaSom(idAudio);
        }
        tecla.onkeydown = function (evento) {
            console.log(evento.code === 'Space')
            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('ativa');
            }
            
        }
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    }

}