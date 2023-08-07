var nota1 = 10;
var nota2 = 10;
var nota3 = 10;
var nota4 = 10;

var media= (nota1+nota2+nota3+nota4)/4;

if(media == 0) {
    console.log("você zerou a prova");
}
    else if (media >= 0.1 && media < 3){
    console.log("caramba deu ruim voce obteve media " + media + " estude mais e tente novamente");
}
    else if (media >= 3.1 && media <5.9){
    console.log("você obeteve a media " + media + "falta pouco para a media");
}
   
   else if (media >= 6 && media <7){
    console.log("voce esta na media com a nota " + media);
}
else if (media >= 7.1 && media <9.9 ){
    console.log("notão sua media é " + media);
}
else if (media ==10){
    console.log("hoje é seu aniversario? porque voçê esta de parabens media 10 " + media);
}
