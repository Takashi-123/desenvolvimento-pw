var btn = document.getElementById('btn-div');
var conteiner = document.getElementById('.conteiner');
btn.addEventListener('click', function() {

    if(conteiner.style.display === 'block') {
        conteiner.style.display = 'none';
    } else {
        conteiner.style.display = 'block';
    }
});

var capturando = "";

function capturar () {
    document.getElementById('ma').style.display = 'block';

        capturadno = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = capturadno;
    document.getElementById('btn-div').value = "prosseguir";

}