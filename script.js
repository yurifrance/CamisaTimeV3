/* ============================================================
   LOJA DE CAMISAS — script.js
   ============================================================ */


/* ══════════════════════════════════════════════════════════════
   ✏️  CONFIGURAÇÕES — EDITE AQUI
   ══════════════════════════════════════════════════════════════ */

const WHATSAPP = "351932144202"; /* ✏️ seu número com DDI+DDD */
const NOME_LOJA = "PacMan Ruivo";   /* ✏️ nome da sua loja       */


/* ══════════════════════════════════════════════════════════════
   ✏️  PRODUTOS — EDITE AQUI
   ══════════════════════════════════════════════════════════════
   - img:   caminho da imagem (ex: "imagens/brasil.jpeg")
            deixe "" para usar o emoji como substituto
   - cat:   "selecao" | "europeu" | "brasileiro" | "retro"
   ══════════════════════════════════════════════════════════════ */
const PRODUTOS = [

  /* ── BRASILEIROS ── */
  { id:13, nome:"Santos",          liga:"Brasileirão",          cat:"brasileiro", img:"imagens/santos.jpg",          emoji:"🔴", preco:35 },
  { id:14, nome:"Corinthians",       liga:"Brasileirão",          cat:"brasileiro", img:"imagens/corinthians.jpg",       emoji:"⚫", preco:35 },
  { id:15, nome:"Palmeiras",         liga:"Brasileirão",          cat:"brasileiro", img:"imagens/palmeiras.jpg",         emoji:"💚", preco:35 },
  { id:16, nome:"São Paulo",         liga:"Brasileirão",          cat:"brasileiro", img:"imagens/saopaulo.jpg",         emoji:"🔺", preco:35 },
  { id:17, nome:"Grêmio",            liga:"Brasileirão",          cat:"brasileiro", img:"imagens/gremio.jpg",            emoji:"💙", preco:35 },
  { id:18, nome:"Vasco" ,          liga:"Brasileirão",          cat:"brasileiro", img:"imagens/vasco.jpeg",          emoji:"🌟", preco:35 },


  /* ── SELEÇÕES ── */
  { id:1,  nome:"Brasil",            liga:"Seleção Brasileira",   cat:"selecao",    img:"imagens/brasil.jpeg",            emoji:"🇧🇷", preco:35 },
  { id:2,  nome:"Argentina",         liga:"Seleção Argentina",    cat:"selecao",    img:"imagens/argentina.jpeg",         emoji:"🇦🇷", preco:35 },
  { id:3,  nome:"Portugal",          liga:"Seleção Portuguesa",   cat:"selecao",    img:"imagens/portugal.jpeg",          emoji:"🇵🇹", preco:35 },
  { id:4,  nome:"França",            liga:"Seleção Francesa",     cat:"selecao",    img:"imagens/franca.jpeg",            emoji:"🇫🇷", preco:35 },
  { id:5,  nome:"Alemanha",          liga:"Seleção Alemã",        cat:"selecao",    img:"imagens/alemanha.jpeg",          emoji:"🇩🇪", preco:35 },
  { id:6,  nome:"Espanha",           liga:"Seleção Espanhola",    cat:"selecao",    img:"imagens/espanha.jpeg",           emoji:"🇪🇸", preco:35},

  /* ── EUROPEUS ── */
  { id:7,  nome:"Real Madrid",       liga:"La Liga",              cat:"europeu",    img:"imagens/real-madrid.jpeg",       emoji:"⚪", preco:35 },
  { id:8,  nome:"Barcelona",         liga:"La Liga",              cat:"europeu",    img:"imagens/barcelona.jpeg",         emoji:"🔵", preco:35 },
  { id:9,  nome:"Manchester United", liga:"Premier League",       cat:"europeu",    img:"imagens/manchester-united.jpeg", emoji:"🔴", preco:35 },
  { id:10, nome:"Manchester City",   liga:"Premier League",       cat:"europeu",    img:"imagens/manchester-city.jpeg",   emoji:"🩵", preco:35 },
  { id:11, nome:"PSG",               liga:"Ligue 1",              cat:"europeu",    img:"imagens/psg.jpeg",               emoji:"🗼", preco:35 },
  { id:12, nome:"Juventus",          liga:"Serie A",              cat:"europeu",    img:"imagens/juventus.jpeg",          emoji:"⚫", preco:35 },

  
  /* ── RETRÔ ── */
  { id:19, nome:"Brasil 1970",       liga:"Retrô — Seleção",      cat:"retro",      img:"imagens/brasil-1970.jpeg",       emoji:"🏆", preco:35 },
  { id:20, nome:"Brasil 1994",       liga:"Retrô — Seleção",      cat:"retro",      img:"imagens/brasil-1994.jpeg",       emoji:"🥇", preco:35},
  { id:21, nome:"Italia 1982",       liga:"Retrô — Seleção",      cat:"retro",      img:"imagens/italia-1982.jpeg",       emoji:"🇮🇹", preco:35 },
  { id:22, nome:"Argentina 1986",    liga:"Retrô — Seleção",      cat:"retro",      img:"imagens/argentina-1986.jpeg",    emoji:"⭐", preco:35 },
  { id:23, nome:"Ajax 1995",         liga:"Retrô — Clube",        cat:"retro",      img:"imagens/ajax-1995.jpeg",         emoji:"🏴", preco:35 },
  { id:24, nome:"Barcelona 1999",    liga:"Retrô — Clube",        cat:"retro",      img:"imagens/barcelona-1999.jpeg",    emoji:"🏅", preco:353
   },
];


/* ══════════════════════════════════════════════════════════════
   LÓGICA — não precisa editar abaixo
   ══════════════════════════════════════════════════════════════ */

/* ── ESTADO ── */
let filtroAtivo = "todos";
let carrinho = []; /* [ { produto, tamanho, qtd } ] */

/* ── MODAL ── */
let modalProduto = null;
let modalTamanho = null;
let modalQtd = 1;

/* ────────────────────────────────
   CATÁLOGO
──────────────────────────────── */
function renderCatalog() {
  const lista = filtroAtivo === "todos"
    ? PRODUTOS
    : PRODUTOS.filter(p => p.cat === filtroAtivo);

  document.getElementById("catalog").innerHTML = lista.map(p => {
    const noCart = carrinho.some(i => i.produto.id === p.id);
    const imgContent = p.img
      ? `<img src="${p.img}" alt="${p.nome}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <span style="display:none;font-size:2.5rem;width:100%;height:100%;align-items:center;justify-content:center;">${p.emoji}</span>`
      : `<span style="font-size:2.5rem;">${p.emoji}</span>`;

    return `
      <div class="shirt-card ${noCart ? 'in-cart' : ''}" onclick="abrirModal(${p.id})">
        ${noCart ? '<div class="in-cart-badge">✓ No carrinho</div>' : ''}
        <div class="shirt-img">${imgContent}</div>
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

/* ────────────────────────────────
   MODAL — selecionar tamanho/qtd
──────────────────────────────── */
function abrirModal(id) {
  modalProduto = PRODUTOS.find(p => p.id === id);
  modalTamanho = null;
  modalQtd = 1;

  const imgContent = modalProduto.img
    ? `<img src="${modalProduto.img}" alt="${modalProduto.nome}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
       <span style="display:none;font-size:3rem;align-items:center;justify-content:center;width:100%;height:100%;">${modalProduto.emoji}</span>`
    : `<span style="font-size:3rem;">${modalProduto.emoji}</span>`;

  document.getElementById("modal-img").innerHTML = imgContent;
  document.getElementById("modal-nome").textContent = modalProduto.nome;
  document.getElementById("modal-liga").textContent = modalProduto.liga;
  document.getElementById("modal-preco").textContent = `R$ ${modalProduto.preco}`;
  document.getElementById("modal-qty-num").textContent = 1;

  document.querySelectorAll(".modal-size-btn").forEach(b => b.classList.remove("active"));

  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
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
  if (!modalTamanho) {
    alert("Selecione um tamanho.");
    return;
  }
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
  const el = document.getElementById("cart-items");
  const btnFinalizar = document.getElementById("btn-finalizar");
  const resumoEl = document.getElementById("cart-total-row");

  if (carrinho.length === 0) {
    el.innerHTML = '<div class="cart-empty">Seu carrinho está vazio.<br>Adicione camisas para continuar.</div>';
    btnFinalizar.style.display = "none";
    resumoEl.style.display = "none";
    return;
  }

  const totalGeral = carrinho.reduce((s, i) => s + i.produto.preco * i.qtd, 0);

  el.innerHTML = carrinho.map((item, idx) => {
    const imgContent = item.produto.img
      ? `<img src="${item.produto.img}" alt="${item.produto.nome}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <span style="display:none;font-size:1.5rem;align-items:center;justify-content:center;width:100%;height:100%;">${item.produto.emoji}</span>`
      : `<span style="font-size:1.5rem;">${item.produto.emoji}</span>`;

    return `
      <div class="cart-item">
        <div class="cart-item-img">${imgContent}</div>
        <div class="cart-item-info">
          <div class="cart-item-nome">${item.produto.nome}</div>
          <div class="cart-item-sub">${item.produto.liga} · Tam. ${item.tamanho}</div>
          <div class="cart-item-preco">R$ ${item.produto.preco * item.qtd}</div>
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
      <span>R$ ${totalGeral}</span>
    </div>`;
  resumoEl.style.display = "block";
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

  if (!nome)                  { alert("Informe seu nome.");             return; }
  if (!cep || !rua || !cidade){ alert("Preencha o endereço completo."); return; }

  const itensTexto = carrinho.map((item, i) =>
    `${i+1}. ${item.produto.nome} (${item.produto.liga}) — Tam. ${item.tamanho} — ${item.qtd}x — R$ ${item.produto.preco * item.qtd}`
  ).join("\n");

  const totalGeral = carrinho.reduce((s, i) => s + i.produto.preco * i.qtd, 0);

  const msg =
`🛍️ *NOVO PEDIDO — ${NOME_LOJA}*

━━━━━━━━━━━━━━━━━━━━
🎽 *PRODUTOS*
${itensTexto}

*Total: R$ ${totalGeral}*

━━━━━━━━━━━━━━━━━━━━
👤 *CLIENTE*
Nome: ${nome}${tel ? "\nTelefone: " + tel : ""}

━━━━━━━━━━━━━━━━━━━━
📦 *ENDEREÇO DE ENTREGA*
${rua}${comp ? ", " + comp : ""}
${cidade}${estado ? " / " + estado : ""}
CEP: ${cep}
━━━━━━━━━━━━━━━━━━━━

Aguardo as instruções de pagamento! 🙏`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  atualizarContadorHeader();

  /* fechar modal clicando fora */
  document.getElementById("modal").addEventListener("click", e => {
    if (e.target === document.getElementById("modal")) fecharModal();
  });

  /* fechar drawers pelo overlay */
  document.getElementById("cart-overlay").addEventListener("click", () => {
    fecharCarrinho();
    fecharCheckout();
    fecharModal();
  });
});
