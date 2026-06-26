const perguntas = [
    {
        pergunta: "1. A energia solar é considerada uma fonte de energia:",
        opcoes: [
            "Não renovável",
            "Renovável",
            "Poluente",
            "Fóssil"
        ],
        resposta: 1
    },

    {
        pergunta: "2. Qual é um dos principais benefícios da energia solar no campo?",
        opcoes: [
            "Aumentar a poluição",
            "Consumir mais combustível",
            "Reduzir os custos com energia",
            "Gastar mais água"
        ],
        resposta: 2
    },

    {
        pergunta: "3. Os painéis solares utilizam qual recurso natural para gerar energia?",
        opcoes: [
            "Vento",
            "Carvão",
            "Luz do Sol",
            "Petróleo"
        ],
        resposta: 2
    },

    {
        pergunta: "4. A utilização de energia solar contribui para:",
        opcoes: [
            "Maior emissão de gases poluentes",
            "Preservação do meio ambiente",
            "Desmatamento",
            "Aumento do desperdício"
        ],
        resposta: 1
    },

    {
        pergunta: "5. A energia solar ajuda a construir um futuro:",
        opcoes: [
            "Mais poluído",
            "Mais caro",
            "Sustentável",
            "Sem tecnologia"
        ],
        resposta: 2
    }
];

let indice = 0;
let pontos = 0;

function iniciarQuiz(){

    indice = 0;
    pontos = 0;

    mostrarPergunta();

}

function mostrarPergunta(){

    const container = document.getElementById("quiz-container");

    if(indice >= perguntas.length){

        resultado();

        return;

    }

    const atual = perguntas[indice];

    let html = `

        <div class="quiz-card">

            <h3>${atual.pergunta}</h3>

            <div class="barra">

                <div class="progresso" style="width:${((indice)/perguntas.length)*100}%"></div>

            </div>

    `;

    atual.opcoes.forEach((opcao,i)=>{

        html += `

            <button class="opcao" onclick="responder(${i})">

                ${opcao}

            </button>

        `;

    });

    html += "</div>";

    container.innerHTML = html;

}

function responder(opcao){

    if(opcao === perguntas[indice].resposta){

        pontos++;

    }

    indice++;

    mostrarPergunta();

}

function resultado(){

    const container = document.getElementById("quiz-container");

    let mensagem = "";

    if(pontos === 5){

        mensagem = "🌟 Parabéns! Você domina o assunto!";

    }

    else if(pontos >=3){

        mensagem = "👏 Muito bem! Você possui bons conhecimentos.";

    }

    else{

        mensagem = "📚 Continue estudando sobre sustentabilidade e energia solar!";

    }

    container.innerHTML = `

        <div class="resultado">

            <h2>Quiz Finalizado!</h2>

            <h1>${pontos} / ${perguntas.length}</h1>

            <p>${mensagem}</p>

            <button onclick="iniciarQuiz()">

                Refazer Quiz

            </button>

        </div>

    `;

}
