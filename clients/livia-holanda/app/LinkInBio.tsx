'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const WHATSAPP = 'https://wa.me/5588988438114';
const MAPS =
  'https://www.google.com/maps/search/?api=1&query=Rua+Vereador+Raimundo+Te%C3%B3filo+Freire%2C+770%2C+S%C3%A3o+Vicente%2C+Tabuleiro+do+Norte+-+CE';
const EMAIL = 'mailto:lholandaadvocacia@gmail.com';
const INSTAGRAM = 'https://instagram.com/liviaholanda_advogada';

const TAGLINE_WORDS = ['Compromisso,', 'estratégia', 'e', 'excelência'];

type Area = {
  num: string;
  name: string;
  quote: string;
  chips: string[];
};

const AREAS: Area[] = [
  {
    num: 'I.',
    name: 'Direito de Família',
    quote: 'Proteção dos direitos e equilíbrio familiar.',
    chips: ['Pensão alimentícia', 'Guarda', 'Divórcio', 'União estável', 'Visitas'],
  },
  {
    num: 'II.',
    name: 'Direito Civil',
    quote: 'Segurança jurídica nas questões do cotidiano.',
    chips: ['Contratos', 'Cobranças', 'Indenizações', 'Responsabilidade civil', 'Conflitos patrimoniais'],
  },
  {
    num: 'III.',
    name: 'Direito Criminal',
    quote: 'Seriedade e discrição em todas as fases.',
    chips: ['Inquéritos', 'Audiências', 'Defesas'],
  },
  {
    num: 'IV.',
    name: 'Direito Previdenciário',
    quote: 'Acesso aos seus direitos junto ao INSS.',
    chips: ['Aposentadoria', 'Auxílio-doença', 'Salário-maternidade', 'Pensão por morte', 'Revisões'],
  },
];

const IgIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export default function LinkInBio() {
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [sheetOpen]);

  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSheetOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sheetOpen]);

  return (
    <>
      <main className="page">
        <span className="corner tl" aria-hidden />
        <span className="corner tr" aria-hidden />
        <span className="corner bl" aria-hidden />
        <span className="corner br" aria-hidden />

        <Image
          className="lockup"
          src="/logo-lockup.png"
          alt="Lívia Holanda · Advocacia e Assessoria Jurídica"
          width={1024}
          height={683}
          priority
        />

        <div className="ornament" aria-hidden>
          <span className="lozenge" />
        </div>

        <p className="tagline" aria-label="Compromisso, estratégia e excelência">
          {TAGLINE_WORDS.map((word, i) => (
            <span className="w" key={i}>
              {word}
            </span>
          ))}
        </p>
        <p className="tagline-caps">em defesa dos seus direitos</p>

        <nav className="menu" aria-label="Ações principais">
          <a className="item" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <span className="it-num">I.</span>
            <span className="it-body">
              <span className="it-name">Conversar pelo WhatsApp</span>
            </span>
            <span className="it-arr" aria-hidden>→</span>
          </a>

          <div className="rule" aria-hidden><span className="lz" /></div>

          <button
            className="item"
            type="button"
            onClick={() => setSheetOpen(true)}
            aria-haspopup="dialog"
            aria-controls="areas-sheet"
          >
            <span className="it-num">II.</span>
            <span className="it-body">
              <span className="it-name">Áreas de atuação</span>
              <span className="it-sub">Família · Civil · Criminal · Previdenciário</span>
            </span>
            <span className="it-arr" aria-hidden>→</span>
          </button>

          <div className="rule" aria-hidden><span className="lz" /></div>

          <a className="item" href={MAPS} target="_blank" rel="noopener noreferrer">
            <span className="it-num">III.</span>
            <span className="it-body">
              <span className="it-name">Visitar escritório</span>
              <span className="it-sub">Atendimento com hora marcada</span>
            </span>
            <span className="it-arr" aria-hidden>→</span>
          </a>

          <div className="rule" aria-hidden><span className="lz" /></div>

          <a className="item" href={EMAIL}>
            <span className="it-num">IV.</span>
            <span className="it-body">
              <span className="it-name">Enviar e-mail</span>
            </span>
            <span className="it-arr" aria-hidden>→</span>
          </a>
        </nav>

        <a className="ig" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <IgIcon />
          @liviaholanda_advogada
        </a>
      </main>

      <div
        className={`scrim ${sheetOpen ? 'open' : ''}`}
        onClick={() => setSheetOpen(false)}
        aria-hidden
      />
      <aside
        id="areas-sheet"
        className={`sheet ${sheetOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        aria-hidden={!sheetOpen}
      >
        <div className="sheet-handle" aria-hidden />
        <div className="sheet-emblem" aria-hidden />
        <h2 id="sheet-title" className="sheet-title">Áreas de atuação</h2>
        <p className="sheet-lede">
          Atendimento humanizado em quatro frentes do Direito. Soluções seguras, eficientes e personalizadas para cada caso.
        </p>

        {AREAS.map((area) => (
          <div key={area.num}>
            <div className="sheet-rule" aria-hidden><span className="lz" /></div>
            <article className="area">
              <div className="area-head">
                <span className="area-num">{area.num}</span>
                <span className="area-name">{area.name}</span>
              </div>
              <p className="area-quote">{area.quote}</p>
              <div className="area-chips">
                {area.chips.map((c) => (
                  <span className="area-chip" key={c}>{c}</span>
                ))}
              </div>
            </article>
          </div>
        ))}

        <p className="sheet-outro">
          Advocacia acessível, transparente e comprometida com resultados.
        </p>

        <a className="sheet-cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Conversar sobre seu caso
          <span className="arr" aria-hidden>→</span>
        </a>
        <button className="sheet-close" type="button" onClick={() => setSheetOpen(false)}>
          Fechar
        </button>
      </aside>
    </>
  );
}
