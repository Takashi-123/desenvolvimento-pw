
function onClickEntrar(meuEvento) {
    meuEvento.preventDefault();

    let tagUsuario = document.getElementById("form-e-javascript-usuario");
    let tagSenha = document.getElementById("form-e-javascript-senha");
    let tagResultado = document.getElementById("form-e-javascript-resultado");


    let resultado = tagUsuario.value + "<br>" +
        tagSenha.value + "<br>";
    tagResultado.innerHTML = resultado;
}


let input = document.getElementById("action1")

//console.log(conteiner)
//console.log(input)

button.addeventiListener("Click")
button.addEventListener("Click", function() {
    var conteiner = document.getElementById("conteiner")

    if(conteiner.style.diplay === "none"){
        conteiner.style.diplay = "block";
    } else{
        conteiner.style.diplay = "none"
    }

})