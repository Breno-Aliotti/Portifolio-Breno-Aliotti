import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import PortfolioContent from "./components/PortfolioContent";
import ProjectScreen from "./components/ProjectScreen";
import type { ProjetoId } from "./types";

function App() {
  const [projetoSelecionado, setProjetoSelecionado] =
    useState<ProjetoId>(null);

  // Configuração aleatória da animação dos pontinhos do fundo da HOME
  const dotsAnimation = useMemo(
    () => ({
      delay: -Math.random() * 40, // começa em um ponto aleatório da timeline (até 40s pra trás)
      duration: 30 + Math.random() * 20, // duração entre 30s e 50s
    }),
    []
  );

  // Se algum projeto estiver selecionado, mostra somente a tela de projeto
  if (projetoSelecionado) {
    return (
      <ProjectScreen
        projeto={projetoSelecionado as Exclude<ProjetoId, null>}
        onBack={() => setProjetoSelecionado(null)}
      />
    );
  }

  // Caso contrário, mostra o portfólio
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#150018] via-[#1f0228] to-[#050008] text-zinc-50 overflow-x-hidden">
      {/* Fundo de pontinhos animados com delay/duração aleatórios */}
      <div
        className="pointer-events-none absolute inset-0 bg-dots opacity-40 animate-dots"
        style={{
          animationDelay: `${dotsAnimation.delay}s`,
          animationDuration: `${dotsAnimation.duration}s`,
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <PortfolioContent
          onSelectProject={(id) => setProjetoSelecionado(id)}
        />
      </div>
    </div>
  );
}

export default App;