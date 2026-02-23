// src/components/PortfolioContent.tsx
import { type ReactNode } from "react";
import type { ProjetoId } from "../types";
import { FiMail, FiMapPin } from "react-icons/fi"; // <-- IMPORT DOS ÍCONES

type PortfolioContentProps = {
  onSelectProject: (id: Exclude<ProjetoId, null>) => void;
};

/* ---------- COMPONENTE DE TÍTULO DE SEÇÃO ---------- */
function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <h2 className="text-2xl md:text-3xl font-semibold">{children}</h2>
      <div className="h-[3px] flex-1 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500" />
    </div>
  );
}

/* ---------- HERO / SOBRE ---------- */
function Hero() {
  return (
    <section
      id="sobre"
      className="max-w-6xl mx-auto px-4 pt-16 pb-20 lg:pb-24 scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
        {/* Coluna texto */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5">
            Breno Aliotti
          </h1>

          <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-3 max-w-xl">
            Sou formado em Análise e Desenvolvimento de
            Sistemas. Atualmente estou cursando Big Data e Inteligência Analítica com previsão
            de formatura para 07/2028.
          </p>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-3 max-w-xl">
            Tenho facilidade com desenvolvimento de sistemas e análise de
            dados. Possuo conhecimento em Help Desk, como remanejamento de
            máquinas, manutenção de hardware, manutenção corretiva e
            preventiva, atendimento ao usuário presencial e remoto, configuração
            de máquinas e instalação de softwares.
          </p>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6 max-w-xl">
            Estou em busca de uma vaga de estágio/trainee na área de tecnologia
            para iniciar minha carreira.
          </p>

          {/* Ver apenas o CV */}
          <div className="flex flex-wrap items-center gap-4 mb-7">
            <a
              href="/CV-Breno-Aliotti.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-zinc-700/80 bg-zinc-900/60 text-zinc-200 text-sm font-medium hover:border-pink-400 hover:text-pink-300 transition-colors"
            >
              Ver currículo 
            </a>
          </div>
        </div>

        {/* Coluna da foto + contatos */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="space-y-4 text-center md:text-right">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2rem] bg-gradient-to-b from-pink-500/20 via-zinc-900/40 to-pink-500/5 border border-pink-500/40 shadow-[0_0_80px_rgba(236,72,153,0.35)] overflow-hidden">
              <img
                src="/fotodeperfil.jpg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>

            {/* LinkedIn, GitHub, Gmail, Localização */}
            <div className="flex flex-col items-center md:items-end gap-2 text-xs md:text-sm text-zinc-300">
              {/* Linha com apenas os ícones do LinkedIn e GitHub */}
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/breno-aliotti/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform hover:-translate-y-0.5"
                >
                  <img
                    src="/linkedinlogo.png"
                    alt="LinkedIn"
                    className="w-6 h-6 object-contain"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Breno-Aliotti"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform hover:-translate-y-0.5"
                >
                  <img
                    src="/github_logo_.webp"
                    alt="GitHub"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>

              {/* Gmail com ícone (react-icons) */}
              <a
                
                className="flex items-center gap-2 text-zinc-200 hover:text-pink-300 transition-colors"
              >
                <FiMail className="w-4 h-4" />
                <span>aliottibreno@gmail.com</span>
              </a>

              {/* Localização com ícone (react-icons) */}
              <div className="flex items-center gap-2 text-zinc-400">
                <FiMapPin className="w-4 h-4" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TECNOLOGIAS ---------- */

const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "SQL",
  "Node.js",
  "SAP ABAP",
  "React",
];

function TechStrip() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="text-center mb-4">
        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
          Tecnologias
        </p>
        <p className="text-sm text-zinc-400"></p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {tecnologias.map((tec) => (
          <span
            key={tec}
            className="px-4 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/70 text-xs md:text-sm text-zinc-200 hover:border-pink-500/70 hover:text-pink-300 transition-colors"
          >
            {tec}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- SEÇÃO DE PROJETOS ---------- */
function ProjectsSection({
  onSelectProject,
}: {
  onSelectProject: (id: Exclude<ProjetoId, null>) => void;
}) {
  return (
    <section
      id="projetos"
      className="max-w-6xl mx-auto px-4 pb-16 scroll-mt-24"
    >
      <div className="bg-black/90 border border-zinc-800 rounded-3xl px-6 md:px-10 py-8 md:py-10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        <SectionTitle>Projetos</SectionTitle>

        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onSelectProject("projeto-1")}
            className="group text-left bg-zinc-950/90 border border-zinc-800 rounded-2xl p-4 hover:border-pink-500 hover:-translate-y-1 transition-all h-full"
          >
            <h3 className="font-semibold text-zinc-50 mb-1">
              Projeto ABAP
            </h3>
            <p className="text-sm text-zinc-400 mb-3">
              Relatório ALV Interativo para Gerenciamento de Voos
            </p>
            <span className="text-xs text-pink-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Abrir projeto <span>→</span>
            </span>
          </button>

          <button
            onClick={() => onSelectProject("projeto-2")}
            className="group text-left bg-zinc-950/90 border border-zinc-800 rounded-2xl p-4 hover:border-pink-500 hover:-translate-y-1 transition-all h-full"
          >
            <h3 className="font-semibold text-zinc-50 mb-1">
              Projeto Python
            </h3>
            <p className="text-sm text-zinc-400 mb-3">
              Projeto focado em ciência de dados aplicada à logística, demonstrando habilidades em modelagem preditiva, 
              tratamento de dados e geração de insights de negócio a partir de dados históricos.
            </p>
            <span className="text-xs text-pink-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Abrir projeto <span>→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPONENTE PRINCIPAL DE CONTEÚDO ---------- */

function PortfolioContent({ onSelectProject }: PortfolioContentProps) {
  return (
    <main className="pb-20">
      <Hero />
      <TechStrip />
      <ProjectsSection onSelectProject={onSelectProject} />
    </main>
  );
}

export default PortfolioContent;