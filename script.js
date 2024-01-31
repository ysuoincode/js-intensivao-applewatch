// Objeto

const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');


const verdeCipreste = {
    nome:'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

// Arrays

const opcoesCores = [verdeCipreste, meiaNoite, estelar, azulInverno, rosaClaro];
const opcoesTamanho = ['41mm', '45mm'];


let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;


function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name ="opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + imagemSelecionada + ".jpeg";
}


function trocarTamanho() {
// atualizar variável de controle do tamanho da caixa
     const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id 
     tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

// mudar o título do produto
     tituloProduto.innerText = 'Pulseira loop esportiva azul-inverno para caixa de ' + opcoesTamanho[tamanhoSelecionado] ;

//mudar o tamanho da imagem de acordo com a opção
    if(opcoesTamanho[tamanhoSelecionado] === '41mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    };
}

function trocarCor(){
//atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idOpcaoSelecionada.charAt(0);
//trocar titulo da página
    tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado] ;
//trocar nome da cor
    
//trocar imagens das miniaturas exibidas

//trocar imagens de visualização 


}