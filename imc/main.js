function calculoimc(peso, altura){
    var imc = peso / (altura*altura)
    return imc
}

var botao = document.getElementById('botao');
botao.addEventListener("click", clicar);
function clicar(){
    var pes = document.getElementById('ipeso')

    var alt = document.getElementById('ialtura')

    var pe = Number(pes.value);

    var al = Number(alt.value);

    var res = document.getElementById('res');

var imcpessoa = calculoimc(pe, al );

   res.innerHTML=`O seu IMC é ${Math.round(imcpessoa) } <br>`

   if (imcpessoa < 18.5){
    res.innerHTML += `Magreza`
}

else if (imcpessoa >= 18.5 && imcpessoa <=24.9){
    res.innerHTML += `Peso Normal`
}

else if (imcpessoa >= 25 && imcpessoa <=29.9){
    res.innerHTML += `Sobrepeso`
}

else if (imcpessoa >= 30 && imcpessoa <=34.9){
    res.innerHTML += `Obesidade grau I`
}

else if (imcpessoa >= 35 && imcpessoa <=39.9){
    res.innerHTML += `Obesidade grau II`
}

else if (imcpessoa >= 40){
    res.innerHTML += `Obesidade grau III`
}
}




