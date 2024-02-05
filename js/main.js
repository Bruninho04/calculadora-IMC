//dica: criar funções para cada parte do código

const formulario = document.querySelector('#formulario');

form.addEventListener('submit', function(e){//função para impedir o envio do formulario, o (e) é o evento
    e.preventDefault(); //não deixa o formulário ser enviado
    const inputPeso = e.target.querySelector('#peso');//pegando o input digitado em peso
    const inputAltura = e.target.querySelector('#altura')//pegando o input digitado em altura
    
    const peso = Number(inputPeso.value);//pega o valor de cada input
    const altura = Number(inputAltura.value);//pega o valor de cada input


    if (!peso)//se o peso for falso
    {
        setResultado('Peso Inválido', false);
        return
    }

    if (!altura)
    {
        setResultado('Altura iválida', false)
        return
    }

    const imc = getImc(peso, altura);
    const nivelImc = tabelaImc(imc)
    console.log(imc, nivelImc)
    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg, true)
});

function tabelaImc (imc)
{
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
                    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc >= 39.9)
    {
        return nivel[5]
    } 
    if  (imc >= 34.9)
    {
        return nivel[4]
    } 
    if(imc >= 29.9)
    {
        return nivel[3]
    } 
     if(imc >= 24.9)
    {
        return nivel[2]
    } 
    if(imc >= 18.5)
    {
        return nivel[1]
    }                
    if(imc < 18.5)
    {
        return nivel[0]
    } 
}

// evita-se o envio do formulário para que os dados enviados sejam mantidos

function getImc(peso, altura)
{
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}

function criaP()
{
    const p = document.createElement('p');//cria um parágrafo
    return p;
}



function setResultado (msg, isValid){//função que coloca um html dentro da div resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //zera o resultado

    
    const p = criaP();
    if (isValid){
        p.classList.add('paragrafo-resultado')
    } 
    else{
        p.classList.add('bad')
    }
        
    p.innerHTML = msg;
    resultado.appendChild(p);//insere o conteúdo de p no paárgrafo
}