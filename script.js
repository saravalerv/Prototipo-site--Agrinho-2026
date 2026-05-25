/* Ativa ou desativa o modo escuro */
function modoEscuro(){
  document.body.classList.toggle("dark");
}

/* Controla qual pergunta está aparecendo */
let perguntaAtual = 0;

/* Guarda a pontuação do usuário */
let pontuacao = 0;

/* Lista com as perguntas, respostas e índice da resposta correta */
const perguntas = [

  {
    pergunta:
    "1. Qual prática contribui para a preservação dos recursos hídricos no campo?",

    respostas:[
      "Uso consciente da água",
      "Desmatamento",
      "Queimadas ilegais"
    ],

    correta:0
  },

  {
    pergunta:
    "2. Qual tecnologia é utilizada para monitorar plantações em grandes áreas?",

    respostas:[
      "Máquina de escrever",
      "Drones agrícolas",
      "Televisão"
    ],

    correta:1
  },

  {
    pergunta:
    "3. O que significa agricultura sustentável?",

    respostas:[
      "Produzir sem preservar o meio ambiente",
      "Produzir preservando recursos naturais",
      "Aumentar queimadas"
    ],

    correta:1
  },

  {
    pergunta:
    "4. Qual recurso ajuda a economizar água na agricultura?",

    respostas:[
      "Irrigação inteligente",
      "Desperdício de água",
      "Poluição dos rios"
    ],

    correta:0
  },

  {
    pergunta:
    "5. Como a Inteligência Artificial ajuda no agronegócio?",

    respostas:[
      "Monitorando plantações e clima",
      "Destruindo lavouras",
      "Aumentando desperdícios"
    ],

    correta:0
  },

  {
    pergunta:
    "6. Qual dessas ações ajuda o meio ambiente?",

    respostas:[
      "Queimadas ilegais",
      "Preservação das florestas",
      "Poluição dos rios"
    ],

    correta:1
  },

  {
    pergunta:
    "7. Qual é um dos principais objetivos da sustentabilidade?",

    respostas:[
      "Utilizar recursos sem limites",
      "Preservar recursos para futuras gerações",
      "Aumentar o desperdício"
    ],

    correta:1
  }

];

/* Carrega a pergunta atual na tela */
function carregarPergunta(){

  document.getElementById("perguntaQuiz").innerHTML =
  perguntas[perguntaAtual].pergunta;

  document.getElementById("btn1").innerHTML =
  perguntas[perguntaAtual].respostas[0];

  document.getElementById("btn2").innerHTML =
  perguntas[perguntaAtual].respostas[1];

  document.getElementById("btn3").innerHTML =
  perguntas[perguntaAtual].respostas[2];

}

/* Verifica se a resposta escolhida está correta */
function verificarResposta(indice){

  const resultado =
  document.getElementById("resultadoQuiz");

  if(indice === perguntas[perguntaAtual].correta){

    resultado.innerHTML =
    "✅ Resposta correta!";

    pontuacao++;

  }else{

    resultado.innerHTML =
    "❌ Resposta incorreta.";

  }

  /* Aguarda 1,5 segundo e troca automaticamente */
  setTimeout(() => {

    perguntaAtual++;

    if(perguntaAtual >= perguntas.length){

      finalizarQuiz();

    }else{

      carregarPergunta();

      resultado.innerHTML = "";

    }

  }, 1500);
}

/* Mostra mensagem final do quiz */
function finalizarQuiz(){

  document.getElementById("perguntaQuiz").innerHTML =
  "🎉 Quiz Finalizado!";

  document.getElementById("resultadoQuiz").innerHTML =
  "👏 Obrigado por participar do Quiz Ambiental!<br><br>" +
  "✅ Você acertou " + pontuacao +
  " de " + perguntas.length + " perguntas.";

  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "none";
  document.getElementById("btn3").style.display = "none";

  setTimeout(() => {
    reiniciarQuiz();
  }, 6000);
}

/* Reinicia o quiz após alguns segundos */
function reiniciarQuiz(){

  perguntaAtual = 0;
  pontuacao = 0;

  document.getElementById("btn1").style.display = "inline-block";
  document.getElementById("btn2").style.display = "inline-block";
  document.getElementById("btn3").style.display = "inline-block";

  document.getElementById("resultadoQuiz").innerHTML = "";

  carregarPergunta();
}

/* Inicia o quiz ao carregar o site */
carregarPergunta();

/* Chatbot simples */
function enviarPergunta(){

  let pergunta =
  document.getElementById("pergunta").value.toLowerCase();

  let resposta = "";

  if(pergunta.includes("agua")){

    resposta =
    "💧 Economizar água é essencial para a agricultura sustentável.";

  }else if(pergunta.includes("ia")){

    resposta =
    "🤖 A Inteligência Artificial ajuda no monitoramento agrícola.";

  }else if(pergunta.includes("drone")){

    resposta =
    "🚁 Drones agrícolas ajudam no monitoramento das lavouras.";

  }else if(pergunta.includes("sustentabilidade")){

    resposta =
    "🌱 Sustentabilidade significa produzir preservando o meio ambiente.";

  }else if(pergunta.includes("agricultura")){

    resposta =
    "🌾 A agricultura moderna utiliza tecnologia para aumentar a produtividade.";

  }else{

    resposta =
    "🤖 Ainda estou aprendendo sobre o agro sustentável.";
  }

  document.getElementById("mensagemBot").innerHTML = resposta;

  document.getElementById("pergunta").value = "";
}
