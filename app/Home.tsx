import React, { useEffect, useState } from 'react';

const arquivos = (import.meta as any).glob('./assets/*', { eager: true, import: 'default' }) as Record<string, string>;
const imagemDe = (nome: string) =>
  Object.entries(arquivos).find(([caminho]) => caminho.split('/').pop()!.split('.')[0].toLowerCase() === nome.toLowerCase())?.[1] ?? '';

const pessoa = {
  nome: 'Caio de Paula',
  cidade: 'São José dos Campos, SP',
  foto: imagemDe('FotoCaioDePaula'),
  frase: 'Fazer com excelência, ou não fazer.',
  intro:
    'Minha base é desenvolvimento: Python, TypeScript e IA aplicada com LLMs e modelos open source. Hoje sou sócio-fundador e CRO da LabAI, onde ajudei a construir o FinanceLab do zero e agora lidero a frente comercial: novos projetos, parcerias e negócios.',
  stackPrincipal: ['Python', 'TypeScript', 'FastAPI'],
  linkedin: 'https://www.linkedin.com/in/caio-de-paula-3a32a3305',
  github: 'https://github.com/caiogabrielfp-cpu',
  email: 'vendas@labai-tech.com',
  curriculo: '',
};

const assuntoEmail = encodeURIComponent('Contato pelo portfólio');
const linksEmail = {
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${pessoa.email}&su=${assuntoEmail}`,
  outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${pessoa.email}&subject=${assuntoEmail}`,
  padrao: `mailto:${pessoa.email}?subject=${assuntoEmail}`,
};

const habilidades = ['Python', 'TypeScript', 'FastAPI', 'LLMs', 'Modelos Open Source', 'PostgreSQL', 'Inteligência Artificial', 'Estratégia Comercial'];

const principios = [
  { titulo: 'Excelência ou nada', texto: 'Se é pra entregar, é pra entregar bem feito. Meia entrega não resolve problema de ninguém.' },
  { titulo: 'IA por eficiência, não por moda', texto: 'Inteligência artificial só entra quando torna uma solução realmente melhor.' },
  { titulo: 'Conhecer o produto por dentro', texto: 'Ajudei a programar o que hoje eu vendo. Isso muda a forma de negociar e de prometer.' },
];

const metas = [
  { prazo: 'curto prazo', titulo: 'Escalar o FinanceLab', texto: 'Expandir a marca e chegar aos primeiros 10.000 usuários.' },
  { prazo: 'médio prazo', titulo: 'Crescer a LabAI', texto: 'Trazer novos projetos para dentro da LabAI e desenvolver as funcionalidades que ainda faltam no FinanceLab.' },
  { prazo: 'longo prazo', titulo: 'Levar a LabAI para fora do Brasil', texto: 'Aumentar a equipe e expandir a operação, com foco nas Américas e na Europa.' },
];

const stack = [
  { area: 'linguagens', itens: ['Python', 'TypeScript'] },
  { area: 'back-end', itens: ['FastAPI'] },
  { area: 'inteligência artificial', itens: ['LLMs', 'Modelos open source'] },
  { area: 'banco de dados', itens: ['PostgreSQL'] },
];

const experiencia = [
  { periodo: 'set/2025 – atual', titulo: 'Sócio-fundador & CRO', local: 'LabAI' },
  { periodo: 'projeto · LabAI', titulo: 'Co-desenvolvedor do FinanceLab', local: 'Desenho e desenvolvimento do zero, junto com os sócios' },
];

const cursos = [
  { periodo: 'graduação · 2º semestre', titulo: 'Análise e Desenvolvimento de Sistemas', local: 'Fatec' },
  { periodo: '2026', titulo: 'Design Thinking', local: 'Fatec (online)' },
  { periodo: '2024', titulo: 'SAP Demand Planning', local: 'SAP' },
  { periodo: '2024', titulo: 'SAP Supply Planning', local: 'SAP' },
  { periodo: '2022', titulo: 'DaVinci Resolve', local: 'Udemy' },
];

const idiomas = [
  { idioma: 'Português', nivel: 'nativo' },
  { idioma: 'Espanhol', nivel: 'fluente' },
  { idioma: 'Inglês', nivel: 'intermediário' },
  { idioma: 'Russo', nivel: 'iniciando' },
];

const labai = {
  sobre:
    'A LabAI desenvolve soluções com inteligência artificial para resolver problemas do mundo real. Pegamos soluções falhas ou inexistentes e usamos IA para torná-las eficientes. Não é IA por moda, é IA por eficiência.',
  papel:
    'Como CRO (Chief Revenue Officer), cuido da saúde financeira e do crescimento da empresa.',
  logo: imagemDe('labai-logo'),
  responsabilidades: [
    'Encontrar novos projetos para a LabAI',
    'Promover os produtos da empresa no mercado',
    'Fechar bons negócios para manter a empresa saudável',
  ],
  linhaDoTempo: [
    { quando: 'set/2025', texto: 'Entrada como sócio-fundador e CRO' },
    { quando: 'lançado', texto: 'FinanceLab no ar' },
    { quando: 'próximo', texto: 'Primeiros 10.000 usuários no FinanceLab' },
    { quando: 'futuro', texto: 'Expansão para as Américas e a Europa' },
  ],
};

const financelab = {
  resumo:
    'Um copiloto financeiro: aplicativo educacional para pequenos e médios investidores, que ensina a investir do zero e desmistifica o mercado financeiro.',
  publico: 'Pequenos e médios investidores',
  logo: imagemDe('financelab-logo'),
  imagem: imagemDe('financelab-post'),
  link: '',
  atuacao: [
    { fase: 'desenho', titulo: 'Concepção do produto', texto: 'Participei da definição do produto desde a primeira ideia.' },
    { fase: 'desenvolvimento', titulo: 'Construção do zero', texto: 'Programei o FinanceLab junto com meus sócios até o lançamento.' },
    { fase: 'comercial · agora', titulo: 'Crescimento da marca', texto: 'Marketing, busca de parceiros e captação de anunciantes para o app.' },
  ],
  problema: 'O mercado financeiro parece complicado e distante para quem está começando, e muita gente nem tenta investir.',
  solucao: 'Um app que funciona como copiloto: ensina do zero, explica o mercado de forma simples e acompanha o usuário na jornada.',
  proximoPasso: 'Lançado. A meta agora é escalar a marca e chegar aos primeiros 10.000 usuários.',
};

const menu = [
  { id: 'visao', nome: 'Visão' },
  { id: 'formacao', nome: 'Formação' },
  { id: 'labai', nome: 'LabAI' },
  { id: 'projetos', nome: 'FinanceLab' },
  { id: 'contato', nome: 'Contato' },
];

export default function Home() {
  const [popup, setPopup] = useState<'labai' | 'financelab' | 'email' | null>(null);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (!popup) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setPopup(null);
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = '';
    };
  }, [popup]);

  const imagem = (src: string, texto: string, proporcao = '16 / 10', classe = '') => (
    <div className={`imagem ${classe}`} style={{ aspectRatio: proporcao }}>
      {src ? <img src={src} alt={texto} /> : <span className="mono">{texto}</span>}
    </div>
  );

  return (
    <>
      <style>{css}</style>
      <header className="header">
        <nav className="container header-nav">
          <a href="#topo" className="logo mono">
            <span className="destaque">&lt;</span>{pessoa.nome}<span className="destaque">/&gt;</span>
          </a>
          <button className="menu-botao" aria-label="Menu" onClick={() => setMenuAberto(!menuAberto)}>☰</button>
          <ul className={`menu ${menuAberto ? 'aberto' : ''}`}>
            {menu.map((m, i) => (
              <li key={m.id}>
                <a href={`#${m.id}`} onClick={() => setMenuAberto(false)}>
                  <span className="mono">0{i + 1}</span> {m.nome}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="topo" className="container hero">
          <div className="hero-texto">
            <div className="chips">
              <span className="chip chip-vinho">Desenvolvedor Full Stack</span>
              <span className="chip">Inteligência Artificial</span>
              <span className="chip">Sócio-fundador & CRO @ LabAI</span>
            </div>
            <p className="ola">Olá, eu sou <strong>{pessoa.nome}</strong>.</p>
            <h1>
              Desenvolvedor <span className="destaque">full stack</span> que constrói com <span className="destaque">IA</span>.
            </h1>
            <p className="texto grande">{pessoa.intro}</p>
            <div className="botoes">
              <a href="#projetos" className="btn btn-vinho">Conhecer o FinanceLab</a>
              <a href="#formacao" className="btn btn-borda">Stack e formação</a>
            </div>
            <dl className="fatos">
              <div><dt className="mono">Base</dt><dd>Dev Full Stack + IA</dd></div>
              <div><dt className="mono">Atuação atual</dt><dd>CRO @ LabAI</dd></div>
              <div><dt className="mono">Idiomas</dt><dd>PT · ES · EN</dd></div>
              <div><dt className="mono">Local</dt><dd>{pessoa.cidade}</dd></div>
            </dl>
          </div>

          <div className="hero-foto">
            <div className="moldura" />
            {imagem(pessoa.foto, pessoa.nome, '4 / 5', 'imagem-foto')}
            <div className="card-flutuante">
              <span className="mono">stack principal</span>
              <div className="chips">
                {pessoa.stackPrincipal.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        <div className="faixa" aria-hidden="true">
          <div className="faixa-trilho">
            {[...habilidades, ...habilidades].map((h, i) => <span key={i}>{h} <i /></span>)}
          </div>
        </div>
        <section id="visao" className="secao container">
          <p className="eyebrow mono">01 / visão</p>
          <h2>No que eu acredito e onde quero chegar.</h2>
          <p className="texto grande">“{pessoa.frase}”</p>
          <div className="duas-colunas">
            <div>
              <h3 className="subtitulo mono">Como eu trabalho</h3>
              {principios.map((p, i) => (
                <div key={p.titulo} className="card linha">
                  <span className="numero">0{i + 1}</span>
                  <div><h4>{p.titulo}</h4><p>{p.texto}</p></div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="subtitulo mono">Metas</h3>
              {metas.map((m, i) => (
                <div key={m.titulo} className="card">
                  <span className={`tag ${i === 0 ? 'tag-vinho' : ''}`}>{m.prazo}</span>
                  <h4>{m.titulo}</h4>
                  <p>{m.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="formacao" className="secao fundo-alt">
          <div className="container">
            <p className="eyebrow mono">02 / formação & competências</p>
            <h2>Stack, experiência e formação.</h2>
            <div className="card">
              <h3>Stack técnica</h3>
              <div className="grid-4">
                {stack.map((s) => (
                  <div key={s.area} className="caixa">
                    <span className="mono destaque">{s.area}</span>
                    <div className="chips">{s.itens.map((i) => <span key={i} className="tag">{i}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <h3>Experiência</h3>
                {experiencia.map((e) => (
                  <div key={e.titulo} className="item">
                    <span className="mono destaque">{e.periodo}</span>
                    <strong>{e.titulo}</strong>
                    <span>{e.local}</span>
                  </div>
                ))}
              </div>
              <div className="card">
                <h3>Formação & cursos</h3>
                {cursos.map((c) => (
                  <div key={c.titulo} className="item">
                    <span className="mono destaque">{c.periodo}</span>
                    <strong>{c.titulo}</strong>
                    <span>{c.local}</span>
                  </div>
                ))}
              </div>
              <div className="card">
                <h3>Idiomas</h3>
                {idiomas.map((i) => (
                  <div key={i.idioma} className="item item-linha">
                    <strong>{i.idioma}</strong>
                    <span className="mono">{i.nivel}</span>
                  </div>
                ))}
                {pessoa.curriculo && (
                  <a href={pessoa.curriculo} className="mono destaque link" target="_blank" rel="noreferrer">Baixar currículo (PDF)</a>
                )}
              </div>
            </div>
          </div>
        </section>
        <section id="labai" className="secao container">
          <p className="eyebrow mono">03 / atuação atual</p>
          <div className="titulo-com-botao">
            <h2>Sócio-fundador & CRO da LabAI</h2>
            <button className="btn btn-suave" onClick={() => setPopup('labai')}>Conhecer a LabAI</button>
          </div>
          <div className="duas-colunas">
            <div>
              <p className="texto grande">{labai.sobre}</p>
              <p className="texto grande espaco">{labai.papel}</p>
              <ol className="lista-numerada">
                {labai.responsabilidades.map((r, i) => (
                  <li key={r}><span className="mono destaque">0{i + 1}</span> {r}</li>
                ))}
              </ol>
            </div>
            <div className="janela">
              <div className="janela-barra"><i /><i /><i /><span className="mono">labai.json</span></div>
              <pre className="mono">{`{
  "empresa": "LabAI",
  "meu_cargo": "Sócio-fundador & CRO",
  "background": "Dev Full Stack + IA",
  "desde": "09/2025",
  "filosofia": "IA por eficiência, não por moda",
  "produtos": ["FinanceLab"]
}`}</pre>
              <div className="janela-logo">
                {imagem(labai.logo, 'Logo da LabAI', '1044 / 816', 'imagem-labai')}
                <div>
                  <strong>LabAI</strong>
                  <span className="mono">IA por eficiência, não por moda</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projetos" className="secao fundo-alt">
          <div className="container">
            <p className="eyebrow mono">04 / projeto em destaque</p>
            <h2>O que eu ajudei a construir.</h2>

            <article className="card projeto-destaque">
              <div className="projeto-imagem projeto-imagens">
                {imagem(financelab.logo, 'Logo do FinanceLab', '458 / 574', 'imagem-financelab')}
                {imagem(financelab.imagem, 'Post de divulgação do FinanceLab', '458 / 574', 'imagem-financelab')}
              </div>
              <div className="projeto-info">
                <div className="chips">
                  <span className="chip chip-vinho">lançado</span>
                  <span className="chip">desenvolvido na LabAI</span>
                </div>
                <h3 className="projeto-nome">FinanceLab</h3>
                <p className="texto">{financelab.resumo}</p>
                <p><span className="mono cinza">para quem</span> {financelab.publico}</p>
                <p><span className="mono cinza">meu papel</span> Desenvolvimento e, agora, a frente comercial</p>
                <div className="botoes">
                  <button className="btn btn-vinho" onClick={() => setPopup('financelab')}>Ver case</button>
                  {financelab.link && (
                    <a href={financelab.link} className="btn btn-borda" target="_blank" rel="noreferrer">Acessar</a>
                  )}
                </div>
              </div>
            </article>

            <h3 className="subtitulo mono espaco-topo">Minha atuação no FinanceLab</h3>
            <div className="grid-3 sem-margem">
              {financelab.atuacao.map((a, i) => (
                <div key={a.titulo} className="card">
                  <span className={`tag ${i === 2 ? 'tag-vinho' : ''}`}>{a.fase}</span>
                  <h4>{a.titulo}</h4>
                  <p>{a.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contato" className="secao container">
          <p className="eyebrow mono">05 / contato</p>
          <h2 className="titulo-contato">Bora construir algo <span className="destaque">juntos?</span></h2>
          <p className="texto grande">Aberto a parcerias, anunciantes para o FinanceLab e novos projetos para a LabAI.</p>
          <div className="botoes contato-botoes">
            <a href={pessoa.linkedin} className="btn btn-contato" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={pessoa.github} className="btn btn-contato" target="_blank" rel="noreferrer">GitHub</a>
            <button className="btn btn-contato" onClick={() => setPopup('email')}>E-mail</button>
          </div>
        </section>
      </main>

      <footer className="footer container mono">
        <span>© {new Date().getFullYear()} {pessoa.nome}</span>
        <span>Desenvolvedor Full Stack & IA</span>
      </footer>
      {popup && (
        <div className="modal">
          <button className="modal-fundo" aria-label="Fechar" onClick={() => setPopup(null)} />
          <div className={`modal-caixa ${popup === 'email' ? 'modal-pequeno' : ''}`} role="dialog" aria-modal="true">
            <button className="modal-fechar" aria-label="Fechar" onClick={() => setPopup(null)}>✕</button>

            {popup === 'labai' && (
              <>
                {labai.logo && <img src={labai.logo} alt="Logo da LabAI" className="modal-logo" />}
                <span className="eyebrow mono">atuação atual</span>
                <h3 className="modal-titulo">LabAI</h3>
                <p className="texto">{labai.sobre}</p>
                <p className="texto">{labai.papel}</p>
                <ul className="linha-tempo">
                  {labai.linhaDoTempo.map((t) => (
                    <li key={t.texto}><span className="mono destaque">{t.quando}</span> {t.texto}</li>
                  ))}
                </ul>
              </>
            )}

            {popup === 'email' && (
              <>
                <span className="eyebrow mono">contato</span>
                <h3 className="modal-titulo modal-titulo-menor">Enviar e-mail</h3>
                <p className="texto">
                  Escolha por onde quer enviar. A mensagem vai para <span className="mono destaque">{pessoa.email}</span>.
                </p>
                <div className="opcoes-email">
                  <a href={linksEmail.gmail} target="_blank" rel="noreferrer" className="opcao-email" onClick={() => setPopup(null)}>
                    <strong>Gmail</strong>
                    <span className="mono">abre no navegador ↗</span>
                  </a>
                  <a href={linksEmail.outlook} target="_blank" rel="noreferrer" className="opcao-email" onClick={() => setPopup(null)}>
                    <strong>Outlook</strong>
                    <span className="mono">abre no navegador ↗</span>
                  </a>
                </div>
                <a href={linksEmail.padrao} className="mais-opcoes mono" onClick={() => setPopup(null)}>
                  mais opções
                </a>
              </>
            )}

            {popup === 'financelab' && (
              <>
                {financelab.logo && <img src={financelab.logo} alt="Logo do FinanceLab" className="modal-logo modal-logo-financelab" />}
                <span className="eyebrow mono">case · desenvolvido na LabAI</span>
                <h3 className="modal-titulo">FinanceLab</h3>
                <p className="texto">{financelab.resumo}</p>
                <div className="grid-3">
                  <div className="caixa"><span className="mono destaque">problema</span><p>{financelab.problema}</p></div>
                  <div className="caixa"><span className="mono destaque">solução</span><p>{financelab.solucao}</p></div>
                  <div className="caixa"><span className="mono destaque">próximo passo</span><p>{financelab.proximoPasso}</p></div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const css = `
:root {
  --vinho: #b4294a;
  --vinho-claro: #d6899b;
  --vinho-suave: rgba(180, 41, 74, 0.16);
  --vinho-borda: rgba(180, 41, 74, 0.5);
  --fundo: #0f0a0b;
  --fundo-alt: #140d0f;
  --card: #1a1113;
  --texto: #f3eaec;
  --texto-2: #cdbfc3;
  --cinza: #a99ba0;
  --linha: rgba(255, 255, 255, 0.09);
  --fonte: 'Inter', system-ui, sans-serif;
  --fonte-titulo: 'Space Grotesk', sans-serif;
  --fonte-mono: 'JetBrains Mono', monospace;
}

* { box-sizing: border-box; margin: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
body {
  background: var(--fundo);
  color: var(--texto);
  font-family: var(--fonte);
  line-height: 1.5;
  overflow-x: hidden;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 56px 56px;
}
a { color: inherit; text-decoration: none; }
button { font: inherit; color: inherit; cursor: pointer; }
ul, ol { padding: 0; list-style: none; }
img { width: 100%; height: 100%; object-fit: cover; display: block; }

.container { max-width: 1240px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }
.mono { font-family: var(--fonte-mono); }
.destaque { color: var(--vinho-claro); }
.cinza { color: var(--cinza); font-size: 12px; margin-right: 8px; }
.texto { color: var(--texto-2); line-height: 1.6; }
.grande { font-size: 18px; max-width: 620px; }

h1, h2, h3, h4 { font-family: var(--fonte-titulo); letter-spacing: -0.02em; }
h1 { font-size: clamp(42px, 5.8vw, 84px); line-height: 1; letter-spacing: -0.035em; }
h2 { font-size: clamp(34px, 4.4vw, 58px); line-height: 1.05; margin-bottom: 20px; }
h3 { font-size: 22px; margin-bottom: 16px; }
h4 { font-size: 19px; margin-bottom: 6px; }

.secao { padding-top: 110px; padding-bottom: 110px; }
.fundo-alt { background: var(--fundo-alt); border-block: 1px solid var(--linha); }
.eyebrow { display: block; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vinho-claro); margin-bottom: 14px; }
.subtitulo { font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cinza); font-weight: 500; margin-bottom: 14px; }

.duas-colunas { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 32px; margin-top: 40px; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 20px; }
.grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }

.card { background: var(--card); border: 1px solid var(--linha); border-radius: 18px; padding: 26px; margin-bottom: 16px; transition: transform 0.25s, border-color 0.25s; }
.card:hover { transform: translateY(-4px); border-color: rgba(255, 255, 255, 0.22); }
.card p { color: var(--texto-2); font-size: 15px; }
.linha { display: flex; gap: 20px; }
.numero { font-family: var(--fonte-titulo); font-size: 28px; font-weight: 700; color: var(--vinho-claro); line-height: 1; }

.caixa { background: var(--fundo-alt); border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 12px; }
.caixa p { font-size: 15px; color: var(--texto-2); }

.item { display: flex; flex-direction: column; gap: 3px; padding: 14px 0; border-top: 1px solid var(--linha); }
.item span { font-size: 14px; color: var(--cinza); }
.item .destaque { font-size: 12px; color: var(--vinho-claro); }
.item-linha { flex-direction: row; justify-content: space-between; }
.link { display: inline-block; margin-top: 14px; font-size: 13px; }

.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { padding: 7px 13px; border-radius: 999px; border: 1px solid rgba(255, 255, 255, 0.13); font-family: var(--fonte-mono); font-size: 12px; color: var(--texto-2); }
.chip-vinho { background: var(--vinho-suave); border-color: var(--vinho-borda); color: var(--texto); }
.tag { display: inline-block; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.12); font-family: var(--fonte-mono); font-size: 12px; color: var(--texto-2); margin-bottom: 8px; }
.tag-vinho { background: var(--vinho-suave); border-color: transparent; color: var(--vinho-claro); }

.btn { min-height: 50px; display: inline-flex; align-items: center; padding: 0 24px; border-radius: 12px; border: 1px solid transparent; font-size: 15px; font-weight: 500; transition: transform 0.2s; }
.btn:hover { transform: translateY(-2px); }
.btn-vinho { background: var(--vinho); color: #fff; font-weight: 600; }
.btn-borda { border-color: rgba(255, 255, 255, 0.18); background: transparent; }
.btn-suave { background: var(--vinho-suave); border-color: var(--vinho-borda); }
.botoes { display: flex; flex-wrap: wrap; gap: 12px; }

.imagem { position: relative; width: 100%; background: #170f11; border-radius: 14px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.imagem span { font-size: 12px; color: var(--cinza); padding: 16px; text-align: center; }

.header { position: sticky; top: 0; z-index: 50; background: rgba(15, 10, 11, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid var(--linha); }
.header-nav { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.logo { font-size: 15px; }
.menu { display: flex; gap: 4px; }
.menu a { display: block; padding: 10px 14px; border-radius: 10px; font-size: 14px; color: var(--texto-2); }
.menu a:hover { color: var(--texto); background: rgba(255, 255, 255, 0.05); }
.menu a span { font-size: 11px; color: var(--vinho-claro); }
.menu-botao { display: none; width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--linha); background: none; font-size: 18px; }

.hero { display: flex; flex-wrap: wrap; align-items: center; gap: 64px; padding-top: 90px; padding-bottom: 90px; }
.hero-texto { flex: 1 1 520px; display: flex; flex-direction: column; gap: 24px; }
.ola { font-size: 18px; color: var(--texto-2); }
.ola strong { color: var(--texto); }
.fatos { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; padding-top: 20px; border-top: 1px solid var(--linha); }
.fatos dt { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cinza); }
.fatos dd { margin: 0; font-weight: 500; }

.hero-foto { position: relative; flex: 1 1 320px; max-width: 440px; margin: 0 auto; }
.hero-foto .imagem { border-radius: 26px; border: 1px solid var(--linha); }
.moldura { position: absolute; inset: 18px -18px -18px 18px; border: 1px solid var(--vinho-borda); border-radius: 26px; }
.card-flutuante { position: absolute; left: -24px; bottom: 32px; padding: 16px; border-radius: 16px; background: rgba(26, 17, 19, 0.95); border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45); animation: flutuar 5s ease-in-out infinite; }
.card-flutuante > span { display: block; font-size: 11px; text-transform: uppercase; color: var(--cinza); margin-bottom: 8px; }
.card-flutuante .tag { margin: 0; background: var(--vinho-suave); border: 0; }

.faixa { overflow: hidden; padding: 20px 0; background: var(--fundo-alt); border-block: 1px solid var(--linha); }
.faixa-trilho { display: flex; width: max-content; gap: 44px; animation: deslizar 38s linear infinite; }
.faixa-trilho span { display: flex; align-items: center; gap: 44px; white-space: nowrap; font-family: var(--fonte-titulo); font-size: 24px; color: var(--texto-2); }
.faixa-trilho i { width: 8px; height: 8px; background: var(--vinho); transform: rotate(45deg); }

.titulo-com-botao { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 20px; }
.lista-numerada { margin-top: 24px; }
.lista-numerada li { padding: 16px 0; border-top: 1px solid var(--linha); font-size: 17px; }
.lista-numerada .mono { font-size: 13px; margin-right: 14px; }
.janela { background: #160e10; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; overflow: hidden; }
.janela-barra { display: flex; align-items: center; gap: 7px; padding: 12px 16px; background: #211618; border-bottom: 1px solid var(--linha); }
.janela-barra i { width: 10px; height: 10px; border-radius: 50%; background: rgba(255, 255, 255, 0.18); }
.janela-barra i:first-child { background: var(--vinho); }
.janela-barra span { margin-left: auto; font-size: 12px; color: var(--cinza); }
.janela pre { padding: 22px; font-size: 14px; line-height: 1.9; color: var(--texto-2); overflow-x: auto; }
.janela-logo { display: flex; align-items: center; gap: 16px; margin: 0 22px 22px; padding: 14px; border: 1px solid var(--linha); border-radius: 14px; background: var(--fundo-alt); }
.janela-logo strong { display: block; font-family: var(--fonte-titulo); font-size: 18px; }
.janela-logo span { font-size: 12px; color: var(--cinza); }
.imagem-labai { width: 132px; flex: none; border-radius: 10px; background: transparent; }
.imagem-labai img { object-fit: contain; }
.imagem-foto img { object-position: center 30%; }
.imagem-financelab { background: #0c0c0c; }
.imagem-financelab img { object-fit: contain; }
.modal-logo { width: 120px; height: auto; border-radius: 12px; }
.modal-logo-financelab { width: 80px; }
.projeto-imagens { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-self: center; }

.projeto-destaque { display: flex; flex-wrap: wrap; gap: 32px; padding: 28px; margin-top: 40px; }
.projeto-imagem { flex: 1 1 480px; }
.projeto-info { flex: 1 1 340px; display: flex; flex-direction: column; gap: 14px; }
.projeto-nome { font-size: 44px; margin: 0; }
.projeto { display: flex; flex-direction: column; gap: 10px; padding: 18px; margin: 0; }
.projeto .imagem { margin-bottom: 6px; }
.projeto .mono { font-size: 12px; }

.titulo-contato { font-size: clamp(44px, 6vw, 86px); line-height: 0.95; letter-spacing: -0.04em; }
.contato-botoes { margin-top: 28px; }
.btn-contato { border-color: rgba(255, 255, 255, 0.18); background: transparent; transition: transform 0.2s, border-color 0.2s, background-color 0.2s; }
.btn-contato:hover { border-color: var(--vinho); }
.btn-contato:active { background: var(--vinho); border-color: var(--vinho); color: #fff; }
.espaco { margin-top: 16px; }
.espaco-topo { margin-top: 40px; }
.sem-margem { margin-top: 0; }

.footer { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; padding-top: 28px; padding-bottom: 28px; border-top: 1px solid var(--linha); font-size: 12px; color: var(--cinza); }

.modal { position: fixed; inset: 0; z-index: 100; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-fundo { position: absolute; inset: 0; border: 0; background: rgba(8, 5, 6, 0.8); backdrop-filter: blur(6px); }
.modal-caixa { position: relative; width: 100%; max-width: 820px; max-height: 88vh; overflow-y: auto; padding: 40px 36px; border-radius: 24px; background: #170f11; border: 1px solid rgba(255, 255, 255, 0.12); display: flex; flex-direction: column; gap: 16px; animation: subir 0.3s ease-out; }
.modal-fechar { position: absolute; top: 14px; right: 14px; width: 44px; height: 44px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.14); background: none; }
.modal-titulo { font-size: 44px; margin: 0; }
.linha-tempo li { padding: 10px 0; }
.linha-tempo .mono { margin-right: 14px; }
.modal-pequeno { max-width: 480px; }
.modal-titulo-menor { font-size: 34px; }
.opcoes-email { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 4px; }
.opcao-email { display: flex; flex-direction: column; gap: 6px; padding: 20px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.14); background: var(--fundo-alt); transition: border-color 0.2s, background-color 0.2s, transform 0.2s; }
.opcao-email strong { font-family: var(--fonte-titulo); font-size: 20px; }
.opcao-email span { font-size: 12px; color: var(--cinza); }
.opcao-email:hover { border-color: var(--vinho); transform: translateY(-2px); }
.opcao-email:active { background: var(--vinho); border-color: var(--vinho); }
.opcao-email:active span { color: #fff; }
.mais-opcoes { align-self: center; padding: 8px 12px; font-size: 13px; color: var(--cinza); text-decoration: underline; text-underline-offset: 4px; }
.mais-opcoes:hover { color: var(--vinho-claro); }
.modal .grid-3 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }

@keyframes flutuar { 50% { transform: translateY(-8px); } }
@keyframes deslizar { to { transform: translateX(-50%); } }
@keyframes subir { from { opacity: 0; transform: translateY(14px); } }

@media (max-width: 860px) {
  .menu-botao { display: block; }
  .menu { display: none; position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; padding: 12px 20px 20px; background: var(--fundo); border-bottom: 1px solid var(--linha); }
  .menu.aberto { display: flex; }
  .menu a { padding: 14px 8px; font-size: 16px; }
}

@media (max-width: 600px) {
  .duas-colunas { grid-template-columns: 1fr; }
  .card-flutuante { left: 10px; }
  .moldura { inset: 10px -8px -10px 8px; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
`;
