// src/components/Navbar.tsx
import type { MouseEvent } from "react";

type SectionId = "sobre" | "projetos";

type NavbarProps = {
  // Se onNavigate for passado, a navegação é controlada via JS
  // (usado na tela de projeto). Se não for passado, os links funcionam
  // como âncoras normais (usado na home).
  onNavigate?: (sectionId: SectionId) => void;
};

function Navbar({ onNavigate }: NavbarProps) {
  function handleClick(
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId
  ) {
    if (!onNavigate) return; // na home, deixa o link funcionar normal
    event.preventDefault(); // na tela de projeto, evitamos o comportamento padrão
    onNavigate(sectionId);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-pink-500/15 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#sobre"
            onClick={
              onNavigate
                ? (e) => handleClick(e, "sobre")
                : undefined
            }
            className="px-3 py-1 rounded-full text-zinc-300 hover:text-pink-400 hover:bg-pink-500/10 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#projetos"
            onClick={
              onNavigate
                ? (e) => handleClick(e, "projetos")
                : undefined
            }
            className="px-3 py-1 rounded-full text-zinc-300 hover:text-pink-400 hover:bg-pink-500/10 transition-colors"
          >
            Projetos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;