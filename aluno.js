function drip(){
    var nome1 = document.querySelector("#nome");
    var nome = nome1.value;
    var disc1 = document.querySelector("#disciplina");
    var disc = disc1.value;
    var valor1 = document.querySelector("#nota1");
    var valorUm = valor1.value;
    var valor2 = document.querySelector("#nota2");
    var valorDois = valor2.value;
    var valor3 = document.querySelector("#nota3");
    var valorTres = valor3.value;

    var resultado = valorUm + valorDois + valorTres / 3   ;

    if(resultado <= 6){
        alert(nome+"Aprovado na disciplina "+ disc)
    }else if(resultado >= 4 && resultado <= 5){
        alert(nome + "em Recuperação na disciplina" + disc)
    }else if(resultado <4){
        alert(nome+"REPROVADO! na disciplina "+disc)
    }
}