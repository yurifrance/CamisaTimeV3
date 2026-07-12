/* ============================================================
   LOJA DE CAMISAS — script.js
   ============================================================ */


/* ══════════════════════════════════════════════════════════════
   ✏️  CONFIGURAÇÕES — EDITE AQUI
   ══════════════════════════════════════════════════════════════ */

const WHATSAPP  = "351932144202"; /* ✏️ seu número com DDI+DDD */
const NOME_LOJA = "ComClubismo";  /* ✏️ nome da sua loja       */


/* ══════════════════════════════════════════════════════════════
   ✏️  PRODUTOS — EDITE AQUI
   ══════════════════════════════════════════════════════════════
   NOVIDADE: cada produto agora tem "imgs" (array de 1 a 5 imagens)
   no lugar de "img". Exemplos:

   Uma imagem:
     imgs: ["imagens/brasil.jpg"]

   Várias imagens (carrossel):
     imgs: ["imagens/brasil-1.jpg", "imagens/brasil-2.jpg", "imagens/brasil-3.jpg"]

   Sem imagem (usa emoji):
     imgs: []

   - cat: "selecao" | "europeu" | "brasileiro" | "retro"
   ══════════════════════════════════════════════════════════════ */
const PRODUTOS = [

  /* ── BRASILEIROS ── */
  {
    id: 13, nome: "Santos", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "⚫",
    imgs: ["imagens/santos.jpg"] /* ✏️ adicione mais imagens: ["imagens/santos.jpg","imagens/santos-2.jpg"] */
  },
  {
    id: 14, nome: "Corinthians", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "⚫",
    imgs: ["imagens/corinthians.jpg"]
  },
  {
    id: 15, nome: "Palmeiras", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "💚",
    imgs: ["imagens/palmeiras.jpg"]
  },
  {
    id: 16, nome: "São Paulo", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "🔺",
    imgs: ["imagens/saopaulo.jpg"]
  },
  {
    id: 17, nome: "Grêmio", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "💙",
    imgs: ["imagens/gremio.jpg"]
  },
  {
    id: 18, nome: "Vasco", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "⚫",
    imgs: ["imagens/vasco.jpeg"]
  },
  {
    id: 25, nome: "Bahia", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "🔵",
    imgs: ["imagens/bahu.jpg"]
  },
  {
    id: 26, nome: "Fluminense", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "🔴",
    imgs: ["imagens/fluminense.jpg"]
  },
  {
    id: 27, nome: "Flamengo", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "🔴",
    imgs: ["imagens/flamengo.jpg"]
  },
  {
    id: 28, nome: "Corinthians", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "⚫",
    imgs: ["imagens/corinthians2.jpg"]
  },
  {
    id: 30, nome: "Atlético-MG", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "⚫",
    imgs: ["imagens/galo.jpg"]
  },
  {
    id: 31, nome: "Cruzeiro", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "💙",
    imgs: ["imagens/cru.jpg"]
  },
  {
    id: 32, nome: "Internacional AllBlack", liga: "Brasileirão", cat: "brasileiro", preco: 35, emoji: "⚫",
    imgs: ["imagens/interblack.jpg", "imagens/inter2.jpeg", "imagens/inter3.jpeg"]
  },

  /* ── SELEÇÕES ── */
  {
    id: 1, nome: "Brasil Retro", liga: "Retrô Brasileira", cat: "retro", preco: 35, emoji: "🇧🇷",
    imgs: ["imagens/brasilretro.jpg"]
  },
  {
    id: 2, nome: "Argentina", liga: "Seleção Argentina", cat: "selecao", preco: 35, emoji: "🇦🇷",
    imgs: ["imagens/argentina.jpg"]
  },
  {
    id: 3, nome: "Portugal", liga: "Seleção Portuguesa", cat: "selecao", preco: 35, emoji: "🇵🇹",
    imgs: ["imagens/portugal.jpg"]
  },
  {
    id: 4, nome: "Portugal Black", liga: "Seleção Portuguesa", cat: "selecao", preco: 35, emoji: "🇵🇹",
    imgs: ["imagens/portugalblack.jpg"]
  },
  {
    id: 5, nome: "Alemanha", liga: "Seleção Alemã", cat: "selecao", preco: 35, emoji: "🇩🇪",
    imgs: ["imagens/alemanha.jpg"]
  },
  {
    id: 6, nome: "Espanha", liga: "Seleção Espanhola", cat: "selecao", preco: 35, emoji: "🇪🇸",
    imgs: ["imagens/espanha.jpg"]
  },
  {
    id: 29, nome: "Japão", liga: "Seleção Japonesa", cat: "selecao", preco: 35, emoji: "🇯🇵",
    imgs: ["imagens/japao.jpg"]
  },
  {
    id: 33, nome: "Colombia", liga: "Seleção Colombiana", cat: "selecao", preco: 35, emoji: "🇨🇴",
    imgs: ["imagens/colombia.jpg"]
  },
  {
    id: 34, nome: "Brasil", liga: "Seleção Brasileira", cat: "selecao", preco: 35, emoji: "🇧🇷",
    imgs: ["imagens/brasil1.jpg","imagens/brasil3.jpeg"]
  },

  /* ── EUROPEUS ── */
  {
    id: 7, nome: "Real Madrid 2017 CR7", liga: "La Liga", cat: "retro", preco: 37, emoji: "⚪",
    imgs: ["imagens/realmadridCR72017.jpg"]
  },
  {
    id: 8, nome: "Bayern Kane", liga: "Bundesliga", cat: "europeu", preco: 35, emoji: "🔴",
    imgs: ["imagens/bayernkane.jpg"]
  },
  {
    id: 9, nome: "Miami Messi", liga: "EUA", cat: "europeu", preco: 37, emoji: "🩷",
    imgs: ["imagens/miamimessi.jpg"]
  },
  {
    id: 12, nome: "Milan", liga: "Serie A", cat: "retro", preco: 38, emoji: "⚫",
    imgs: ["imagens/milankaka.jpg"]
  },

  /* ── RETRÔ ── */
  {
    id: 22, nome: "Manchester United Retro Beckham", liga: "Retrô — Clube", cat: "retro", preco: 38, emoji: "🔴",
    imgs: ["imagens/retrobeckmanchester.jpg"]
  },
  {
    id: 23, nome: "Palmeiras Parmalat Retro", liga: "Retrô — Clube", cat: "retro", preco: 39, emoji: "💚",
    imgs: ["imagens/palretro.jpg"]
  },
  {
    id: 24, nome: "Barcelona retro", liga: "Retrô — Clube", cat: "retro", preco: 39, emoji: "🔵",
    imgs: ["imagens/barcaretro.jpg"]
  },
];


/* ══════════════════════════════════════════════════════════════
   ✏️  DEPOIMENTOS — EDITE AQUI (alteração 4: rodapé carrossel)
   ══════════════════════════════════════════════════════════════
   Adicione até quantos depoimentos quiser.
   - img:   caminho da foto do cliente (ex: "clientes/joao.jpg")
             deixe "" para usar apenas o avatar com a inicial do nome
   - nome:  nome do cliente
   - local: cidade ou país
   - texto: o que o cliente escreveu
   ══════════════════════════════════════════════════════════════ */
const DEPOIMENTOS = [
  {
    img: "",              /* ✏️ ex: "clientes/cliente1.jpg" */
    nome: "Alex",
    local: "Braga, PT",
    texto: "Camisa chegou perfeita, qualidade incrível! Já fiz o segundo pedido."
  },
  {
    img: "imagens/clientebrasil.jpeg",
    nome: "Ana Rodrigues",
    local: "Porto, PT",
    texto: "Demorou 12 dias, qualidade top."
  },
  {
    img: "imagens/clientesantos.jpeg",
    nome: "Carlos Thiago G.",
    local: "Braga, PT",
    texto: "muito bom"
  },
  {
    img: "",              /* ✏️ adicione mais depoimentos copiando este bloco */
    nome: "Marina M Silva",
    local: "Braga, PT",
    texto: "Atendimento via WhatsApp muito atencioso."
  },
];


/* ══════════════════════════════════════════════════════════════
   LÓGICA — não precisa editar abaixo
   ══════════════════════════════════════════════════════════════ */

let filtroAtivo  = "todos";
let carrinho     = [];
let modalProduto = null;
let modalTamanho = null;
let modalQtd     = 1;
let modalSlide   = 0; /* índice da imagem atual no carrossel do modal */

/* ── helper: primeira imagem ou null ── */
function primeiraImg(p) {
  return p.imgs && p.imgs.length > 0 ? p.imgs[0] : null;
}

/* ── helper: gera html de imagem com fallback emoji ── */
function imgHtml(src, alt, emoji, extraCss = "") {
  if (src) {
    return `<img src="${src}" alt="${alt}" style="${extraCss}"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <span style="display:none;font-size:2.5rem;width:100%;height:100%;
                         align-items:center;justify-content:center;">${emoji}</span>`;
  }
  return `<span style="font-size:2.5rem;">${emoji}</span>`;
}


/* ────────────────────────────────
   CATÁLOGO
──────────────────────────────── */
function renderCatalog() {
  const lista = filtroAtivo === "todos"
    ? PRODUTOS
    : PRODUTOS.filter(p => p.cat === filtroAtivo);

  document.getElementById("catalog").innerHTML = lista.map(p => {
    const noCart = carrinho.some(i => i.produto.id === p.id);
    const src    = primeiraImg(p);
    const temVarias = p.imgs && p.imgs.length > 1;
    return `
      <div class="shirt-card ${noCart ? 'in-cart' : ''}" onclick="abrirModal(${p.id})">
        ${noCart ? '<div class="in-cart-badge">✓ No carrinho</div>' : ''}
        ${temVarias ? '<div class="multi-img-badge">📷 ' + p.imgs.length + ' fotos</div>' : ''}
        <div class="shirt-img">${imgHtml(src, p.nome, p.emoji)}</div>
        <div class="shirt-name">${p.nome}</div>
        <div class="shirt-league">${p.liga}</div>
        <div class="shirt-price">€ ${p.preco}</div>
        <button class="add-btn">${noCart ? '+ Adicionar novamente' : '+ Adicionar ao carrinho'}</button>
      </div>`;
  }).join("");
}

function filtrar(cat, btn) {
  filtroAtivo = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderCatalog();
}


/* ────────────────────────────────────────────────────────────
   ALTERAÇÃO 3: MODAL COM CARROSSEL DE IMAGENS
   O modal agora exibe um carrossel com setas e miniaturas.
   As funções mudarSlide() e irParaSlide() controlam a navegação.
──────────────────────────────────────────────────────────── */
function abrirModal(id) {
  modalProduto = PRODUTOS.find(p => p.id === id);
  modalTamanho = null;
  modalQtd     = 1;
  modalSlide   = 0;

  document.getElementById("modal-nome").textContent    = modalProduto.nome;
  document.getElementById("modal-liga").textContent    = modalProduto.liga;
  document.getElementById("modal-preco").textContent   = `€ ${modalProduto.preco}`;
  document.getElementById("modal-qty-num").textContent = 1;
  document.querySelectorAll(".modal-size-btn").forEach(b => b.classList.remove("active"));

  renderCarrossel();

  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

/* Renderiza o carrossel de imagens dentro do modal */
function renderCarrossel() {
  const p     = modalProduto;
  const imgs  = p.imgs && p.imgs.length > 0 ? p.imgs : [];
  const total = imgs.length;
  const el    = document.getElementById("modal-carrossel");

  /* sem imagens — exibe emoji */
  if (total === 0) {
    el.innerHTML = `<div class="carrossel-main"><span style="font-size:4rem;">${p.emoji}</span></div>`;
    return;
  }

  const src = imgs[modalSlide];

  /* imagem principal com setas (só aparecem se houver mais de 1 foto) */
  const setas = total > 1 ? `
    <button class="carr-btn carr-prev" onclick="mudarSlide(-1)" title="Foto anterior">&#8249;</button>
    <button class="carr-btn carr-next" onclick="mudarSlide(1)"  title="Próxima foto">&#8250;</button>
    <div class="carr-counter">${modalSlide + 1} / ${total}</div>` : '';

  /* miniaturas (só se houver mais de 1 foto) */
  const thumbs = total > 1 ? `
    <div class="carrossel-thumbs">
      ${imgs.map((img, i) => `
        <div class="thumb ${i === modalSlide ? 'active' : ''}" onclick="irParaSlide(${i})">
          <img src="${img}" alt="foto ${i+1}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <span style="display:none;font-size:1rem;align-items:center;justify-content:center;
                       width:100%;height:100%;">${p.emoji}</span>
        </div>`).join('')}
    </div>` : '';

  el.innerHTML = `
    <div class="carrossel-main">
      <img src="${src}" alt="${p.nome} — foto ${modalSlide + 1}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
      <span style="display:none;font-size:4rem;align-items:center;justify-content:center;
                   width:100%;height:100%;">${p.emoji}</span>
      ${setas}
    </div>
    ${thumbs}`;
}

/* Avança ou recua no carrossel */
function mudarSlide(delta) {
  const total = modalProduto.imgs.length;
  modalSlide  = (modalSlide + delta + total) % total;
  renderCarrossel();
}

/* Vai direto para um slide pelo índice (clique na miniatura) */
function irParaSlide(idx) {
  modalSlide = idx;
  renderCarrossel();
}

function fecharModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

function modalEscolherTamanho(tam, btn) {
  modalTamanho = tam;
  document.querySelectorAll(".modal-size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function modalMudarQtd(delta) {
  modalQtd = Math.max(1, modalQtd + delta);
  document.getElementById("modal-qty-num").textContent = modalQtd;
}

function adicionarAoCarrinho() {
  if (!modalTamanho) { alert("Selecione um tamanho."); return; }
  carrinho.push({ produto: modalProduto, tamanho: modalTamanho, qtd: modalQtd });
  fecharModal();
  renderCatalog();
  renderCarrinho();
  atualizarContadorHeader();
  abrirCarrinho();
}


/* ────────────────────────────────
   DRAWER DO CARRINHO
──────────────────────────────── */
function abrirCarrinho() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function fecharCarrinho() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function removerItem(idx) {
  carrinho.splice(idx, 1);
  renderCatalog();
  renderCarrinho();
  atualizarContadorHeader();
}

function mudarQtdCarrinho(idx, delta) {
  carrinho[idx].qtd = Math.max(1, carrinho[idx].qtd + delta);
  renderCarrinho();
  atualizarContadorHeader();
}

function atualizarContadorHeader() {
  const total = carrinho.reduce((s, i) => s + i.qtd, 0);
  const badge = document.getElementById("cart-count");
  badge.textContent = total;
  badge.style.display = total > 0 ? "flex" : "none";
}

function renderCarrinho() {
  const el           = document.getElementById("cart-items");
  const btnFinalizar = document.getElementById("btn-finalizar");
  const resumoEl     = document.getElementById("cart-total-row");

  if (carrinho.length === 0) {
    el.innerHTML = '<div class="cart-empty">Seu carrinho está vazio.<br>Adicione camisas para continuar.</div>';
    btnFinalizar.style.display = "none";
    resumoEl.style.display     = "none";
    return;
  }

  const totalGeral = carrinho.reduce((s, i) => s + i.produto.preco * i.qtd, 0);

  el.innerHTML = carrinho.map((item, idx) => {
    const src = primeiraImg(item.produto);
    const imgC = src
      ? `<img src="${src}" alt="${item.produto.nome}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <span style="display:none;font-size:1.5rem;align-items:center;justify-content:center;
                      width:100%;height:100%;">${item.produto.emoji}</span>`
      : `<span style="font-size:1.5rem;">${item.produto.emoji}</span>`;

    return `
      <div class="cart-item">
        <div class="cart-item-img">${imgC}</div>
        <div class="cart-item-info">
          <div class="cart-item-nome">${item.produto.nome}</div>
          <div class="cart-item-sub">${item.produto.liga} · Tam. ${item.tamanho}</div>
          <div class="cart-item-preco">€ ${item.produto.preco * item.qtd}</div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-qty-row">
            <button class="cart-qty-btn" onclick="mudarQtdCarrinho(${idx}, -1)">−</button>
            <span class="cart-qty-num">${item.qtd}</span>
            <button class="cart-qty-btn" onclick="mudarQtdCarrinho(${idx}, 1)">+</button>
          </div>
          <button class="cart-remove-btn" onclick="removerItem(${idx})">🗑️</button>
        </div>
      </div>`;
  }).join("");

  resumoEl.innerHTML = `
    <div class="cart-total-line">
      <span>${carrinho.reduce((s,i) => s+i.qtd, 0)} item(s)</span>
      <span>€ ${totalGeral}</span>
    </div>`;
  resumoEl.style.display     = "block";
  btnFinalizar.style.display = "block";
}


/* ────────────────────────────────
   CHECKOUT — DADOS + WHATSAPP
──────────────────────────────── */
function abrirCheckout() {
  if (carrinho.length === 0) return;
  fecharCarrinho();
  document.getElementById("checkout-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function fecharCheckout() {
  document.getElementById("checkout-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function voltarParaCarrinho() {
  document.getElementById("checkout-drawer").classList.remove("open");
  abrirCarrinho();
}

function enviarWhatsApp() {
  const nome   = document.getElementById("nome").value.trim();
  const tel    = document.getElementById("telefone").value.trim();
  const cep    = document.getElementById("cep").value.trim();
  const rua    = document.getElementById("rua").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();
  const comp   = document.getElementById("complemento").value.trim();

  if (!nome)                   { alert("Informe seu nome.");             return; }
  if (!cep || !rua || !cidade) { alert("Preencha o endereço completo."); return; }

  const itensTexto = carrinho.map((item, i) =>
    `${i+1}. ${item.produto.nome} (${item.produto.liga}) — Tam. ${item.tamanho} — ${item.qtd}x — € ${item.produto.preco * item.qtd}`
  ).join("\n");

  const totalGeral = carrinho.reduce((s, i) => s + i.produto.preco * i.qtd, 0);

  const msg =
`🛍️ *NOVO PEDIDO — ${NOME_LOJA}*

━━━━━━━━━━━━━━━━━━━━
🎽 *PRODUTOS*
${itensTexto}

*Total: € ${totalGeral}*

━━━━━━━━━━━━━━━━━━━━
👤 *CLIENTE*
Nome: ${nome}${tel ? "\nTelefone: " + tel : ""}

━━━━━━━━━━━━━━━━━━━━
📦 *ENDEREÇO DE ENTREGA*
${rua}${comp ? ", " + comp : ""}
${cidade}${estado ? " / " + estado : ""}
Código Postal: ${cep}
━━━━━━━━━━━━━━━━━━━━

Aguardo as instruções de pagamento! 🙏`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}


/* ────────────────────────────────────────────────────────────
   ALTERAÇÃO 2: POP-UP AUTOMÁTICO APÓS 10 SEGUNDOS
   Aparece uma vez por sessão (sessionStorage evita repetição).
   ✏️ Edite o texto do pop-up na função mostrarPopup() abaixo,
      ou mude o tempo em setTimeout (10000 = 10 segundos).
──────────────────────────────────────────────────────────── */
function mostrarPopup() {
  /* não mostra de novo se o usuário já fechou nesta sessão */
  if (sessionStorage.getItem("popupVisto")) return;
  document.getElementById("popup-promo").classList.add("open");
}

function fecharPopup() {
  document.getElementById("popup-promo").classList.remove("open");
  sessionStorage.setItem("popupVisto", "1");
}

function irParaWhatsAppPopup() {
  /* ✏️ Edite a mensagem pré-preenchida do pop-up aqui */
  const msg = "Olá! Vi o site e gostaria de saber mais sobre modelos exclusivos que não estão no catálogo. Pode me ajudar?";
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}


/* ────────────────────────────────────────────────────────────
   ALTERAÇÃO 4: CARROSSEL DE DEPOIMENTOS
   Roda automaticamente a cada 5 segundos.
   Controles manuais com setas.
──────────────────────────────────────────────────────────── */
let depoSlide      = 0;
let depoTimer      = null;
const DEPO_INTERVALO = 5000; /* ✏️ tempo em ms entre slides automáticos (5000 = 5s) */

function renderDepoimentos() {
  const el = document.getElementById("depo-track");
  if (!el || DEPOIMENTOS.length === 0) return;

  el.innerHTML = DEPOIMENTOS.map((d, i) => {
    const avatar = d.img
      ? `<img src="${d.img}" alt="${d.nome}" class="depo-avatar-img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <div class="depo-avatar-inicial" style="display:none;">${d.nome.charAt(0)}</div>`
      : `<div class="depo-avatar-inicial">${d.nome.charAt(0)}</div>`;

    return `
      <div class="depo-card ${i === depoSlide ? 'active' : ''}">
        <div class="depo-stars">★★★★★</div>
        <p class="depo-texto">"${d.texto}"</p>
        <div class="depo-autor">
          <div class="depo-avatar">${avatar}</div>
          <div>
            <div class="depo-nome">${d.nome}</div>
            <div class="depo-local">${d.local}</div>
          </div>
        </div>
      </div>`;
  }).join("");

  /* dots de navegação */
  const dots = document.getElementById("depo-dots");
  if (dots) {
    dots.innerHTML = DEPOIMENTOS.map((_, i) =>
      `<button class="depo-dot ${i === depoSlide ? 'active' : ''}" onclick="irParaDepo(${i})"></button>`
    ).join("");
  }
}

function irParaDepo(idx) {
  depoSlide = idx;
  renderDepoimentos();
  reiniciarDepoTimer();
}

function mudarDepo(delta) {
  depoSlide = (depoSlide + delta + DEPOIMENTOS.length) % DEPOIMENTOS.length;
  renderDepoimentos();
  reiniciarDepoTimer();
}

function reiniciarDepoTimer() {
  clearInterval(depoTimer);
  depoTimer = setInterval(() => mudarDepo(1), DEPO_INTERVALO);
}


/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  atualizarContadorHeader();
  renderDepoimentos();

  /* carrossel de depoimentos automático */
  reiniciarDepoTimer();

  /* pop-up após 10 segundos */
  /* ✏️ mude 10000 para alterar o tempo de espera (em milissegundos) */
  setTimeout(mostrarPopup, 100000);

  /* fechar modal clicando fora */
  document.getElementById("modal").addEventListener("click", e => {
    if (e.target === document.getElementById("modal")) fecharModal();
  });

  /* fechar pop-up clicando fora */
  document.getElementById("popup-promo").addEventListener("click", e => {
    if (e.target === document.getElementById("popup-promo")) fecharPopup();
  });

  /* fechar drawers pelo overlay */
  document.getElementById("cart-overlay").addEventListener("click", () => {
    fecharCarrinho();
    fecharCheckout();
    fecharModal();
  });
});
