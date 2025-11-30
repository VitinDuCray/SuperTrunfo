// js/script.js - Versão com Pausa, Sons e Lógica Aprimorada

// =========================================================================
// PONTO DE ENTRADA DA APLICAÇÃO
// =========================================================================
window.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

// =========================================================================
// CONFIGURAÇÃO DOS EVENTOS
// =========================================================================
function setupEventListeners() {
    document.getElementById('btn-jogar').addEventListener('click', iniciarJogo);
    document.getElementById('btn-pausar').addEventListener('click', togglePause);
    document.getElementById('btn-proxima-rodada').addEventListener('click', sortearCartas);
}

// =========================================================================
// ESTADO E LÓGICA DO JOGO (GAME STATE & LOGIC)
// =========================================================================
let monteJogador = [];
let monteMaquina = [];
let cartaJogador;
let cartaMaquina;
let jogoPausado = false; // Novo estado para controlar a pausa

// Funções de som
const somVitoria = document.getElementById('sound-win');
const somDerrota = document.getElementById('sound-lose');

function tocarSom(som) {
    som.currentTime = 0; // Reinicia o som para o início
    som.play();
}

function togglePause() {
    jogoPausado = !jogoPausado; // Inverte o estado de pausa
    const overlay = document.getElementById('pause-overlay');
    const btnPausar = document.getElementById('btn-pausar');

    if (jogoPausado) {
        overlay.classList.remove('hidden');
        btnPausar.textContent = 'Retomar';
    } else {
        overlay.classList.add('hidden');
        btnPausar.textContent = 'Pausar';
    }
}

function iniciarJogo() {
    const btnJogar = document.getElementById('btn-jogar');
    const btnPausar = document.getElementById('btn-pausar');
    const btnProximaRodada = document.getElementById('btn-proxima-rodada');

    let baralhoEmbaralhado = [...baralho].sort(() => Math.random() - 0.5);

    const metade = Math.ceil(baralhoEmbaralhado.length / 2);
    monteJogador = baralhoEmbaralhado.slice(0, metade);
    monteMaquina = baralhoEmbaralhado.slice(metade);

    btnJogar.disabled = true;
    btnPausar.disabled = false; // Habilita o botão de pausar
    btnProximaRodada.disabled = false;

    sortearCartas();
    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById('placar-jogador').textContent = `Jogador: ${monteJogador.length}`;
    document.getElementById('placar-maquina').textContent = `Máquina: ${monteMaquina.length}`;
}

function sortearCartas() {
    if (jogoPausado) return; // Não faz nada se o jogo estiver pausado

    if (monteJogador.length === 0 || monteMaquina.length === 0) {
        fimDeJogo();
        return;
    }

    cartaJogador = monteJogador[0];
    cartaMaquina = monteMaquina[0];

    document.getElementById('resultado').textContent = "Escolha um atributo";
    document.getElementById('btn-proxima-rodada').disabled = true;

    exibirCarta(document.getElementById('carta-jogador'), cartaJogador, true);

    const cartaMaquinaEl = document.getElementById('carta-maquina');
    cartaMaquinaEl.innerHTML = "";
    cartaMaquinaEl.classList.add('verso');
}

function exibirCarta(elemento, carta, ehJogador) {
    elemento.classList.remove('verso');
    let html = `<div class="carta-nome">${carta.nome}</div>`;
    html += `<img src="${carta.imagem}" class="carta-imagem">`;
    html += '<div class="carta-atributos"><ul>';

    for (let atributo in carta.atributos) {
        // Apenas adiciona o evento de clique se for o jogador e o jogo não estiver pausado
        if (ehJogador) {
            html += `<li onclick="comparar('${atributo}')">${atributo}: ${carta.atributos[atributo]}</li>`;
        } else {
            html += `<li>${atributo}: ${carta.atributos[atributo]}</li>`;
        }
    }

    html += '</ul></div>';
    elemento.innerHTML = html;
}

function comparar(atributoSelecionado) {
    if (jogoPausado) return; // Bloqueia a ação se o jogo estiver pausado

    const resultadoEl = document.getElementById('resultado');
    const btnProximaRodada = document.getElementById('btn-proxima-rodada');

    exibirCarta(document.getElementById('carta-maquina'), cartaMaquina, false);

    let valorJogador = cartaJogador.atributos[atributoSelecionado];
    let valorMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorJogador > valorMaquina) {
        resultadoEl.textContent = `Você venceu! ${valorJogador} > ${valorMaquina}`;
        tocarSom(somVitoria);
        monteJogador.push(monteMaquina.shift());
        monteJogador.push(monteJogador.shift());
    } else if (valorMaquina > valorJogador) {
        resultadoEl.textContent = `Você perdeu! ${valorJogador} < ${valorMaquina}`;
        tocarSom(somDerrota);
        monteMaquina.push(monteJogador.shift());
        monteMaquina.push(monteMaquina.shift());
    } else {
        resultadoEl.textContent = "Empate!";
        monteJogador.push(monteJogador.shift());
        monteMaquina.push(monteMaquina.shift());
    }

    atualizarPlacar();
    btnProximaRodada.disabled = false;

    // Remove o onclick dos atributos para evitar jogada dupla
    const atributosLi = document.getElementById('carta-jogador').querySelectorAll('.carta-atributos li');
    atributosLi.forEach(li => li.onclick = null);
}

function fimDeJogo() {
    const btnJogar = document.getElementById('btn-jogar');
    const btnPausar = document.getElementById('btn-pausar');
    const btnProximaRodada = document.getElementById('btn-proxima-rodada');

    const mensagemFinal = monteJogador.length > 0 ? "Fim de jogo! Parabéns, você venceu!" : "Fim de jogo! Você perdeu.";
    document.getElementById('resultado').textContent = mensagemFinal;

    btnProximaRodada.disabled = true;
    btnPausar.disabled = true;
    btnJogar.disabled = false;
    btnJogar.textContent = "Jogar Novamente";
    // Remove o listener antigo para evitar múltiplos inícios
    btnJogar.replaceWith(btnJogar.cloneNode(true));
    document.getElementById('btn-jogar').addEventListener('click', () => window.location.reload());
}