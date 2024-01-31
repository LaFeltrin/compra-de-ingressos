function comprar(){
    let quantidade = document.getElementById('qtd').value;
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidadeInferior = document.getElementById('qtd-inferior').textContent;
    let quantidadeSuperior = document.getElementById('qtd-superior').textContent;
    let quantidadePista = document.getElementById('qtd-pista').textContent;



    if(tipo == "inferior"){
        let inferiorRestante = parseInt(quantidadeInferior) - parseInt(quantidade);
        if (inferiorRestante >=0) {
            document.getElementById('qtd-inferior').textContent = inferiorRestante;
        } else {
            alert('Você selecionou uma quantidade maior de cadeira inferior do que temos disponível');
        }
        
    } else if(tipo == "superior"){
            let superiorRestante = parseInt(quantidadeSuperior) - parseInt(quantidade);
            if (superiorRestante >=0) {
                document.getElementById('qtd-superior').textContent = superiorRestante;
            } else {
                alert('Você selecionou uma quantidade maior de Cadeira Superior do que temos disponível');
            }
    } else if(tipo == "pista"){
        let pistaRestante = parseInt(quantidadePista) - parseInt(quantidade);
        if (pistaRestante >=0) {
            document.getElementById('qtd-pista').textContent = pistaRestante;
        } else {
            alert('Você selecionou uma quantidade maior de ingressos pista do que temos disponível');
        }
}
}

/* RESOLUÇÃO FEITA PELOS PROFESSORES DO CURSO

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
} */
