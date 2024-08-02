const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual foi um dos principais efeitos sociais da Primeira Guerra Mundial nas sociedades europeias?",
        alternativas: [
            {
                texto: "A) A Primeira Guerra Mundial causou uma grande mobilização de mulheres para omercado de trabalho, já que muitos homens estavam na frente de batalha, o que resultouem mudanças significativas nas normas de gênero e no papel das mulheres na sociedades",
                afirmacao: "(Explicação: Durante a Primeira Guerra Mundial, as mulheres desempenharam um papel crucial em fábricas e outros setores, o que contribuiu para mudanças duradouras nas expectativas e nas oportunidades de trabalho para as mulheres.) "
            },
            {
                texto: "B) A guerra levou à estabilização das normas sociais e ao fortalecimento das instituições tradicionais, sem grandes mudanças nas estruturas de gênero ou na mobilidade social.",
                afirmacao: "(Explicação: A Primeira Guerra Mundial, na verdade, provocou mudanças significativas nas normas sociais e nas estruturas de gênero, ao contrário da estabilização, pois muitos aspectos da sociedade foram transformados.)"
            }
        ]
    },
    {
        enunciado: "Como a Segunda Guerra Mundial impactou a economia global e o comércio internacional?",
        alternativas: [
            {
                texto: "A) A Segunda Guerra Mundial causou uma grande destruição das infraestruturas eindústrias, levando a uma recessão global profunda e a uma redução significativa nocomércio internacional.",
                afirmacao: "(Explicação: A Segunda Guerra Mundial resultou na destruição de muitos centrosindustriais e infraestruturas, o que levou a uma recessão econômica global e a umadiminuição temporária no comércio internacional.)"
            },
            {
                texto: "B) A guerra estimulou o crescimento econômico e o comércio internacional, com areconstrução pós-guerra levando ao desenvolvimento de novas economias e à expansãodos mercados globais.",
                afirmacao: "(Explicação: Após a Segunda Guerra Mundial, a reconstrução, especialmente com oPlano Marshall, ajudou a estimular o crescimento econômico e o comérciointernacional, promovendo a recuperação e expansão das economias.)"
            }
        ]
    },
    {
        enunciado: "Qual foi uma das principais consequências sociais da criação da Organização dasNações Unidas (ONU) após a Segunda Guerra Mundial?",
        alternativas: [
            {
                texto: "A) A criação da ONU levou a uma maior cooperação internacional e à implementação demedidas para promover os direitos humanos, prevenir futuros conflitos e melhorar ascondições de vida globalmente.",
                afirmacao: "(Explicação: A ONU foi criada para promover a paz e a cooperação internacional,estabelecer direitos humanos e desenvolver estratégias para prevenir futurosconflitos e melhorar as condições de vida.)"
            },
            {
                texto: "B) A ONU teve um impacto limitado na cooperação internacional e na promoção dosdireitos humanos, com pouca influência nas questões de conflitos e desenvolvimento global.",
                afirmacao: "(Explicação: Na verdade, a ONU desempenha um papel crucial na promoção dacooperação internacional e dos direitos humanos, com uma influência significativaem questões de conflitos e desenvolvimento global.)"
            }
        ]
    },
    {
        
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
