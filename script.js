/* ============================================================
   LOJA DE CAMISAS — script.js
   ============================================================ */


/* ══════════════════════════════════════════════════════════════
   ✏️  CONFIGURAÇÕES — EDITE AQUI
   ══════════════════════════════════════════════════════════════ */

/* ── SEU NÚMERO DO WHATSAPP ──────────────────────────────────
   Formato: código do país + DDD + número (sem espaços ou símbolos)
   Exemplo Brasil: 5511999999999                               */
const WHATSAPP = "351932144202";

/* ── NOME DA LOJA ────────────────────────────────────────────
   Aparece na mensagem enviada ao WhatsApp                     */
const NOME_LOJA = "PacMan Ruivo Store";


/* ══════════════════════════════════════════════════════════════
   ✏️  PRODUTOS — EDITE AQUI
   ══════════════════════════════════════════════════════════════
   Campos de cada produto:
   - id:      número único (não repetir)
   - nome:    nome que aparece no card
   - liga:    subtítulo (ex: "La Liga", "Seleção", "Retrô")
   - cat:     categoria do filtro — use exatamente:
              "selecao" | "europeu" | "brasileiro" | "retro"
   - img:     caminho da imagem (ex: "imagens/flamengo.jpeg")
              OU deixe "" para mostrar o emoji no lugar
   - emoji:   aparece se não tiver imagem (ex: "🇧🇷")
   - preco:   número sem R$ (ex: 149)
   ══════════════════════════════════════════════════════════════ */
const PRODUTOS = [

  /* ── SELEÇÕES ─────────────────────────────────────────── */
  {
    id: 1,
    nome: "Brasil",
    liga: "Seleção Brasileira",
    cat: "selecao",
    img: "imagens/brasil.jpeg",   /* ✏️ coloque o caminho da sua imagem */
    emoji: "🇧🇷",
    preco: 1559
  },
  {
    // id: 2,
    // nome: "Argentina",
    // liga: "Seleção Argentina",
    // cat: "selecao",
    // img: "imagens/argentina.jpeg",
    // emoji: "🇦🇷",
    // preco: 149
  },
  {
    id: 3,
    nome: "Portugal",
    liga: "Seleção Portuguesa",
    cat: "selecao",
    img: "imagens/portugal.jpeg",
    emoji: "🇵🇹",
    preco: 149
  },
  {
    id: 4,
    nome: "França",
    liga: "Seleção Francesa",
    cat: "selecao",
    img: "imagens/franca.jpeg",
    emoji: "🇫🇷",
    preco: 149
  },
  {
    id: 5,
    nome: "Alemanha",
    liga: "Seleção Alemã",
    cat: "selecao",
    img: "imagens/alemanha.jpeg",
    emoji: "🇩🇪",
    preco: 149
  },
  {
    id: 6,
    nome: "Espanha",
    liga: "Seleção Espanhola",
    cat: "selecao",
    img: "imagens/espanha.jpeg",
    emoji: "🇪🇸",
    preco: 149
  },

  /* ── TIMES EUROPEUS ───────────────────────────────────── */
  {
    id: 7,
    nome: "Real Madrid",
    liga: "La Liga",
    cat: "europeu",
    img: "imagens/real-madrid.jpeg",
    emoji: "⚪",
    preco: 159
  },
  {
    id: 8,
    nome: "Barcelona",
    liga: "La Liga",
    cat: "europeu",
    img: "imagens/barcelona.jpeg",
    emoji: "🔵",
    preco: 159
  },
  {
    id: 9,
    nome: "Manchester United",
    liga: "Premier League",
    cat: "europeu",
    img: "imagens/manchester-united.jpeg",
    emoji: "🔴",
    preco: 159
  },
  {
    id: 10,
    nome: "Manchester City",
    liga: "Premier League",
    cat: "europeu",
    img: "imagens/manchester-city.jpeg",
    emoji: "🩵",
    preco: 159
  },
  {
    id: 11,
    nome: "PSG",
    liga: "Ligue 1",
    cat: "europeu",
    img: "imagens/psg.jpeg",
    emoji: "🗼",
    preco: 159
  },
  {
    id: 12,
    nome: "Juventus",
    liga: "Serie A",
    cat: "europeu",
    img: "imagens/juventus.jpeg",
    emoji: "⚫",
    preco: 159
  },

  /* ── TIMES BRASILEIROS ────────────────────────────────── */
  {
    id: 13,
    nome: "Flamengo",
    liga: "Brasileirão",
    cat: "brasileiro",
    img: "imagens/flamengo.jpeg",
    emoji: "🔴",
    preco: 139
  },
  {
    id: 14,
    nome: "Corinthians",
    liga: "Brasileirão",
    cat: "brasileiro",
    img: "imagens/corinthians.jpeg",
    emoji: "⚫",
    preco: 139
  },
  {
    id: 15,
    nome: "Palmeiras",
    liga: "Brasileirão",
    cat: "brasileiro",
    img: "imagens/palmeiras.jpeg",
    emoji: "💚",
    preco: 139
  },
  {
    id: 16,
    nome: "São Paulo",
    liga: "Brasileirão",
    cat: "brasileiro",
    img: "imagens/sao-paulo.jpeg",
    emoji: "🔺",
    preco: 139
  },
  {
    id: 17,
    nome: "Grêmio",
    liga: "Brasileirão",
    cat: "brasileiro",
    img: "imagens/gremio.jpeg",
    emoji: "💙",
    preco: 139
  },
  {
    id: 18,
    nome: "Cruzeiro",
    liga: "Brasileirão",
    cat: "brasileiro",
    img: "imagens/cruzeiro.jpeg",
    emoji: "🌟",
    preco: 139
  },

  /* ── RETRÔ ────────────────────────────────────────────── */
  {
    id: 19,
    nome: "Brasil 1970",
    liga: "Retrô — Seleção",
    cat: "retro",
    img: "imagens/brasil-1970.jpeg",
    emoji: "🏆",
    preco: 169
  },
  {
    id: 20,
    nome: "Brasil 1994",
    liga: "Retrô — Seleção",
    cat: "retro",
    img: "imagens/brasil-1994.jpeg",
    emoji: "🥇",
    preco: 169
  },
  {
    id: 21,
    nome: "Italia 1982",
    liga: "Retrô — Seleção",
    cat: "retro",
    img: "imagens/italia-1982.jpeg",
    emoji: "🇮🇹",
    preco: 169
  },
  {
    id: 22,
    nome: "Argentina 1986",
    liga: "Retrô — Seleção",
    cat: "retro",
    img: "imagens/argentina-1986.jpeg",
    emoji: "⭐",
    preco: 169
  },
  {
    id: 23,
    nome: "Ajax 1995",
    liga: "Retrô — Clube",
    cat: "retro",
    img: "imagens/ajax-1995.jpeg",
    emoji: "🏴",
    preco: 169
  },
  {
    id: 24,
    nome: "Barcelona 1999",
    liga: "Retrô — Clube",
    cat: "retro",
    img: "imagens/barcelona-1999.jpeg",
    emoji: "🏅",
    preco: 169
  },

];


/* ══════════════════════════════════════════════════════════════
   LÓGICA — não precisa editar abaixo
   ══════════════════════════════════════════════════════════════ */

let estado = {
  selecionado: null,
  tamanho: null,
  qtd: 1,
  filtro: "todos"
};

/* ── RENDERIZAR CATÁLOGO ── */
function renderCatalog() {
  const lista = estado.filtro === "todos"
    ? PRODUTOS
    : PRODUTOS.filter(p => p.cat === estado.filtro);

  const el = document.getElementById("catalog");

  el.innerHTML = lista.map(p => {
    const isSelected = estado.selecionado && estado.selecionado.id === p.id;
    const imgContent = p.img
      ? `<img src="${p.img}" alt="${p.nome}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <span class="emoji-fallback" style="display:none; font-size:2.5rem; width:100%; height:100%; align-items:center; justify-content:center;">${p.emoji}</span>`
      : `<span style="font-size:2.5rem;">${p.emoji}</span>`;

    return `
      <div class="shirt-card ${isSelected ? 'selected' : ''}" onclick="selecionarProduto(${p.id})">
        <div class="check-badge">✓</div>
        <div class="shirt-img">${imgContent}</div>
        <div class="shirt-name">${p.nome}</div>
        <div class="shirt-league">${p.liga}</div>
        <div class="shirt-price">R$ ${p.preco}</div>
      </div>
    `;
  }).join("");
}

/* ── FILTRO ── */
function filtrar(cat, btn) {
  estado.filtro = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderCatalog();
}

/* ── SELECIONAR PRODUTO ── */
function selecionarProduto(id) {
  estado.selecionado = PRODUTOS.find(p => p.id === id);
  renderCatalog();

  const notice = document.getElementById("selected-notice");
  notice.textContent = `✅ Selecionado: ${estado.selecionado.nome}`;
  notice.classList.add("visible");

  atualizarResumo();

  if (window.innerWidth < 820) {
    document.getElementById("order-box").scrollIntoView({ behavior: "smooth" });
  }
}

/* ── TAMANHO ── */
function escolherTamanho(tam, btn) {
  estado.tamanho = tam;
  document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  atualizarResumo();
}

/* ── QUANTIDADE ── */
function mudarQtd(delta) {
  estado.qtd = Math.max(1, estado.qtd + delta);
  document.getElementById("qty-num").textContent = estado.qtd;
  atualizarResumo();
}

/* ── RESUMO ── */
function atualizarResumo() {
  const el = document.getElementById("resumo");
  if (!estado.selecionado) {
    el.innerHTML = '<div class="summary-empty">👈 Selecione uma camisa ao lado</div>';
    return;
  }
  const total = estado.selecionado.preco * estado.qtd;
  el.innerHTML = `
    <div class="summary-row"><span>Camisa</span><span>${estado.selecionado.nome}</span></div>
    <div class="summary-row"><span>Liga</span><span>${estado.selecionado.liga}</span></div>
    <div class="summary-row"><span>Tamanho</span><span>${estado.tamanho || "—"}</span></div>
    <div class="summary-row"><span>Quantidade</span><span>${estado.qtd}x</span></div>
    <div class="summary-row total"><span>Total</span><span>R$ ${total}</span></div>
  `;
}

/* ── ENVIAR WHATSAPP ── */
function enviarWhatsApp() {
  if (!estado.selecionado) {
    alert("Por favor, selecione uma camisa.");
    return;
  }
  if (!estado.tamanho) {
    alert("Por favor, selecione um tamanho.");
    return;
  }

  const nome    = document.getElementById("nome").value.trim();
  const tel     = document.getElementById("telefone").value.trim();
  const cep     = document.getElementById("cep").value.trim();
  const rua     = document.getElementById("rua").value.trim();
  const cidade  = document.getElementById("cidade").value.trim();
  const comp    = document.getElementById("complemento").value.trim();

  if (!nome)            { alert("Por favor, informe seu nome."); return; }
  if (!cep || !rua || !cidade) { alert("Por favor, preencha o endereço completo."); return; }

  const total = estado.selecionado.preco * estado.qtd;

  const msg =
`🛍️ *NOVO PEDIDO — ${NOME_LOJA}*

━━━━━━━━━━━━━━━━━━━━
🎽 *PRODUTO*
Camisa: ${estado.selecionado.nome} (${estado.selecionado.liga})
Tamanho: ${estado.tamanho}
Quantidade: ${estado.qtd}x
*Total: R$ ${total}*

━━━━━━━━━━━━━━━━━━━━
👤 *CLIENTE*
Nome: ${nome}${tel ? "\nTelefone: " + tel : ""}

━━━━━━━━━━━━━━━━━━━━
📦 *ENDEREÇO DE ENTREGA*
${rua}${comp ? ", " + comp : ""}
${cidade}
CEP: ${cep}
━━━━━━━━━━━━━━━━━━━━

Aguardo as instruções de pagamento! 🙏`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  atualizarResumo();
});
