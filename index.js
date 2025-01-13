var leonardo= window.document.getElementById("leonardo")
var setaDireita= window.document.getElementById ("seta-direita")
var setaEsquerda= window.document.getElementById ("seta-esquerda")
var samantha= window.document.getElementById("samantha")
var bruna= window.document.getElementById("bruna")

function rolarParaDireita(){
leonardo.style ="display:none"
bruna.style ="display:flex"
setaEsquerda.style="display:flex; margin:55px"
setaDireita.style="display:none"

}

function rolarParaEsquerda(){
    leonardo.style="display:flex"
    bruna.style="display:none"
    setaEsquerda.style= "display:none"
    setaDireita.style="display:flex; margin:55px"


}
