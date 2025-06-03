/*let number1  = 245;
let number2 = 1200;
let soma = number1+number2
console.log("A soma é: "+soma)
console.log("---------------------")
let number4 = 5;
let number5 = 12;
let soma2 = number4*number5
console.log("a multiplicação é: "+soma2)
console.log("---------------------")
let number6 = 24;
let number7 = 4;
let soma3 = number6/number7
console.log("a divisão é: "+soma3)
console.log("----------------------")
let number9 = 232
let number10 = 32
let soma4 = number9-number10
console.log("a subtração é: "+soma4)
let Nome = prompt ("Digite seu nome:")
let salario  =  Number(prompt("Digite aqui seu salario"))
let mesestrabalhados = Number(prompt("Digite seus meses trabalhados"))
let decimo13 = salario/12*mesestrabalhados
alert( Nome+" seu decimo terceiro é: R$"+decimo13 +", Parabéns" )
salario = 500
quinze = 15/100*salario+salario
dez = 10/100*salario+salario
cinco = 5/100*salario+salario

if (salario<=500) {
    alert("parabens seu reajuste é de 15% sendo ele: " + quinze)
}
else if (salario>500 &&salario <=1000) {
    alert("parabens seu reajuste é de 10% sendo ele: "+ dez)
}
else if (salario>1000) {
    alert("parabens seu reajuste é de 5% sendo ele: "+ cinco)
}
let idade = prompt("digite aqui sua idade")
if (idade<12){
    alert("Assista conteúdo infantil") 
}
else if (idade>=12 && idade<=17){
    alert("Assista conteúdo Teen")
}
else if (idade>=18 && idade<=60){
    alert("Assista conteúdo Adulto")
}
else {
    alert("Assista conteúdo Sênior")
}
let pontos = prompt("Digite seus pontos")
if (pontos<=1000){
 alert("Seu Nível é Novato!! Bônus de +100XP")
}
else if(pontos>=1001 && pontos<=5000){
    alert("Seu Nível é Aprendiz!! Bônus de +500XP")
}
else if(pontos>=5001 && pontos<=10000){
    alert("Seu Nível é Expert!! Bônus de +1000XP")
}
else {
    alert("Seu Nível é Mestre!! Bônus de +2000XP")
}*/

let valorbasico = 25;
let valorpremium = 40;
let valorultra = 60;
let telas34 = 5;
let telasmaisde4 = 7.50; 

let tipoassinatura = prompt("Digite a sua assinatura: ")
let quantitelas = prompt ("digite a quantidade de telas que deseja: ")
if (tipoassinatura == "básico"){
    if(quantitelas >=1 && quantitelas <=2){
        alert("Seu plano terá o valor de"+valorbasico+ " R$")
    }
    else if(quantitelas >=3 && quantitelas <=4){
        alert("Seu plano terá o valor de "+(valorbasico+telas34)+" R$")
    }
    else {

    }
}
else if (tipoassinatura == premium)
 if (quantitelas >=1 && quantitelas <=2){
        alert("Seu plano terá o valor de"+valorpremium+ " R$")
    }
    else if(quantitelas >=3 && quantitelas <=4){
        alert("Seu plano terá o valor de "+(valorpremium+telas34)+" R$")
    }
    

