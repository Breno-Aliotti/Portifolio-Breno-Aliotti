// src/components/ProjectScreen.tsx
import { useMemo } from "react";
import type { ProjetoId } from "../types";
import Navbar from "./Navbar";

type ProjectScreenProps = {
  projeto: Exclude<ProjetoId, null>;
  onBack: () => void;
};

type ProjectInfo = {
  title: string;
  subtitle?: string;
  description: string;
  features: { title: string; description: string }[];
  stack: string;
  projectType: string;
  githubUrl?: string;
};

// Dados dos projetos
const PROJECTS: Record<Exclude<ProjetoId, null>, ProjectInfo> = {
  "projeto-1": {
    title: "Relatório ALV Interativo para Gerenciamento de Voos",
    subtitle:
      "Relatório ALV em SAP ABAP com foco em usabilidade e interação em tempo real",
    description:
      "Este projeto é um relatório ALV que utiliza programação orientada a objetos para criar uma experiência de usuário interativa. A aplicação exibe dados de voos e permite sua manipulação em tempo real, focando em usabilidade e eficiência.",
    features: [
      {
        title: "ALV Grid Principal",
        description:
          "Utilização do CL_GUI_ALV_GRID para exibir um grid principal com dados consolidados de voos, combinando informações de múltiplas tabelas.",
      },
      {
        title: "Feedback Visual (Semáforo de Ocupação)",
        description:
          "Ícone de status baseado na taxa de ocupação das poltronas: verde (≥ 95%), amarelo (entre 90% e 95%) e vermelho (< 90%). Isso facilita a leitura rápida da situação de cada voo.",
      },
      {
        title: "Popup Interativo com Segundo ALV",
        description:
          "Ao selecionar um voo, é aberto um popup com um segundo ALV exibindo as refeições disponíveis para a companhia aérea selecionada.",
      },
      {
        title: "Gerenciamento de Eventos OO",
        description:
          "Uso de classes locais e handlers de eventos para capturar ações do usuário, como cliques em botões e duplo clique nas linhas do ALV.",
      },
      {
        title: "Atualização em Tempo Real",
        description:
          "Após a seleção no popup, o ALV principal é atualizado dinamicamente com as novas informações, sem necessidade de recarregar o relatório por completo.",
      },
    ],
    stack: "SAP ABAP · CL_GUI_ALV_GRID · Programação Orientada a Objetos",
    projectType: "Relatório interativo interno para gerenciamento de voos",
  },

  "projeto-2": {
    title: "Previsão de Demanda Logística para Operador 3PL (DataLog)",
    subtitle:
      "Modelo de Regressão Linear para prever pedidos diários e evitar rupturas de estoque",
    description:
      "O projeto simula o ambiente da DataLog, um operador logístico 3PL que atende grandes varejistas, indústrias e e-commerces no Brasil. O objetivo é prever a quantidade de pedidos atendidos por dia, reduzindo falhas de atendimento, rupturas de estoque e custos operacionais, principalmente em períodos de alta demanda (como Black Friday e Natal). Para isso, foi desenvolvida uma pipeline completa em Python, desde a preparação dos dados até a avaliação de um modelo de Regressão Linear.",
    features: [
      {
        title: "Objetivo de Negócio",
        description:
          "Prever a quantidade diária de pedidos atendidos pela operação logística, identificar fatores que influenciam a demanda (estoque, promoções, sazonalidade, custos) e antecipar cenários de estoque zerado para apoiar o planejamento de estoque e recursos.",
      },
      {
        title: "Coleta e Preparação dos Dados",
        description:
          "Uso de um dataset CSV com dados sintéticos gerados por IA, representando o histórico da DataLog de 2010 a 2024. Leitura com pandas, inspeção de tipos, verificação de consistência e checagem de valores ausentes para garantir a qualidade da base.",
      },
      {
        title: "Análise Exploratória (EDA)",
        description:
          "Exploração de variáveis-chave (Estoque_Inicial, Estoque_Final, Pedidos_Recebidos, Lead_Time, Custo_Estoque) com boxplots e histogramas, identificação de outliers com Z-score e IQR e análise do impacto de eventos promocionais (Black Friday, Natal, Dia das Mães, etc.) na demanda.",
      },
      {
        title: "Engenharia de Atributos e Pré-processamento",
        description:
          "Aplicação de One-Hot-Encoding para variáveis categóricas (Centros de Distribuição, SKUs, tipos de eventos promocionais), criação de flags como Estoque_Zerado e Tem_Custo_Estoque, transformação logarítmica (log1p) em Estoque_Final e Custo_Estoque, extração de dia/mês/ano da data e normalização de variáveis contínuas com StandardScaler.",
      },
      {
        title: "Seleção de Variáveis e Correlação",
        description:
          "Cálculo da matriz de correlação para reduzir multicolinearidade, removendo variáveis com correlação absoluta acima de 0,7. Exemplos: remoção de Tem_Custo_Estoque por correlação quase perfeita com Estoque_Zerado e de Custo_Estoque em favor de Estoque_Final, mais interpretável para o negócio.",
      },
      {
        title: "Modelagem Preditiva e Validação",
        description:
          "Divisão treino/teste (80% / 20%) com train_test_split e treinamento de um modelo de Regressão Linear usando scikit-learn. Avaliação com validação cruzada K-Fold (k=5) para medir estabilidade e capacidade de generalização do modelo.",
      },
      {
        title: "Insights de Negócio",
        description:
          "Eventos promocionais (especialmente Black Friday e Natal) elevam significativamente o volume de pedidos. Foram identificados diversos momentos de estoque zerado, evidenciando perda de vendas, além de forte correlação entre estoque final, custo de estoque e volume de pedidos, mostrando o impacto direto das decisões de estoque no nível de serviço.",
      },
      {
        title: "Resultados do Modelo",
        description:
          "O modelo alcançou R² = 0,911, explicando cerca de 91% da variância dos dados. O RMSE médio na validação cruzada foi de aproximadamente 66,5 pedidos (≈ 7,68% da média de pedidos) e o MAE de 46,1 pedidos (≈ 5,20% da média), indicando boa capacidade preditiva para uso em planejamento logístico.",
      },
      {
        title: "Aplicações na Operação",
        description:
          "Possibilita criar alertas preditivos de ruptura de estoque, planejar antecipadamente datas promocionais (estoque, turnos e capacidade operacional) e alimentar dashboards gerenciais para apoiar decisões diárias de logística e supply chain.",
      },
    ],
    stack:
      "Python · pandas · numpy · scipy · scikit-learn · matplotlib · seaborn",
    projectType:
      "Modelo de machine learning para previsão de demanda e planejamento logístico",
    githubUrl:
      "https://github.com/Breno-Aliotti/Projeto-Dados-Previs-o-de-Demanda-e-Otimiza-o-Log-stica/blob/main/Projetodados.py/projeto.py/dadosfinal.py/projeto.ipynb",
  },
};

function ProjectScreen({ projeto, onBack }: ProjectScreenProps) {
  const project = PROJECTS[projeto];

  // Configuração aleatória da animação dos pontinhos do fundo
  const dotsAnimation = useMemo(
    () => ({
      delay: -Math.random() * 40,
      duration: 30 + Math.random() * 20,
    }),
    []
  );

  // Função usada pela Navbar nesta tela (sem "contato")
  function handleNavigate(sectionId: "sobre" | "projetos") {
    onBack();

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = `#${sectionId}`;
      }
    }, 0);
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#150018] via-[#1f0228] to-[#050008] text-zinc-50 overflow-hidden">
      {/* Fundo de pontinhos animados */}
      <div
        className="pointer-events-none absolute inset-0 bg-dots opacity-40 animate-dots"
        style={{
          animationDelay: `${dotsAnimation.delay}s`,
          animationDuration: `${dotsAnimation.duration}s`,
        }}
      />

      <div className="relative z-10">
        <Navbar onNavigate={handleNavigate} />

        <main className="max-w-5xl mx-auto px-4 py-10 md:py-16">
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-pink-400 transition-colors"
          >
            <span className="text-lg">←</span>
            <span>Voltar para os projetos</span>
          </button>

          <div className="bg-black/90 border border-pink-600/40 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(236,72,153,0.4)] grid lg:grid-cols-[minmax(0,1.6fr),minmax(0,1.2fr)] gap-10">
            {/* Lado esquerdo: texto */}
            <div>
              

              <h1 className="text-2xl md:text-3xl font-semibold mb-3">
                {project.title}
              </h1>

              {project.subtitle && (
                <p className="text-sm text-pink-200 mb-2 md:mb-3">
                  {project.subtitle}
                </p>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs md:text-sm text-pink-300 hover:text-pink-400 underline decoration-pink-500/60 decoration-2 mb-4"
                >
                  Link para o projeto no GitHub
                </a>
              )}

              <p className="text-sm md:text-base text-zinc-200 leading-relaxed mb-6">
                {project.description}
              </p>

              <div>
                <h2 className="text-sm font-semibold text-zinc-100 mb-3 uppercase tracking-[0.16em]">
                  Funcionalidades implementadas
                </h2>
                <ul className="space-y-3 text-sm text-zinc-300">
                  {project.features.map((feature) => (
                    <li key={feature.title} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-zinc-50">
                          {feature.title}
                        </p>
                        <p className="text-zinc-300">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Lado direito: imagens (somente projeto-1 por enquanto) */}
            <div className="space-y-6">
              {projeto === "projeto-1" && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm font-medium text-zinc-200 mb-2">
                      Tela de seleção de companhia aérea
                    </p>
                    <div className="relative w-full aspect-[16/9] rounded-2xl border border-pink-500/40 bg-black/60 flex items-center justify-center overflow-hidden">
                      <img
                        src="/Tela de seleção de companhia aérea.png"
                        alt="Tela de seleção de companhia aérea"
                        className="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-zinc-200 mb-2">
                      Tela ALV após seleção de companhia
                    </p>
                    <div className="relative w-full aspect-[16/9] rounded-2xl border border-pink-500/40 bg-black/60 flex items-center justify-center overflow-hidden">
                      <img
                        src="/Tela ALV após seleção de companhia.png"
                        alt="Tela ALV após seleção de companhia"
                        className="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-zinc-200 mb-2">
                      Tela de seleção de refeição
                    </p>
                    <div className="relative w-full aspect-[16/9] rounded-2xl border border-pink-500/40 bg-black/60 flex items-center justify-center overflow-hidden">
                      <img
                        src="/Tela de seleção de refeição.png"
                        alt="Tela de seleção de refeição"
                        className="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-zinc-200 mb-2">
                      ALV com refeições adicionadas
                    </p>
                    <div className="relative w-full aspect-[16/9] rounded-2xl border border-pink-500/40 bg-black/60 flex items-center justify-center overflow-hidden">
                      <img
                        src="/ALV com refeições adicionadas.png"
                        alt="ALV com refeições adicionadas"
                        className="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProjectScreen;